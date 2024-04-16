import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

//console.log(v4)
//Decorador
@Injectable({
    providedIn: 'root'
})

export class DbzService {
    
    public characters: Character[] = [{
        id: uuid(),
        name: 'Krillin',
        power: 1000
    }, {
        id: uuid(),
        name: 'Goku',
        power: 9500
    }, {
        id: uuid(),
        name: 'Vegeta',
        power: 7500
    }];

    addCharacter (character: Character) : void {
        //... Operador spred toma todas las propiedades del objeto
        const newCharacter: Character = { id: uuid(), ...character }

        this.characters.push(newCharacter);
    }

    deleteCharacterById( id:string) {
        this.characters = this.characters.filter(character => character.id !== id);
    }

    // ondDeleteCharacter(index: number){
    //     this.characters.splice(index, 1);
    // }
    
}