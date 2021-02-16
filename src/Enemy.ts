import { randomInt } from "crypto";

import { Character } from './Character';
import { Fighter } from "./Fighter";

class Enemy implements Fighter {

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
        let damage = this.takeDamage(randomInt(0, 100));
        let facteur = 0.5;
        damage = damage*facteur;
        console.log(this.name + ' attaque de ' + damage + ' de dégats');
        character.pV -= damage;
    }

    takeDamage(damage: number): number {
        return damage;
    }
}

export { Enemy };