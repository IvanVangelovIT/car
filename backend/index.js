const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Начален маршрут
app.get(`${process.env.REACT_APP_API_URL}`, (req, res) => {
  res.send('Здравей! Това е началната страница на backend-а!');
});

// Health check маршрутa
app.get(`${process.env.REACT_APP_API_URL}/api/health`, (req, res) => {
  res.json({ status: 'Backend is working!' });
});

// Важно: използваме PORT отa средата
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
