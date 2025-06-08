// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Für CORS-Unterstützung

const app = express();
const PORT = 3000; // Port für den Server

app.use(cors()); // CORS aktivieren
app.use(express.json()); // JSON-Parsing aktivieren

// API-Route für den Abruf des Zitats
app.get('/api/quote', async (req, res) => {
  try {
    const response = await axios.get('https://buddha-api.com/api/today');
    res.json(response.data); // Gebe die Daten an den Client zurück
  } catch (error) {
    console.error('Error fetching quote:', error);
    res.status(500).json({ error: 'Error fetching quote' });
  }
});

// Server starten
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});