// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if(this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;          
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if(this.health > 0) {
      return `A Saxon has received ${damage} points of damage`; 
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    randomSaxon.receiveDamage(randomViking.strength);
    if(randomSaxon.health <= 0) {
      this.saxonArmy = this.saxonArmy.slice(0, this.saxonArmy.indexOf(randomSaxon)) + this.saxonArmy.slice(this.saxonArmy.indexOf(randomSaxon) + 1, this.saxonArmy.length);
    }
  }
  saxonAttack() {
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    randomViking.receiveDamage(randomSaxon.strength);
    if(randomViking.health <= 0) {
      this.vikingArmy = this.vikingArmy.slice(0, this.vikingArmy.indexOf(randomViking)) + this.vikingArmy.slice(this.vikingArmy.indexOf(randomViking) + 1, this.vikingArmy.length);
    }
  }
  showStatus() {
    if(this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      return `Vikings and Saxons are still in the thick of battle.`;
    } else if(!this.saxonArmy.length) {
      return `Vikings have won the war of the century!`;
    } else if(!this.vikingArmy.length) {
      return `Saxons have fought for their lives and survived another day...`;
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
