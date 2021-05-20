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

  it("A pet's hunger level should never go below 0.", () => {
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });

  it("if the pet's fitness is 3 or less, it should return 'I need a walk'.", () => {
    pet.fitness = 3;
    pet.checkUp();
    expect(pet.checkUp()).toBe("I need a walk");
  });

  it("if the pet's hunger is 5 or more, it should return 'I am hungry'.", () => {
    pet.hunger = 5;
    pet.checkUp();
    expect(pet.checkUp()).toBe("I am hungry");
  });

  it("if both of the above are true, it should return 'I am hungry AND I need a walk'", () => {
    pet.hunger = 5;
    pet.fitness = 3;
    pet.checkUp();
    expect(pet.checkUp()).toBe("I am hungry AND I need a walk");
  });

  it("if neither of the above are true, it should return 'I feel great!'", () => {
    pet.checkUp();
    expect(pet.checkUp()).toBe("I feel great!");
  });

  it("if the pet's fitness is 0 or less, it should return false.", () => {
    pet.fitness = 7;
    expect(pet.isAlive).toBeFalsy();
  });

  it("if the pet's hunger is 10 or more, it should return false.", () => {
    pet.hunger = 10;
    expect(pet.isAlive).toBeFalsy();
  });

  it("if the pet's age is 30 or more, it should return false.", () => {
    pet.age = 10;
    expect(pet.isAlive).toBeFalsy();
  });

  xit("otherwise it should return true.", () => {
    pet.age = 40;
    expect(pet.isAlive).toBeTruthy();
  });
  // alter check up to add this condition and then read the test which is giving you what you need to check - you are expecting 'Your pet is no longer alive'
  it("if the pet is not alive, the checkUp function should return 'Your pet is no longer alive :('", () => {
    pet.age = 40;
    pet.fitness = 0;
    pet.hunger = 11;
    pet.isAlive;
    expect(pet.checkUp()).toBe("Your pet is no longer alive :(");
  });
  // add the catch to all methods as if the pet is dead then the rest of the function shouldnt be completed
  xit("if the pet is not alive, the walk, growUp and feed functions should each throw an exception 'Your pet is no longer alive :('.", () => {
    expect(1).toEqual();
  });
  // irrelavant test not needed. you should have checked they work as should if the pet is alive and if the pet is dead
  xit("it the pet is alive, they should behave as before.", () => {
    expect(1).toEqual();
  });
});
