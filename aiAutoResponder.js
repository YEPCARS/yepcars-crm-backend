const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;

if (!PORT) {
  throw new Error("PORT environment variable not set!");
}

app.use(cors());
app.use(bodyParser.json());

// ✅ Railway test route to avoid 'train not at station' error
app.get('/', (req, res) => {
  res.send('✅ Yep Cars CRM Backend is Running Successfully');
});

// Example AI Auto-Reply Endpoint
app.post('/ai-auto-reply', (req, res) => {
  const { message } = req.body;

  // Your AI logic will go here (e.g., call to OpenAI API)
  const sampleReply = `Thanks for your message: "${message}" - we'll get back to you soon!`;

  res.json({ reply: sampleReply });
});

// Start listening
app.listen(PORT, () => {
  console.log(`Yep Cars CRM Backend is running on port ${PORT}`);
});
