const express = require('express');
const codes = require('../discounts/discountsModel.js');

const server = express();

server.use(express.json());


server.get('/', async (req, res) => {
    res.status(200).json({ api: 'connection up' })
    })

server.get('/codes', async (req, res) => {
    const list = await codes.getAll();

    res.status(200).json(list);
})





module.exports = server;