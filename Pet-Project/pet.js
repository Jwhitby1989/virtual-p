const MAXIMUM_FITNESS = 10;
const LOWEST_POSSIBLE_HUNGER = 0;

function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = LOWEST_POSSIBLE_HUNGER;
  this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype = {
  /* this should be a getter function have a read up on them but basically they act like a regular static property when you access them i.e pet.isAlive should return a boolean value but that value will change depending on the condition you return inside it. It always needs a return statement like a method does. eg get isAlive() {
  return  /your conditions here/
  }
  so if your fitness or age or hunger levels change then the getter function condition will potentiall change from true-false or vice versa
  */
  get isAlive() {
    this.isAlive = this.age < 30 && this.hunger < 10 && this.fitness > 0;
    if (this.fitness < 0) {
      return;
    }
  },
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
  // You might need to alter this - once your tests are correct it should give you an indication as to why and what you'll need to do - plus another check will need to be added to go along with the last few tests - check if the pet is alive before going on to do the rest of the check ups
  checkUp() {
    if (this.fitness <= 3 && this.hunger >= 5) {
      return "I am hungry AND I need a walk";
    } else if (this.hunger >= 5) {
      return "I am hungry";
    } else if (this.fitness <= 3) {
      return "I need a walk";
    } else {
      return "I feel great!";
    }
  },
};

module.exports = Pet;
