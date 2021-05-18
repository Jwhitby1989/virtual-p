const Pet = require("./pet");

describe("creating a new pet object", () => {
  let pet;
  beforeEach(() => {
    pet = new Pet("fido");
  });
  it("creates a new pet object", () => {
    expect(pet).toBeInstanceOf(Object);
  });

  it("what happens when you call pet.name, is it correct?", () => {
    expect(pet.name).toEqual("fido");
  });

  it("testing initial age", () => {
    expect(pet.age).toEqual(0);
  });

  it("pet increases by 1 when using the growup method", () => {
    pet.growUp();

    expect(pet.age).toEqual(1);
  });

  it("The Pet should have an initial hunger of 0", () => {
    expect(pet.hunger).toEqual(0);
  });

  it("The growUp method should increase the hunger property by 5", () => {
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  });

  it("The Pet should have an initial fitness of 10", () => {
    expect(pet.fitness).toEqual(10);
  });

  it("The growUp method should decrease the fitness property by 3", () => {
    pet.growUp();
    expect(pet.fitness).toEqual(7);
  });
});
