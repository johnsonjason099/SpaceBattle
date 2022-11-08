//Two Battling Ships

// My Ship, and defining a class
class USS_HelloWorld {
    constructor() {
      this.hull = 30;
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
              alert(`YOU MISSED! \n\n PREPARE FOR AN ALIEN ATTACK...`)
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
        alert(`YOU'VE BEEN HIT, EVASIVE ACTION!`)
      } else {
        alert(`THEY MISSED BY A MILE!`)
      }
    }
  }
  const invader = new AlienShip()
    // Initiate Game
  const init = () => {
    alert(' THE  SPACE   BATTLE! ');
    const response = prompt(`Enter 'p' to play or 'q' to quit.`);
    if (response.toLowerCase() === 'q') {
      alert(`BETTER THE WEAK NOT PARTICIPATE!`)
    } else if (response.toLowerCase() === 'p') {
      alert('Earth has been attacked by 6 menacing alien ships!\nYou are the captain of the USS HelloWorld.\nYour mission is to destroy all 6 alien ships and save the world.')
      engage();  } 
         else {
        alert(`INVALID RESPONSE.\nUBIQATE!`)
    }
  }
    // Check Status
  const shipStatus = () => {
    alert(`Your Status >>> HULL: ${defender.hull} | FIREPOWER: ${defender.firepower} | ACCURACY: ${defender.accuracy*100}%\n\nAlien#${invaderCount} Status >>> HULL: ${invader.hull} | FIREPOWER: ${invader.firepower} | ACCURACY: ${Math.floor(invader.accuracy*100)}%`)
  }
    // Get Ready to Battle
  invaderCount = 6;
  
  const  attackTime = () => {
      shipStatus()
      while (invaderCount > 0) {
      if (invader.hull < 1) {
       invaderCount--
      }
  
      if (invaderCount > 0 && defender.hull > 0) {
        invader.hull = Math.floor(Math.random() * (7 - 3) + 3)
        invader.firepower = Math.floor(Math.random() * (5 - 2) + 2)
        invader.accuracy = Math.random() * (.8 - .6) + .6
      } else if (invaderCount < 1 && defender.hull < 1) {
        return alert(`MISSION FAILURE, REGROUP!`)
      } else if (invaderCount < 1 && defender.hull > 0) {
        return alert(`CONGRATULATIONS, THE ALIENS HAVE BEEN DESTROYED (FOR NOW)`)
      } else {
        return alert(`YOUR REMAINS WILL NEVER BE FOUND!`)
      }
  
      const response = prompt(`Enter 'a' to attack or 'r' to retreat`)
      if (response.toLowerCase() === 'r') {
        alert(`YOU WILL LIVE TO FIGHT ANOTHER DAY!`)
        defender.hull = 0;
        defender.firepower = 0;
        defender.accuracyt = 0;
        shipStatus()
      } else if (response.toLowerCase() === 'a') {
        engage()
      } else {
        alert(`INVALID RESPONSE.\n\n TRY AGAIN!`)
      }
  
    }
  
  }
    // Battle
  const engage = () => {
    defender.attack();
    invader.attack();
    attackTime();
  }
    init(); // Initialize