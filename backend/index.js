const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Начален маршрут
app.get('/', (req, res) => {
  res.send('Здравей! Това е началната страница на backend-а!');
});

// Health check маршрут
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is working!' });
});

// Важно: използваме PORT от средата
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
