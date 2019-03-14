const request = require('supertest');
const server = require('./server');
const dbConfig = require('../data/dbConfig');

describe('server', () => {
    it('should set testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing')
    });
});

// GET REQUEST TEST
describe('Get /', () => {
    it('should return 200 ok', () => {
        return request(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200)
            })
            .catch()
    })

    it('should return {message: "server running"}', () => {
        return request(server)
            .get('/')
            .then(res => {
                expect(res.body).toEqual({ message: "Server Running" })
            })
            .catch()
    })

    it('should return 200', () => {
        return request(server)
            .get('/teams')
            .then(res => {
                expect(res.status).toBe(200)
            })
            .catch()
    })

    it('should return [teams]', () => {
        return request(server)
            .get('/teams')
            .then(res => {
                expect(res.body).toEqual([])
            })
            .catch()
    })
})