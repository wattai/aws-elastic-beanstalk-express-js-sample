const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! and Welcome back to my channel!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
