import React, { useState, useEffect, useMemo } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged, signInWithCustomToken } from 'firebase/auth';
import { getFirestore, doc, setDoc, onSnapshot, collection, getDocs } from 'firebase/firestore';
import { 
  BookOpen, Layers, Globe, CheckCircle, ChevronRight, List, Trash2, Plus,
  AlertCircle, Loader2, ChevronLeft, Download, Sparkles, RefreshCw, 
  User, Calendar, Flag, Info, ShieldCheck, Database, ArrowRight,
  PlusCircle, Link2, Clock, Navigation, FileJson
} from 'lucide-react';

// --- Firebase Setup ---
// Die Konfiguration wird normalerweise über die Umgebung injiziert
const firebaseConfig = {
      apiKey: import.meta.env.VITE_API_KEY,
      authDomain: import.meta.env.VITE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = typeof __app_id !== 'undefined' ? __app_id : 'cicero-rst-v1';

const RST_RELATIONS = [
  { name: "Antithesis", type: "mono" }, { name: "Background", type: "mono" },
  { name: "Cause", type: "mono" }, { name: "Circumstance", type: "mono" },
  { name: "Concession", type: "mono" }, { name: "Condition", type: "mono" },
  { name: "Contrast", type: "multi" }, { name: "Elaboration", type: "mono" },
  { name: "Enablement", type: "mono" }, { name: "Evaluation", type: "mono" },
  { name: "Evidence", type: "mono" }, { name: "Interpretation", type: "mono" },
  { name: "Joint", type: "multi" }, { name: "Justification", type: "mono" },
  { name: "List", type: "multi" }, { name: "Motivation", type: "mono" },
  { name: "Otherwise", type: "mono" }, { name: "Preparation", type: "mono" },
  { name: "Purpose", type: "mono" }, { name: "Restatement", type: "mono" },
  { name: "Result", type: "mono" }, { name: "Sequence", type: "multi" }
];

const FALLBACK_LETTERS = [
  { 
    corpus: "ad_familiares", book_n: 1, letter_n: 1, sender: "Cicero", recipient: "Lentulus", 
    date_when: "Jan 56 BC", year: -56, dateline: "Romae Id. Ian. a. u. c. 698",
    text: "Ego omni officio ac potius pietate erga te ceteris satis facio omnibus, mihi ipse numquam satis facio..." 
  }
];

export default function App() {
  const [user, setUser] = useState(null);
  const [letters, setLetters] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [translating, setTranslating] = useState(false);
  const [preAnnotating, setPreAnnotating] = useState(false);
  const [exportingAll, setExportingAll] = useState(false);
  const [error, setError] = useState(null);
  
  // Der API-Key wird nun im State gespeichert und vom Server geladen
  const [geminiKey, setGeminiKey] = useState("");
  const [annotations, setAnnotations] = useState({}); 
  const [translations, setTranslations] = useState({});
  const [completionStatus, setCompletionStatus] = useState({}); 
  const [linking, setLinking] = useState({ source: null, role: null, targetRelId: null });

  const currentLetter = letters[currentIndex];
  const letterId = currentLetter ? `${currentLetter.corpus}_${currentLetter.book_n}_${currentLetter.letter_n}` : null;
  const letterIdentifier = currentLetter ? `${currentLetter.corpus} ${currentLetter.book_n}.${currentLetter.letter_n}` : "";

  // 1. Initialisierung: Auth, Config und Daten laden
  useEffect(() => {
    const initApp = async () => {
      try {
        // Authentifizierung
        if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
          await signInWithCustomToken(auth, __initial_auth_token);
        } else {
          await signInAnonymously(auth);
        }

        // API Konfiguration vom Backend laden (wichtig für Heroku Env Vars)
        try {
          const configRes = await fetch('/api/config');
          if (configRes.ok) {
            const configData = await configRes.json();
            setGeminiKey(configData.gemini_api_key || "");
          }
        } catch (e) { 
          console.warn("Config API nicht erreichbar. KI-Features eventuell eingeschränkt."); 
        }

        // Briefe laden
        try {
          const res = await fetch('/api/letters');
          if (res.ok) {
            const data = await res.json();
            setLetters(data.length > 0 ? data : FALLBACK_LETTERS);
          } else {
            setLetters(FALLBACK_LETTERS);
          }
        } catch (e) {
          setLetters(FALLBACK_LETTERS);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    initApp();
    const unsub = onAuthStateChanged(auth, setUser);
    return () => unsub();
  }, []);

  // 2. Real-time Sync mit Firestore
  useEffect(() => {
    if (!user || !letterId) return;

    const statusColRef = collection(db, 'artifacts', appId, 'public', 'data', 'status');
    const unsubStatus = onSnapshot(statusColRef, (snapshot) => {
      const stats = {};
      snapshot.forEach(doc => { stats[doc.id] = doc.data().completed; });
      setCompletionStatus(stats);
    });

    const annotRef = doc(db, 'artifacts', appId, 'public', 'data', 'annotations', letterId);
    const transRef = doc(db, 'artifacts', appId, 'public', 'data', 'translations', letterId);
    
    const unsubAnnot = onSnapshot(annotRef, (docSnap) => {
      if (docSnap.exists()) setAnnotations(prev => ({ ...prev, [letterId]: docSnap.data() }));
    }, (err) => console.error("Annot Sync Error:", err));

    const unsubTrans = onSnapshot(transRef, (docSnap) => {
      if (docSnap.exists()) setTranslations(prev => ({ ...prev, [letterId]: docSnap.data().text }));
    }, (err) => console.error("Trans Sync Error:", err));

    return () => { unsubStatus(); unsubAnnot(); unsubTrans(); };
  }, [user, letterId]);

  const currentLetterData = annotations[letterId] || { edus: [], relations: [], source: 'manual', verified: true };
  const isCompleted = completionStatus[letterId] || false;
  const needsVerification = currentLetterData.source === 'ai' && !currentLetterData.verified;

  const progressStats = useMemo(() => {
    const total = letters.length || 1;
    const completed = Object.values(completionStatus).filter(v => v === true).length;
    const started = Object.keys(annotations).length;
    return { 
      total, completed, started,
      percentComplete: Math.round((completed / total) * 100),
      percentStarted: Math.round((started / total) * 100)
    };
  }, [letters, completionStatus, annotations]);

  const saveToCloud = async (data) => {
    if (!user || !letterId) return;
    try {
      await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'annotations', letterId), data);
    } catch (e) {
      console.error("Save error:", e);
    }
  };

  // Hilfsfunktion für Gemini API Aufrufe mit dem geladenen Key
  const callGemini = async (prompt, systemInstruction, schema) => {
    const keyToUse = geminiKey;
    if (!keyToUse) {
        console.error("Gemini API Key fehlt.");
        return null;
    }

    let delay = 1000;
    for (let i = 0; i < 5; i++) {
      try {
        const payload = {
          contents: [{ parts: [{ text: prompt }] }],
          systemInstruction: { parts: [{ text: systemInstruction }] },
          generationConfig: schema ? { responseMimeType: "application/json", responseSchema: schema } : {}
        };
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${keyToUse}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error(`API Error: ${res.status}`);
        const result = await res.json();
        return result.candidates?.[0]?.content?.parts?.[0]?.text;
      } catch (err) {
        if (i === 4) throw err;
        await new Promise(r => setTimeout(r, delay));
        delay *= 2;
      }
    }
  };

  const preAnnotateWithAI = async () => {
    if (!currentLetter || preAnnotating) return;
    setPreAnnotating(true);
    try {
      const schema = {
        type: "OBJECT",
        properties: {
          edus: { type: "ARRAY", items: { type: "OBJECT", properties: { text: { type: "STRING" } }, required: ["text"] } },
          relations: { type: "ARRAY", items: { type: "OBJECT", properties: { nucleiIndices: { type: "ARRAY", items: { type: "NUMBER" } }, satelliteIndex: { type: "NUMBER" }, type: { type: "STRING" } }, required: ["nucleiIndices", "type"] } }
        },
        required: ["edus", "relations"]
      };
      const systemPrompt = "Du bist ein Experte für Rhetorical Structure Theory (RST). Analysiere den lateinischen Text und liefere eine Segmentierung (EDUs) sowie Relationen im JSON Format.";
      const responseText = await callGemini(currentLetter.text, systemPrompt, schema);
      if (!responseText) return;
      const data = JSON.parse(responseText);
      const newEdus = (data.edus || []).map(e => ({ id: crypto.randomUUID(), text: e.text }));
      const newRelations = (data.relations || []).map(r => ({ 
        id: crypto.randomUUID(), 
        nuclei: (r.nucleiIndices || []).map(idx => newEdus[idx]?.id).filter(Boolean), 
        satellite: r.satelliteIndex !== undefined ? newEdus[r.satelliteIndex]?.id : null, 
        type: r.type 
      })).filter(r => r.nuclei.length > 0);
      await saveToCloud({ edus: newEdus, relations: newRelations, source: 'ai', verified: false });
    } catch (err) { console.error("KI-Fehler:", err); } finally { setPreAnnotating(false); }
  };

  const translate = async () => {
    if (!currentLetter || translating) return;
    setTranslating(true);
    try {
      const text = await callGemini(`Übersetze diesen Brief von Cicero ins Deutsche: "${currentLetter.text}"`, "Du bist ein Experte für klassische Philologie.");
      if (text) await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'translations', letterId), { text });
    } catch (e) { console.error(e); } finally { setTranslating(false); }
  };

  const handleLink = (eduId, role, targetRelId = null) => {
    if (targetRelId) {
      const updatedRels = (currentLetterData.relations || []).map(r => {
        if (r.id === targetRelId) return { ...r, nuclei: Array.from(new Set([...(r.nuclei || []), eduId])) };
        return r;
      });
      saveToCloud({ ...currentLetterData, relations: updatedRels });
      setLinking({ source: null, role: null, targetRelId: null });
    } else if (!linking.source) {
      setLinking({ source: eduId, role, targetRelId: null });
    } else {
      if (linking.source === eduId) { setLinking({ source: null, role: null, targetRelId: null }); return; }
      const relation = { 
        id: crypto.randomUUID(), 
        nuclei: linking.role === 'N' ? [linking.source] : [eduId], 
        satellite: linking.role === 'S' ? linking.source : eduId, 
        type: "Elaboration" 
      };
      saveToCloud({ ...currentLetterData, relations: [...(currentLetterData.relations || []), relation], source: 'manual', verified: true });
      setLinking({ source: null, role: null, targetRelId: null });
    }
  };

  const renderAnnotatedText = () => {
    if (!currentLetter) return null;
    let text = currentLetter.text;
    const edus = [...(currentLetterData.edus || [])].sort((a, b) => b.text.length - a.text.length);
    let parts = [{ type: 'text', content: text }];
    edus.forEach(edu => {
      let newParts = [];
      parts.forEach(part => {
        if (part.type === 'text') {
          const subparts = part.content.split(edu.text);
          subparts.forEach((sp, i) => {
            if (sp) newParts.push({ type: 'text', content: sp });
            if (i < subparts.length - 1) {
              const inRel = (currentLetterData.relations || []).find(r => (r.nuclei || []).includes(edu.id) || r.satellite === edu.id);
              let color = "bg-yellow-100 border-yellow-300";
              if (inRel) color = (inRel.nuclei || []).includes(edu.id) ? "bg-blue-100 border-blue-400 font-semibold" : "bg-purple-100 border-purple-400";
              newParts.push({ type: 'edu', content: edu.text, id: edu.id, className: color });
            }
          });
        } else newParts.push(part);
      });
      parts = newParts;
    });
    return parts.map((p, i) => p.type === 'text' ? <span key={i}>{p.content}</span> : <span key={i} className={`${p.className} border-b-2 px-0.5 rounded-sm transition-all duration-300 shadow-sm font-medium`}>{p.content}</span>);
  };

  const exportFullCorpus = async () => {
    if (exportingAll) return;
    setExportingAll(true);
    try {
      const colRef = collection(db, 'artifacts', appId, 'public', 'data', 'annotations');
      const snapshot = await getDocs(colRef);
      const allAnnotations = {};
      snapshot.forEach(docSnap => { allAnnotations[docSnap.id] = docSnap.data(); });
      const exportData = { 
          app_id: appId,
          export_date: new Date().toISOString(),
          corpus_data: letters.map(l => ({ metadata: l, annotations: allAnnotations[`${l.corpus}_${l.book_n}_${l.letter_n}`] || null })) 
      };
      const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `cicero_rst_corpus_${new Date().toISOString().split('T')[0]}.json`;
      link.click();
      URL.revokeObjectURL(url);
    } catch (err) { console.error("Export Fehler:", err); } finally { setExportingAll(false); }
  };

  if (loading) return <div className="flex h-screen items-center justify-center bg-stone-50"><Loader2 className="animate-spin mr-2" /> Initialisiere App...</div>;

  return (
    <div className="flex h-screen flex-col bg-stone-100 text-stone-900 font-sans overflow-hidden">
      <header className="flex items-center justify-between px-6 py-2.5 bg-white border-b shadow-sm z-30">
        <div className="flex items-center gap-3">
          <div className="bg-red-800 p-1.5 rounded-lg text-white shadow-sm"><BookOpen size={20} /></div>
          <div className="flex flex-col">
            <h1 className="text-md font-bold text-stone-800 tracking-tight leading-none uppercase">Cicero RST Annotator</h1>
            <span className="text-[10px] text-stone-400 font-mono mt-1 font-bold">{letterIdentifier}</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4 mr-2 text-[10px] font-bold">
            <div className="flex flex-col items-end">
                <span className="text-stone-400 uppercase tracking-tighter">Status</span>
                <span className="text-stone-600">{progressStats.completed}/{progressStats.total} erledigt</span>
            </div>
            <button onClick={exportFullCorpus} disabled={exportingAll} title="Gesamt-Korpus Export" className="p-2 bg-stone-100 hover:bg-stone-200 rounded-lg text-stone-600 transition-colors border">
              {exportingAll ? <Loader2 size={14} className="animate-spin"/> : <FileJson size={14}/>}
            </button>
          </div>
          <div className="flex items-center bg-stone-100 rounded-full px-2 py-1 border shadow-inner">
            <button onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))} className="p-1.5 hover:bg-white rounded-full transition-all" disabled={currentIndex === 0}><ChevronLeft size={18} /></button>
            <div className="relative group px-2">
                <select 
                    value={currentIndex} 
                    onChange={(e) => setCurrentIndex(parseInt(e.target.value))} 
                    className="appearance-none bg-transparent font-bold text-xs tabular-nums cursor-pointer focus:outline-none pr-4"
                >
                    {letters.map((l, i) => (<option key={i} value={i}>Brief {i + 1}</option>))}
                </select>
                <ChevronRight size={10} className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none text-stone-400"/>
            </div>
            <button onClick={() => setCurrentIndex(prev => Math.min(letters.length - 1, prev + 1))} className="p-1.5 hover:bg-white rounded-full transition-all" disabled={currentIndex === letters.length - 1}><ChevronRight size={18} /></button>
          </div>
          {needsVerification && (
            <button onClick={() => saveToCloud({ ...currentLetterData, verified: true })} className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-purple-600 text-white shadow-lg active:scale-95 transition-all"><ShieldCheck size={14}/> KI-Bestätigung</button>
          )}
          <button onClick={() => setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'status', letterId), { completed: !isCompleted })} disabled={needsVerification} className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-md transition-all active:scale-95 ${needsVerification ? 'bg-stone-200 text-stone-400 cursor-not-allowed' : isCompleted ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-stone-800 text-white hover:bg-stone-700'}`}>
            {isCompleted ? <CheckCircle size={14}/> : <Flag size={14}/>} {isCompleted ? 'Abgeschlossen' : 'Fertigstellen'}
          </button>
        </div>
      </header>
      
      <div className="bg-white border-b px-6 py-2 flex gap-8 items-center text-[11px] text-stone-500 shadow-sm z-20 overflow-x-auto whitespace-nowrap">
         <div className="flex gap-1.5 shrink-0"><User size={12} className="text-stone-300"/> <b>Absender:</b> {currentLetter?.sender || "Cicero"}</div>
         <div className="flex gap-1.5 shrink-0"><User size={12} className="text-stone-300 rotate-180"/> <b>Empfänger:</b> {currentLetter?.recipient || "N/A"}</div>
         <div className="flex gap-1.5 shrink-0"><Clock size={12} className="text-stone-300"/> <b>Datiert:</b> {currentLetter?.date_when || currentLetter?.dateline}</div>
         <div className="flex items-center gap-1.5 border-l pl-8 ml-auto text-stone-400"><Database size={12}/> <b>Quelle:</b> {currentLetter?.corpus}</div>
      </div>

      <main className="flex flex-1 overflow-hidden p-3 gap-3">
        <div className="flex-1 flex flex-col bg-white rounded-2xl shadow-sm border overflow-hidden">
          <div className="px-5 py-3 border-b bg-stone-50/30 flex justify-between items-center text-[10px] font-black uppercase text-stone-500 tracking-widest">
             <h2 className="flex items-center gap-2"><Globe size={16} className="text-blue-600"/> Lateinischer Text</h2>
             <div className="flex gap-4">
                <div className="flex items-center gap-1.5 font-bold text-blue-600"><div className="w-2.5 h-2.5 rounded bg-blue-400"></div> <span>Nucleus</span></div>
                <div className="flex items-center gap-1.5 font-bold text-purple-600"><div className="w-2.5 h-2.5 rounded bg-purple-400"></div> <span>Satellite</span></div>
             </div>
          </div>
          <div className="flex-1 p-12 overflow-auto leading-[2.4] text-xl font-serif text-stone-800 italic selection:bg-blue-100">
            <div className="max-w-3xl mx-auto drop-shadow-sm">{renderAnnotatedText()}</div>
          </div>
          <div className="p-4 border-t bg-stone-50 flex justify-between items-center shadow-inner">
            <button onClick={() => {
               const sel = window.getSelection().toString().trim();
               if (sel) {
                 const newEdus = [...(currentLetterData.edus || []), { id: crypto.randomUUID(), text: sel }];
                 saveToCloud({ ...currentLetterData, edus: newEdus, source: 'manual', verified: true });
                 window.getSelection().removeAllRanges();
               }
            }} className="text-xs bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-700 shadow-lg active:scale-95 transition-all">
              <Plus size={18}/> EDU markieren
            </button>
            {!geminiKey && <div className="text-[10px] text-amber-600 font-bold bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-100 flex items-center gap-2 shadow-sm"><AlertCircle size={14}/> KI-Features (Heroku GEMINI_API_KEY) nicht konfiguriert</div>}
          </div>
        </div>

        <div className="w-[520px] flex flex-col bg-white rounded-2xl shadow-sm border overflow-hidden">
          <div className="px-5 py-4 border-b bg-stone-50 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <h2 className="font-black text-stone-700 text-[11px] uppercase tracking-widest flex items-center gap-2"><Layers size={16} className="text-red-700"/> Strukturanalyse</h2>
                {currentLetterData.source === 'ai' && (<span className={`text-[9px] px-2 py-0.5 rounded-full font-black ${currentLetterData.verified ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700 shadow-sm'}`}>{currentLetterData.verified ? 'VERIFIZIERT' : 'KI-ENTWURF'}</span>)}
            </div>
            <div className="flex gap-2">
              <button onClick={preAnnotateWithAI} disabled={preAnnotating || !geminiKey} title="KI-Vorannotation" className="p-2 text-purple-600 hover:bg-purple-50 rounded-xl transition-all disabled:opacity-30 border border-transparent hover:border-purple-100">
                {preAnnotating ? <Loader2 className="animate-spin" size={20}/> : <Sparkles size={20}/>}
              </button>
              <button onClick={() => { const dataStr = JSON.stringify({ metadata: currentLetter, annotations: currentLetterData }, null, 2); const link = document.createElement('a'); link.href = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr); link.download = `cicero_rst_${letterId}.json`; link.click(); }} title="Einzel-Export" className="p-2 text-stone-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all border border-transparent"><Download size={20}/></button>
            </div>
          </div>
          
          <div className="flex-1 overflow-auto p-5 space-y-6 scrollbar-hide">
            <section>
              <h3 className="text-[10px] font-black uppercase text-stone-400 mb-4 tracking-widest flex items-center gap-2"><Link2 size={14} className="text-red-800"/> Verknüpfungen</h3>
              <div className="space-y-4">
                {(currentLetterData.relations || []).map((rel) => {
                  const relInfo = RST_RELATIONS.find(r => r.name === rel.type);
                  return (
                    <div key={rel.id} className="border border-stone-200 rounded-2xl p-4 bg-stone-50/50 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-center mb-3">
                        <select value={rel.type} onChange={(e) => {
                          const updated = currentLetterData.relations.map(r => r.id === rel.id ? {...r, type: e.target.value} : r);
                          saveToCloud({...currentLetterData, relations: updated});
                        }} className="text-[11px] font-black uppercase outline-none bg-transparent cursor-pointer hover:text-red-700 transition-colors">
                          {RST_RELATIONS.map(r => <option key={r.name}>{r.name}</option>)}
                        </select>
                        <button onClick={() => saveToCloud({...currentLetterData, relations: currentLetterData.relations.filter(r => r.id !== rel.id)})} className="text-stone-300 hover:text-red-500 transition-colors"><Trash2 size={14}/></button>
                      </div>
                      <div className="space-y-2">
                        {(rel.nuclei || []).map((nId, idx) => (
                          <div key={nId} className="flex gap-2 bg-blue-50 p-2 rounded-lg text-[10px] italic border border-blue-100 group">
                            <span className="font-bold text-blue-600 shrink-0">N#{idx+1}</span>
                            <p className="line-clamp-1 flex-1">{currentLetterData.edus.find(e => e.id === nId)?.text || "Fragment..."}</p>
                            {(rel.nuclei || []).length > 1 && (
                                <button onClick={() => {
                                    const updatedNuclei = rel.nuclei.filter(id => id !== nId);
                                    saveToCloud({...currentLetterData, relations: currentLetterData.relations.map(r => r.id === rel.id ? {...r, nuclei: updatedNuclei} : r)});
                                }} className="opacity-0 group-hover:opacity-100 text-stone-300 hover:text-red-500"><Trash2 size={10}/></button>
                            )}
                          </div>
                        ))}
                        {rel.satellite && (
                          <div className="flex gap-2 bg-purple-50 p-2 rounded-lg text-[10px] italic border border-purple-100">
                            <span className="font-bold text-purple-600 shrink-0">S</span>
                            <p className="line-clamp-1">{currentLetterData.edus.find(e => e.id === rel.satellite)?.text || "Fragment..."}</p>
                          </div>
                        )}
                        {relInfo?.type === 'multi' && (
                          <button 
                            onClick={() => setLinking({ source: null, role: 'N', targetRelId: rel.id })}
                            className={`w-full py-1.5 border border-dashed rounded-lg text-[9px] font-bold transition-all mt-1 ${linking.targetRelId === rel.id ? 'bg-blue-600 text-white border-blue-600' : 'text-blue-500 border-blue-200 hover:bg-blue-50'}`}
                          >
                            {linking.targetRelId === rel.id ? 'EDU in Liste wählen...' : '+ Weiteren Nukleus hinzufügen'}
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="pt-6 border-t border-stone-100">
              <h3 className="text-[10px] font-black uppercase text-stone-400 mb-4 tracking-widest flex items-center gap-2"><List size={14}/> Segmente (EDUs)</h3>
              <div className="grid grid-cols-1 gap-2">
                {(currentLetterData.edus || []).map((edu, idx) => {
                  const isSource = linking.source === edu.id;
                  return (
                    <div key={edu.id} className={`flex items-center justify-between p-2.5 rounded-xl border text-[10px] transition-all shadow-sm ${linking.source === edu.id ? 'ring-2 ring-red-500 bg-red-50 border-transparent' : 'bg-stone-50 border-stone-200 hover:border-stone-300'}`}>
                      <span className="font-bold text-stone-400 w-6">#{idx+1}</span>
                      <p className="flex-1 px-2 truncate italic">"{edu.text}"</p>
                      <div className="flex gap-1 shrink-0 ml-2">
                        <button onClick={() => handleLink(edu.id, 'N', linking.targetRelId)} className={`px-2 py-1 rounded border font-bold transition-colors ${linking.role === 'N' && (linking.source === edu.id || linking.targetRelId) ? 'bg-blue-600 text-white border-blue-600' : 'bg-white hover:bg-blue-50'}`}>N</button>
                        {!linking.targetRelId && <button onClick={() => handleLink(edu.id, 'S')} className={`px-2 py-1 rounded border font-bold transition-colors ${linking.role === 'S' && linking.source === edu.id ? 'bg-purple-600 text-white border-purple-600' : 'bg-white hover:bg-purple-50'}`}>S</button>}
                        <button onClick={() => {
                            const newEdus = currentLetterData.edus.filter(e => e.id !== edu.id);
                            const newRels = currentLetterData.relations.filter(r => !(r.nuclei || []).includes(edu.id) && r.satellite !== edu.id);
                            saveToCloud({...currentLetterData, edus: newEdus, relations: newRels });
                        }} className="p-1 text-stone-300 hover:text-red-500 transition-colors ml-1"><Trash2 size={12}/></button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>

        <div className="w-[380px] flex flex-col bg-stone-900 text-stone-100 rounded-2xl shadow-2xl border border-stone-800 overflow-hidden">
          <div className="px-6 py-5 border-b border-stone-800 bg-stone-950 flex justify-between items-center shadow-md">
              <h2 className="font-bold text-blue-400 text-[10px] tracking-widest uppercase flex items-center gap-2"><Globe size={16}/> Übersetzung</h2>
              {!translations[letterId] && (
                <button onClick={translate} disabled={translating || !geminiKey} className="text-[10px] bg-stone-800 hover:bg-stone-700 px-4 py-2 rounded-full border border-stone-700 flex items-center gap-2 transition-all shadow-lg active:scale-95 disabled:opacity-30">
                    {translating ? <Loader2 size={12} className="animate-spin" /> : <RefreshCw size={12} />} Erstellen
                </button>
              )}
          </div>
          <div className="flex-1 p-10 overflow-auto leading-[2] text-lg font-serif text-stone-300 scrollbar-hide selection:bg-blue-900">
            {translations[letterId] ? (
              <div className="animate-in fade-in duration-1000">
                 <div className="text-[10px] font-mono text-stone-500 mb-8 border-b border-stone-800 pb-3 flex justify-between items-center italic tracking-widest">
                   <span>PHILOLOGISCHE ÜBERTRAGUNG</span>
                   <button onClick={translate} className="hover:text-blue-400 transition-colors"><RefreshCw size={12}/></button>
                 </div>
                 <div className="drop-shadow-sm leading-relaxed">{translations[letterId]}</div>
              </div>
            ) : <div className="h-full flex flex-col items-center justify-center text-stone-700 italic text-sm text-center px-6 space-y-6 opacity-40">
                  <Globe size={48}/>
                  <p className="leading-relaxed">Keine deutsche Übersetzung gespeichert. Nutzen Sie die KI-Funktion für einen Entwurf.</p>
                </div>}
          </div>
        </div>
      </main>
    </div>
  );
}
