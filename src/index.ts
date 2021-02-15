const prompts = require('prompts');

(async () => {
  const response = await prompts({
    type: 'text',
    name: 'nameCharacter',
    message: 'Entrer le nom de votre personnage :'
  });

  console.log(response.nameCharacter);
})();