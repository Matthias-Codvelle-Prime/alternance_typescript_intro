import { randomInt } from "crypto";

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
}

export { Enemy };