const request = require('supertest');
const server = require('./server.js');

describe('server.js', () => {
    describe('GET /', () => {
        it('should retrun an OK status code from the home route', () => {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200);
            })
        })
    })
})