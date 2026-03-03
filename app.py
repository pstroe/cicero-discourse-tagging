import os
import pandas as pd
from flask import Flask, jsonify, send_from_directory, request

# Wir definieren den Ordner für statische Dateien (HTML, JS, CSS)
app = Flask(__name__, static_folder='.', static_url_path='')

CSV_FILE = 'cicero_letters.csv'

def load_corpus():
    if not os.path.exists(CSV_FILE):
        # Falls die Datei fehlt, geben wir ein leeres Set zurück
        return []
    try:
        df = pd.read_csv(CSV_FILE)
        return df.fillna("").to_dict(orient='records')
    except Exception as e:
        print(f"Fehler beim Laden der CSV: {e}")
        return []

@app.route('/')
def index():
    # Liefert die index.html aus
    return send_from_directory('.', 'index.html')

@app.route('/api/letters')
def get_letters():
    try:
        data = load_corpus()
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Statische Routen für die React-Datei (falls lokal ausgeführt)
@app.route('/index.jsx')
def serve_jsx():
    return send_from_directory('.', 'index.jsx')

if __name__ == '__main__':
    # Heroku nutzt die PORT-Variable, lokal nutzen wir 5000
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
