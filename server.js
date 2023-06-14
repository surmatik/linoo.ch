const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Statische Dateien bereitstellen
app.use(express.static('public'));

// Route für die Startseite
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Starte den Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
