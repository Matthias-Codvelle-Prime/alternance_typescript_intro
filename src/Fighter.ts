import { Character } from "./Character";
import { Enemy } from "./Enemy";

interface Fighter {
    attack(enemyOrCharacter: Enemy | Character): void;
    takeDamage(damage: number): number;
}

export { Fighter };