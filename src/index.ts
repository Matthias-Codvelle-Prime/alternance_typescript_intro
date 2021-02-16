import { Character } from './Character';
import { Enemy } from './Enemy';
const prompts = require('prompts');

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
         character.attack(enemy);
         enemy.summary();
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
  // START *****
  let enemy = new Enemy('Bowser');
  console.log('Ennemi en approche !');
  choiceCharacter(character, enemy);
  // END ***** 
})();