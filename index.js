class Hero {
  constructor(name, gender, multiverse, hp, attack) {
    this.name = name;
    this.gender = gender;
    this.multiverse = multiverse;
    this.hp = hp;
    this.attack = attack;
  }
  introduce() {
    console.log(
      `I'm ${this.name}. I'm ${this.gender}. I'm from ${this.multiverse}.`,
    );
  }
  shiftMultiverse(anothermultiverse) {
    console.log(
      `I'm from ${this.multiverse}. Go to ${anothermultiverse} to save the days.`,
    );
    this.multiverse = anothermultiverse;
  }
  gotattacked(attack) {
    this.hp -= attack;
    console.log(`I got attacked ${attack} hp. I currently have ${this.hp} hp.`);
  }
  statusNow() {
    if (this.hp <= 0) {
      console.log("I'm dead");
    } else {
      console.log(`I'm alive. I currently have ${this.hp} hp. `);
    }
  }
}

class Fighter extends Hero {
  constructor(name, gender, multiverse, hp, attack) {
    super(name, gender, multiverse, hp, attack);
  }
  buffpower() {
    this.attack *= 2;
    this.hp += 10;
    console.log(
      `Hehe! Right now I'm buffed. My attack is twice! ${this.attack} attack Are you ready!!`,
    );
    console.log(`I'm stronger now. My hp is ${this.hp}`);
  }
  debuffpower() {
    this.attack /= 2;
    console.log(
      `Oh no! my superpower has gone to half! just ${this.attack} attack`,
    );
  }
}

class Warrior extends Hero {
  constructor(name, gender, multiverse, hp, attack, armor) {
    super(name, gender, multiverse, hp, attack);
    this.armor = armor;
  }
  gotattacked(attack) {
    if (this.armor > 0) {
      this.armor -= attack;
      console.log("Your attack has 0 to me. I have a sheild");
    } else {
      this.hp -= attack;
      console.log(
        "Oh no!"`I got attacked ${attack} hp. I currently have ${this.hp} hp.`,
      );
    }
  }
}
