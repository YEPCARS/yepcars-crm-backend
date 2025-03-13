const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

// Serve index.html to keep Railway container alive
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// AI Auto-Reply Endpoint
app.post('/ai-auto-reply', (req, res) => {
  const { message } = req.body;
  const sampleReply = `Thanks for your message: "${message}" - we'll get back to you soon!`;
  res.json({ reply: sampleReply });
});

app.listen(PORT, () => {
  console.log(`Yep Cars CRM Backend is running on port ${PORT}`);
});
