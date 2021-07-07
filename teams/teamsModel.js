const db = require('../data/dbConfig');

module.exports = {
    insert,
    update,
    remove,
    getAllTeams,
    findTeamsById
}

async function insert(team) {
    const [id] = await db('teams').insert(team)
    return db('teams').where({ id }).first()
}

async function update(id, changes) {
    return null
}

function remove(id) {
    return null
}

function getAllTeams() {
    let teams = db('teams')
    return teams
}

function findTeamsById(id) {
    return null
}