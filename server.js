
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/api/arbolado', async (req, res) => {
  const url = 'https://geocloud.municipalidadsalta.gob.ar/geoserver/public/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=public%3Acenso_forestal&maxFeatures=5&outputFormat=application%2Fjson';
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error al obtener datos del GeoServer:', error);
    res.status(500).json({ error: 'No se pudieron obtener los datos' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
