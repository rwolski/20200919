import chai, { expect } from "chai";
import express from "express";
import { after, afterEach, before, describe, it } from "mocha";
import { createSandbox } from "sinon";
import sinonChai from "sinon-chai";
import { getEvents } from "../../src/controllers/event-controller";

const sandbox = createSandbox();
chai.use(sinonChai);

describe("Test event controller", () => {
  before(() => {
    sandbox.stub(express.response, "json");
  });

  afterEach(() => {
    sandbox.reset();
  });

  after(() => {
    sandbox.restore();
  });

  it("should work", () => {
    getEvents({} as express.Request, express.response);
    expect(express.response.json).to.have.been.called;
  });
});
