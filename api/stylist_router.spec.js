const server = require('./server.js');
const request = require('supertest');
const db =require('./data/db-config')

beforeEach(() => db.seed.run());

describe('stylists', () => {
    it ('get /', async () => {
        const res = await 
request(server).get('/api/stylists')
expect (res.status).toBe(200);
    });

it('get /', async () => {
    const res = await request(server).get('/api/stylists');
    expect (res.status).toBe(200);
    expect(res.body[1].toEqual({
        // email
        // username
        // name
        // password
        // location
        // specialty
    }))
})


});