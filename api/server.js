const express = require('express');
const db = require('../discounts/discountsModel.js');

const server = express();

server.use(express.json());


server.get('/', async (req, res) => {
    db
    .get()
    .then(codes => res.status(200).json({ api: 'connection up' }))
    })





module.exports = server;