const request = require('supertest');
const server = require('./server');
const dbConfig = require('../data/dbConfig');

describe('server', () => {
    it('should set testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing')
    });
});

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
})