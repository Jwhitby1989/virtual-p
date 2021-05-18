const Pet = require("./pet");

describe("creating a new pet object", () => {
  it("creates a new pet object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });
});
