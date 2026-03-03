import os
import pandas as pd
from flask import Flask, jsonify, send_from_directory

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CSV_FILE = os.path.join(BASE_DIR, "cicero_letters.csv")

# Vite build output liegt in ./static
app = Flask(__name__, static_folder="static", static_url_path="")

def load_corpus():
    if not os.path.exists(CSV_FILE):
        print(f"CSV not found at: {CSV_FILE}")
        return []
    try:
        df = pd.read_csv(CSV_FILE)
        return df.fillna("").to_dict(orient="records")
    except Exception as e:
        print(f"Fehler beim Laden der CSV: {e}")
        return []

@app.get("/api/letters")
def get_letters():
    data = load_corpus()
    return jsonify(data)

@app.get("/api/config")
def get_config():
    # damit dein Frontend nicht meckert:
    return jsonify({
        "gemini_api_key": os.environ.get("GEMINI_API_KEY", "")
    })

# SPA-Fallback: React Router / direkte URLs funktionieren
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_spa(path):
    if path.startswith("api/"):
        return ("Not Found", 404)

    file_path = os.path.join(app.static_folder, path)
    if path and os.path.exists(file_path):
        return send_from_directory(app.static_folder, path)
    return send_from_directory(app.static_folder, "index.html")

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
