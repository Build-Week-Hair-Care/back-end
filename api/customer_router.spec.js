const server = require('../index.js');
const request = require('supertest');
// const db = require('../data/db.js');
const prepTestDB = require('../data/prepTestDB');


// server.use('/api/reviews', reviews);
// server.use('/api/stylists', stylists);
// server.use('/api/customers', customers);



beforeEach(prepTestDB);

describe('customer', () => {
  it('post /', async () => {
    const res = await request(server)
          .post('/api/customers')
          .send({ username: "Antonio", password:92519, location: "Rome, GA", email_address: "email@example.org" });
    expect(res.status).toBe(200);
  });

  it('post /', async () => {
    const res = await request(server).get('/api/customers/login');
    expect(res.status).toBe(200);
    expect(res.body[1]).toEqual({
      "email": "fakeemail@diningroom.com",
      "id": 2,
      "name": "Ramona Lee",
    });

  });
});