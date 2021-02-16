import { randomInt } from 'crypto';
import { Enemy } from './Enemy';
import { Fighter } from './Fighter';

class Character implements Fighter {

    name: string
    sex: string
    pV: number = 100

    constructor(nameCharacter: string, sexCharacter: string) {
        this.name = nameCharacter;
        this.sex = sexCharacter;
    }

    summary() {
        console.log('Nom  : ' + this.name);
        console.log('Sex : ' + this.sex);
        console.log('PV : ' + this.pV);
    }

    attack(enemy: Enemy) {
        let damage = this.takeDamage(randomInt(0, 100));
        console.log(this.name + ' attaque de ' + damage + ' de dégats');
        enemy.pV -= damage;
    }

    takeDamage(damage: number): number {
        return damage/2;
    }

}

export { Character };