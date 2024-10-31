const request = require("supertest");
const app = require("../app");
const { addTour } = require("C:/Users/Pamudi Naveesha/Desktop/Tour Package Management/BACKEND/tour");

describe("Test the tour management API endpoints", () => {
  let userID = "";

  it("should create a new tour", async () => {
    const res = await request(app)
      .post("/tours")
      .send({
        tourName: "Hanthana",
        tourType: "Hiking",
        location: "Kandy",
        amount: 4000,
        noOfPeople: 70,
        description: "This is hanthana tour",
        image: "hanthana.jpg",
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body.tourName).toEqual("Hanthana");
    expect(res.body.tourType).toEqual("Hiking");
    expect(res.body.location).toEqual("Kandy");
    expect(res.body.amount).toEqual(4000);
    expect(res.body.noOfPeople).toEqual(70);
    expect(res.body.description).toEqual("This is hanthana tour");
    expect(res.body.image).toEqual("hanthana.jpg");
    userID = res.body.id;
  });

  it("should get a specific tour", async () => {
    const res = await request(app).get(`/tours/${userID}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.tourName).toEqual("Hanthana");
    expect(res.body.tourType).toEqual("Hiking");
    expect(res.body.location).toEqual("Kandy");
    expect(res.body.amount).toEqual(4000);
    expect(res.body.noOfPeople).toEqual(70);
    expect(res.body.description).toEqual("This is hanthana tour");
    expect(res.body.image).toEqual("hanthana.jpg");
  });

  it("should update a specific tour", async () => {
    const res = await request(app)
      .put(`/tours/${userID}`)
      .send({ name: "Updated Tour" });
    expect(res.statusCode).toEqual(200);
    expect(res.body.tourName).toEqual("Hanthana Mountain");
    expect(res.body.tourType).toEqual("Hiking");
    expect(res.body.location).toEqual("Kandy");
    expect(res.body.amount).toEqual(4500);
    expect(res.body.noOfPeople).toEqual(70);
    expect(res.body.description).toEqual("This is hanthana tour");
    expect(res.body.image).toEqual("hanthana.jpg");
  });

  it("should delete a specific tour", async () => {
    const res = await request(app).delete(`/tours/${userID}`);
    expect(res.statusCode).toEqual(204);
  });
});