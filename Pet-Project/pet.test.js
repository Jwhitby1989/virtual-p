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

  it("calling walk should increase the Pet's fitness level by 4", () => {
    pet.fitness = 5;
    pet.walk();
    expect(pet.fitness).toEqual(9);
  });

  it("A pet's fitness level should never go above 10, so if the fitness level is 9, walk should increase fitness to 10", () => {
    pet.fitness = 8;
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });

  it("calling feed should decrease the Pet's hunger level by 3.", () => {
    pet.hunger = 8;
    pet.feed();
    expect(pet.hunger).toEqual(5);
  });
// this needs changing - you are just checkinng the inital hunger level, should check that calling the feed function doesn't produce a lower than 0 figure
  it("A pet's hunger level should never go below 0.", () => {
    expect(pet.hunger).toEqual(0);
  });
// Needs changing - the test is asking if the fitness is 3 or less you should recieve a response of 'I need a walk' change the expect to test calling the checkup function does return the correct sentence. try use toBe instead of toEqual. You will probably get failed tests if you do it correctly as you will need to alter the checkUp function slightly
  it("if the pet's fitness is 3 or less, it should return 'I need a walk'.", () => {
    pet.fitness = 3;
    pet.checkUp();
    expect(pet.fitness).toEqual(3);
  });
// same situation as above, we need to test the outcome of calling pet.checkup() - check the function itself it returns a given string depending on the values
  it("if the pet's hunger is 5 or more, it should return 'I am hungry'.", () => {
    pet.hunger = 5;
    pet.checkUp();
    expect(pet.hunger).toEqual(5);
  });
// same same as above - we want the returned string checked
  it("if both of the above are true, it should return 'I am hungry AND I need a walk'", () => {
    pet.hunger = 6;
    pet.fitness = 3;
    pet.checkUp();
    expect(pet.hunger).toEqual(6);
    expect(pet.fitness).toEqual(6);
  });
// same same
  it("if neither of the above are true, it should return 'I feel great!'", () => {
    pet.checkUp();
    expect().toEqual();
  });
// you will need to set some figures for your fitness then see if pet.isAlive is true or false (what you are expecting it to be)
  it("if the pet's fitness is 0 or less, it should return false.", () => {
    pet.isAlive();
    expect().toEqual();
  });
  // same as above but for hunger
  it("if the pet's hunger is 10 or more, it should return false.", () => {
    pet.isAlive();
    expect().toEqual();
  });

  //same
  it("if the pet's age is 30 or more, it should return false.", () => {
    pet.isAlive();
    expect(1).toEqual();
  });

  //same. should your pet be alive if so what should isAlive return - true or false
  it("otherwise it should return true.", () => {
    pet.isAlive();
    expect(1).toEqual();
  });
// alter check up to add this condition and then read the test which is giving you what you need to check - you are expecting 'Your pet is no longer alive'
  it("if the pet is not alive, the checkUp function should return 'Your pet is no longer alive :('", () => {
    expect(1).toEqual();
  });
// add the catch to all methods as if the pet is dead then the rest of the function shouldnt be completed
  it("if the pet is not alive, the walk, growUp and feed functions should each throw an exception 'Your pet is no longer alive :('.", () => {
    expect(1).toEqual();
  });
// irrelavant test not needed. you should have checked they work as should if the pet is alive and if the pet is dead
  it("it the pet is alive, they should behave as before.", () => {
    expect(1).toEqual();
  });
});
