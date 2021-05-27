const MAXIMUM_FITNESS = 10;
const LOWEST_POSSIBLE_HUNGER = 0;

function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = LOWEST_POSSIBLE_HUNGER;
  this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype = {
  /* a getter should always return something. in this instanct you are setting itself to a condition rather than just returning that condition. also if you think about your use of an if statement

if all those conditions are met it will evalutate to true but if anyone of them dont it will evaluate to false so there is no need for if/else as it can only be one or the other

  */
  // Dog dies when: age > 30, hunger < 0 & fitness < 0
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
  // You might need to alter this - once your tests are correct it should give you an indication as to why and what you'll need to do - plus another check will need to be added to go along with the last few tests - check if the pet is alive before going on to do the rest of the check ups
  // Dog dies when: age > 30, hunger < 0 & fitness < 0
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
};

module.exports = Pet;
