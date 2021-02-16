import { Character } from './Character';
import { Enemy } from './Enemy';
const prompts = require('prompts');

console.log('***** START *****');

let battle = (character: Character, enemy: Enemy): boolean => {
  character.attack(enemy);
  enemy.summary();
  if (enemy.pV <= 0) {
    console.log('VICTOIRE de ' + character.name + '!');
      return true;
  } else {
    console.log("L'ennemi riposte !");
    enemy.attack(character);
    character.summary();
    if (character.pV <= 0) {
      console.log('VICTOIRE de ' + enemy.name + '!');
      return true;
    } else {
      return false;
    }
  }
}

let choiceCharacter = (character: Character, enemy: Enemy) => {
  (async () => {
    const response = await prompts({
      type: 'number',
      name: 'choiceCharacter',
      message: 'Que choisissez-vous ?\n[0: Combattre - 1: Battre en retraite] : '
    });
  
    switch(response.choiceCharacter) { 
      case 0: { 
         console.log('A l\'assaut !');
         let winners = battle(character, enemy);
         if(!winners) {
          choiceCharacter(character, enemy); 
         } else {
          console.log('***** END *****');
         }
         // END ***** 
         break; 
      } 
      case 1: { 
        console.log('Vous prenez la fuite ...');
        // END ***** 
         break; 
      } 
      default: { 
         choiceCharacter(character, enemy); 
         break; 
      } 
   } 
  })();
}

(async () => {
  const response = await prompts({
    type: 'text',
    name: 'sexCharacter',
    message: 'Choisissez le sexe de votre personnage\n[F: Féminin - M: Masculin] : '
  });

  let character = new Character('Jacobin', response.sexCharacter);
  character.summary();
  let enemy = new Enemy('Bowser');
  console.log('Ennemi en approche !');
  choiceCharacter(character, enemy);
  //console.log('***** END *****');
  // END ***** 
})();