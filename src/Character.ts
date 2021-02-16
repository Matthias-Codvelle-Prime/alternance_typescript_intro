class Character {

    name: string
    sex: string
    pV: number

    constructor(nameCharacter: string, sexCharacter: string, pVCharacter: number) {
        this.name = nameCharacter;
        this.sex = sexCharacter;
        this.pV = pVCharacter;
    }

    summary() {
        console.log('Nom  : ' + this.name);
        console.log('Sex : ' + this.sex);
        console.log('PV : ' + this.pV);
    }

}

export { Character };