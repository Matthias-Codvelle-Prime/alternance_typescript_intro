import { randomInt } from "crypto";

import { Character } from './Character';

class Enemy {

    name: string
    pV: number = 100

    constructor(nameCharacter: string) {
        this.name = nameCharacter;
    }

    summary() {
        console.log('Nom  : ' + this.name);
        console.log('PV : ' + this.pV);
    }

    attack(character: Character) {
        let damage = randomInt(0, 100);
        let facteur = 0.5;
        damage = damage*facteur;
        console.log(this.name + ' attaque de ' + damage + ' de dégats');
        character.pV -= damage;
    }
}

export { Enemy };