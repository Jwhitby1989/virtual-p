const MAXIMUM_FITNESS = 10;
const LOWEST_POSSIBLE_HUNGER = 0;

function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = LOWEST_POSSIBLE_HUNGER;
  this.fitness = MAXIMUM_FITNESS;
  this.children = [];
}

Pet.prototype = {
  get isAlive() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0;
  },
  growUp() {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    }
    this.age++;
    this.hunger += 5;
    this.fitness -= 3;
  },
  walk() {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    }
    if (this.fitness > 6) {
      this.fitness = MAXIMUM_FITNESS;
    } else {
      this.fitness += 4;
    }
  },
  feed() {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    }
    if (this.hunger < 3) {
      this.hunger = LOWEST_POSSIBLE_HUNGER;
    } else {
      this.hunger -= 3;
    }
  },
  checkUp() {
    if (!this.isAlive) {
      return "Your pet is no longer alive :(";
    } else if (this.fitness <= 3 && this.hunger >= 5) {
      return "I am hungry AND I need a walk";
    } else if (this.fitness <= 3) {
      return "I need a walk";
    } else if (this.hunger >= 5) {
      return "I am hungry";
    } else {
      return "I feel great!";
    }
  },
  adoptChild(child) {
    this.children.push(child);
  },
  giveBirth(name) {
    const newPet = new Pet(name);
    this.children.push(newPet);
  },
  tellMeYourChildrensName() {
    const childNames = [];
    this.children.forEach((child) => {
      childNames.push(child.name);
    });
    return childNames;
  },
  murderMyChild() {
    this.children = this.children.filter((child) => {
      return child.name !== undefined;
    });
  },
};

module.exports = Pet;
