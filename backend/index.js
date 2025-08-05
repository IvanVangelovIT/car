const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Добавихме този маршрут:
app.get('/', (req, res) => {
  res.send('Здравей! Това е началната страница на backend-а!');
});

// Предишният маршрутaaa
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is working!' });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
