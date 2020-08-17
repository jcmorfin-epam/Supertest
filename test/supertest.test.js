const request = require('supertest');
const server = "https://jsonplaceholder.typicode.com/";

describe('GET /user', () => {
    it('responds with code 200', () => {
      request(server)
        .get('/user')
        .set('Accept', 'application/json')
        .expect(200);
    });
    
    it('responds with json', () => {
      request(server)
        .get('/user')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
    });


    it('responds body lenght is 10', () => {
      request(server)
        .get('/user')
        .set('Accept', 'application/json')
        .expect('Content-Length', '10')
    });
  });