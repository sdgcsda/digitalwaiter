const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist/prototip_digital-w/browser')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/rototip_digital-w/browser/index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
