const request = require('supertest');
const app = require('../routes/tour');
const Tour = require('../models/tour');

describe('API Endpoint Tests', () => {
  let userID;

  // Test for adding a tour
  it('should add a new tour', async () => {
    jest.setTimeout(10000);

    const response = await request(Tour)
      .post('/addTOUR')
      .send({
        tourName: 'Test Tour',
        tourType: 'Adventure',
        location: 'Test Location',
        amount: 100,
        noOfPeople: 10,
        description: 'Test Description',
        image: 'test-image.jpg',
      });

      
      
        // Assertion and test code
      

    expect(response.statusCode).toBe(200);
    expect(response.body).toBe('Tour Added');

    // Save the tour ID for future test cases
    userID = response.body._id;

  });
/*
  // Test for getting all tours
  it('should get all tours', async () => {
    jest.setTimeout(10000);

    const response = await request(Tour).get('/');

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  // Test for updating a tour
  it('should update a tour', async () => {
    jest.setTimeout(10000);

    const response = await request(Tour)
      .put(`/updateTOUR/${userID}`)
      .send({
        tourName: 'Updated Tour',
        tourType: 'Adventure',
        location: 'Updated Location',
        amount: 150,
        noOfPeople: 15,
        description: 'Updated Description',
        image: 'updated-image.jpg',
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('Tour updated');
  });

  // Test for deleting a tour
  it('should delete a tour', async () => {
    jest.setTimeout(10000);

    const response = await request(Tour).delete(`/delete/${userID}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('Tour deleted');
  });

  // Test for getting a specific tour
  it('should get a specific tour', async () => {
    jest.setTimeout(10000);

    const response = await request(Tour).get(`/get/${userID}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('Tour fetched');
    expect(response.body.tour._id).toBe(userID);
  });*/
});
