import express from 'express';

const app = express();

app.get('/', (req, res) => res.json({
  message: 'Hello World!',
}));

app.post('/route', (req, res) => res.json({
  message: 'The requisition has arrived!',
}));

app.listen('3333', () => console.log('Server is running 🚀'));
