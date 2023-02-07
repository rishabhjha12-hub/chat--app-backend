const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());

const messages = [];

app.post('/api/messages', (req, res) => {
  messages.push({
    username: req.body.username,
    text: req.body.text,
    date: new Date()
  });

  res.sendStatus(200);
});

app.get('/api/messages', (req, res) => {
  res.send(messages);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});