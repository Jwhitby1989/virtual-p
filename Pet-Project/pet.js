const MAXIMUM_FITNESS = 10;
const LOWEST_POSSIBLE_HUNGER = 0;

function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = LOWEST_POSSIBLE_HUNGER;
  this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype = {
  growUp() {
    this.age++;
    this.hunger += 5;
    this.fitness -= 3;
  },
  walk() {
    if (this.fitness > 6) {
      this.fitness = MAXIMUM_FITNESS;
    } else {
      this.fitness += 4;
    }
  },
  feed() {
    if (this.hunger < 3) {
      this.hunger = LOWEST_POSSIBLE_HUNGER;
    } else {
      this.hunger -= 3;
    }
  },
  checkUp() {
    if (this.fitness <= 3) {
      return "I need a walk";
    } else if (this.hunger >= 5) {
      return "I am hungry";
    } else if (this.fitness <= 3 && this.hunger >= 5) {
      return "I am hungry AND I need a walk";
    } else {
      return "I feel great!";
    }
  },
  isAlive() {
    if (this.fitness < 0) {
      return;
    } else {
      return;
    }
  },
};

module.exports = Pet;
