const request = require('supertest');
const app = require('../server/app.js');

describe('Server Routes', () => {
  // Add Collection
  // Add Field
  // Add Field
  // Update Field
  it('Shouldn\'t find a non-existent collection', (done) => {
    request(app).get('/api/collections/xiwcidsj')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(0);
        done();
      });
  });

  it('Should add a collection', (done) => {
    request(app).post('/api/collections/xiwcidsj')
      .then((response) => {
        expect(response.statusCode).toBe(201);
        done();
      });
  });

  it('Should have a collection that was added', (done) => {
    request(app).get('/api/collections/xiwcidsj')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  it('Should have the correct data shape', () => request(app).get('/api/collections/xiwcidsj')
    .then((response) => {
      expect(response.body[0]).toHaveProperty('_id');
      expect(response.body[0]).toHaveProperty('fields');
      expect(response.body[0]).toHaveProperty('items');
      expect(response.body[0]).toHaveProperty('collection_name');
    }));

  it('Should update a collection', (done) => {
    request(app).patch('/api/collections/xiwcidsj')
      .send({ oldName: 'xiwcidsj', newName: 'qfuarunn' })
      .then(() => done());
  });

  it('Should remove a collection', (done) => {
    request(app).delete('/api/collections/qfuarunn')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        request(app).get('/api/collections/xiwcidsj')
          .then((res) => {
            expect(res.statusCode).toBeGreaterThanOrEqual(200);
            expect(res.body).toBe(0);
            done();
          });
      });
  });
});
