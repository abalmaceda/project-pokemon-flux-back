'use strict';

const express = require('express');
const fs = require('fs');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/pokemon', (req, res) => {
    let rawdata = fs.readFileSync('assets/pokemon.json');
    let pokemons = JSON.parse(rawdata);
    res.json(pokemons); 
});
  

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);