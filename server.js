const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const smsMessages = [];

// Create an endpoint to receive SMS messages via POST request
app.post('https://6538a07ca543859d1bb1a88d.mockapi.io/messages', (req, res) => {
  const newSms = req.body.message;
  smsMessages.push(newSms);
  res.status(200).json({ message: 'SMS received successfully' });
});

// Create an endpoint to retrieve SMS messages via GET request
app.get('https://6538a07ca543859d1bb1a88d.mockapi.io/messages', (req, res) => {
  res.status(200).json(smsMessages);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
