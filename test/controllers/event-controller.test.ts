import chai, { expect } from "chai";
import { describe, it } from "mocha";
import sinonChai from "sinon-chai";
import chaiHttp from 'chai-http';
import app from "../../src/index";

chai.use(sinonChai);
chai.use(chaiHttp);
chai.should();

describe("Event Controller", () => {
  describe("GET", () => {
    it("should return all events", (done) => {
      chai.request(app)
        .get('/events')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("array");
          done();
        });
    });

    it("should return an event filtered by title", (done) => {
      chai.request(app)
        .get('/events')
        .query({
          search: "Place 1"
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("array");
          expect(res.body).to.have.length(1);
          done();
        });
    });

    it("should return an event filtered by city", (done) => {
      chai.request(app)
        .get('/events')
        .query({
          city: "Gold Coast"
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("array");
          expect(res.body).to.have.length(6);
          done();
        });
    });

    it("should return an event filtered by state", (done) => {
      chai.request(app)
        .get('/events')
        .query({
          state: "New South Whales"
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("array");
          expect(res.body).to.have.length(0);
          done();
        });
    });

    it("should return an event filtered by country", (done) => {
      chai.request(app)
        .get('/events')
        .query({
          country: "Australia"
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("array");
          expect(res.body).to.have.length(8);
          done();
        });
    });

    it("should return an event filtered by date range", (done) => {
      chai.request(app)
        .get('/events')
        .query({
          startDate: "2018-07-20T02:30:00.000Z",
          endDate: "2018-07-23T02:30:00.000Z",
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("array");
          expect(res.body).to.have.length(1);
          done();
        });
    });

    it("should return an error with an invalid date parameter", (done) => {
      chai.request(app)
        .get('/events')
        .query({
          startDate: "2018-07-20T0sdfsdf2:30:00.000Z",
          endDate: "2018-07-23T02:30:00.000Z",
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.be.empty;
          done();
        });
    });
  });
});
