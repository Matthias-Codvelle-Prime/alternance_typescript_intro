import { Character } from './Character';
const prompts = require('prompts');

(async () => {
  const response = await prompts({
    type: 'text',
    name: 'sexCharacter',
    message: 'Choisissez le sexe de votre personnage\n[F: Féminin - M: Masculin] : '
  });

  let character = new Character('Jacobin', response.sexCharacter, 10);
  character.summary();
  // START *****
  console.log('Ennemi en approche !');
})();