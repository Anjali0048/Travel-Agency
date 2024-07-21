const express = require('express');

const app = express();

const PORT = 3001 || 8800
app.listen(PORT, () => {
    console.log(`App listening on port http://localhost:${PORT}`);
  });