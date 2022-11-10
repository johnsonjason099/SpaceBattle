//Two Battling Ships

// My Ship, and defining a class
class USS_HelloWorld {
  constructor() {
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = .7
  }
//attack loop
  attack() {
    let randomizer = Math.random()
    if (randomizer < this.accuracy) {
      invader.hull -= this.firepower;
      alert(`YOUR ATTACK WAS A SUCCESS!`) 
        } else {
            alert(`YOU MISSED! \n\n BATTEN DOWN THE HATCHES`)
              invader.attack();
    }
  }
}
const defender = new USS_HelloWorld()
  // Alien Ship
class AlienShip {
  constructor() {
    this.hull = Math.floor(Math.random() * (7 - 3) + 3)
    this.firepower = Math.floor(Math.random() * (5 - 2) + 2)
    this.accuracy = Math.random() * (.8 - .6) + .6
  }
  attack() {
    let randomizer = Math.random()
    if (randomizer < this.accuracy) {
      defender.hull -= this.firepower;
      alert(`CAPTAIN, WE\'VE BEEN HIT, THE SHIELDS HAVE BEEN LOWERED BY ${invader.firepower} !`)
    } else {
      alert(`THEY MISSED BY A MILE!`)
    }
  }
}
const invader = new AlienShip()
  // Initiate Game
const init = () => {
  alert(' BATTLE FOR THE EARTH! ');
  const response = prompt(`Enter 'p' to play or 'q' to quit.`);
      if (response.toLowerCase() === 'q') {
        alert(`WITHOUT A CAPTAIN AT THE HELM, WE SHALL SURELY LOSE THIS BATTLE!\n\n IF ONLY THERE WAS SOMEONE WITH UNCTION IN THEIR GUMPTION TO LEAD US TO VICTORY...`)
        } else if (response.toLowerCase() === 'p') {
          alert('EARTH HAS BEEN ATTACKED BY 6 MENACING ALIEN SHIPS!\n\nYOU ARE THE CAPTAIN OF THE USS HELLOWORLD.\n\nYOUR MISSION IS TO DESTROY ALL 6 ALIEN SHIPS AND SAVE THE WORLD.\n\n BEWARE: THE ALIEN SHIPS FIRE AT THE SAME TIME AS YOU AND IF YOU MISS, THEY WILL FIRE TWICE')
            engage();  } 
          else {
            alert(`INVALID RESPONSE.\nUBIQATE!`)
          }
        }
    // Check Status
const shipStatus = () => {
  alert(`Your Status >>> HULL: ${defender.hull} | FIREPOWER: ${defender.firepower}\n\nAlien#${invaderCount} Status >>> HULL: ${invader.hull} | FIREPOWER: ${invader.firepower}`)
}
  // Get Ready to Battle
invaderCount = 6;

const attackTime = () => {
    while (invaderCount > 0) {
    if (invader.hull < 1) {
     invaderCount--
    }
    //Bonus Idea
    // if (invaderCount === 3) {
    //   shipRegen();
    // }
    if (invaderCount > 0 && defender.hull > 0) {
      invader.hull = Math.floor(Math.random() * (7 - 3) + 3)
      invader.firepower = Math.floor(Math.random() * (5 - 2) + 2)
      invader.accuracy = Math.random() * (.8 - .6) + .6
    } else if (invaderCount < 1 && defender.hull < 1) {
      return alert(`MISSION FAILURE, REGROUP!\n\nGAME OVER`)
    } else if (invaderCount < 1 && defender.hull > 0) {
       return alert(`CONGRATULATIONS, THE ALIENS HAVE BEEN DESTROYED (FOR NOW)\n\n GAME OVER`)
    } else {
      return alert(`YOUR REMAINS WILL NEVER BE FOUND!\n\n GAME OVER`) 
    }
const response = prompt(`Enter 'a' to attack or 'r' to retreat`)
  if (response.toLowerCase() === 'r') {
    setTimeout(() => {alert(`YOU WILL LIVE TO FIGHT ANOTHER DAY!`)}, 3000);
    // defender.hull = 0;
    // defender.firepower = 0;
    // defender.accuracy = 0;
    shipStatus();
    endGame();
    } else if (response.toLowerCase() === 'a') {
    engage()
    } else {
    alert(`INVALID RESPONSE.\n\n TRY AGAIN!`)
    }
  } 

}
// Battle
const engage = () => {
  shipStatus();
  defender.attack();
  invader.attack();
  attackTime();

}
// Bonus Idea
// const shipRegen = prompt(`BACKUP SHIELDS ARE NOW ONLINE, BOOST SHIELDS? Y FOR YES, N FOR NO`)
// if (response.toLowerCase() === 'y' && invaderCount < 3) {
//   alert(`SHIELD BACK TO FULL CAPACITY!`)
//   defender.hull = 20;
//   defender.firepower = 5;
//   defender.accuracy = .7;
//   shipStatus()
//     }else if (response.toLowerCase() === 'n') {
//     alert(`OK THEN, LET'S DIVERT SHIELD REGENERATION TO LAZERS`)
//     defender.hull = `${defender.hull}`;
//     defender.firepower = 10;
//     defender.accuracy = .7;
//     engage()
//     }else{
//     alert(`INVALID RESPONSE.\n\n TRY AGAIN!`)
//   }
  init(); // Initialize
  endGame();
  setTimeout(() => {alert(`YOU WILL LIVE TO FIGHT ANOTHER DAY!`)}, 3000);
  