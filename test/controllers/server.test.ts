import chai from "chai";
import { describe, it } from "mocha";
import sinonChai from "sinon-chai";
import chaiHttp from 'chai-http';
import app from "../../src/index";

chai.use(sinonChai);
chai.use(chaiHttp);
chai.should();

describe("Index", () => {
  describe("GET", () => {
    it("should return 404", (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
});
