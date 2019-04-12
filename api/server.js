const express = require('express');
const codes = require('../discounts/discountsModel.js');

const server = express();

server.use(express.json());


server.get('/', async (req, res) => {
    res.status(200).json({ api: 'connection up' })
    })





module.exports = server;