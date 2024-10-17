const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public')); // Serve static files from the public directory

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
