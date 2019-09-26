const request = require('supertest');

const server = require('../index');



describe('index.js', () => {

  describe('GET /api/reviews', () => {
      
// test 1: getting reviews by customer, should produce JSON list of reviews from customer
    it('returns 200 GOOD, and all reviews have same customer id 1', () => {
      return request(server)
        .get('/api/reviews/customer/1')
        .set( "authorization","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo5LCJ1c2VybmFtZSI6IlVwZGF0ZSBTdWUxMiIsImlhdCI6MTU2OTUzODEzNCwiZXhwIjoxNTY5NjI0NTM0fQ.NBPWIYD5L-xZ4yd0-EK9OFmhis1YuRjyy51Ix_UuCGU")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should return no credentials provided", async () => {
      const res = await request(server).get('/api/reviews/customer/2');
      expect(res.body).toEqual({ "message": "no credentials provided" });
    });

    it('returns JSON', done => {
      request(server)
        .get('/api/reviews/customer/1')
        .then(res => {
          expect(res.type).toMatch(/json/i);
          done();
        });
    });
  });
});

// describe('server.js', () => {
//   describe('POST /api/stylists', () => {
//     it('returns 500 Nothing Provided', () => {
//       return request(server)
//         .post('/api/stylists/')
//         .then(res => {
//           expect(res.status).toBe(500);
//         });
//     });


//     it('returns a JSON TOKEN', async () => {
//       beforeEach(async () => {
//           await db('stylist').truncate();
//       });
//       return request(server)
//         .post('/api/stylists/')
//         .send({
//           "name": "bettie",
//           "username": "bettie",
//           "password": "doesthiswork",
//           "location": "San Bernadino",
//           "bio": "this is a bio",
//           "email_address": "bettie@testemail.org"
//         })
//         .set( "Content-Type","application/json")
//         .then(res => {
//           expect(res.status).toBe(201);
//         });
//     });
//   });
// });
