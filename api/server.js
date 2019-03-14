const express = require('express');
const teams = require('../teams/teamsModel');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Server Running' });
});

server.get('/teams', async (req, res) => {
    try {

        const favTeams = await teams.getAllTeams();

        res.status(200).json(favTeams);
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = server;