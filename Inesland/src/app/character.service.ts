import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Character } from './character';
import { AngularFireDatabase, AngularFireList, AngularFireObject  } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { firebase } from '@firebase/app';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  items: Observable<any[]>;


  constructor(public db: AngularFireDatabase) {
  }


//  database.ref('Players/' + playerName).child('Character/' + characterName).set(charCore);

  AddCharacter(character: Character) {
    const database = this.db.database;
    const playerNam = character.playerName;
    const charName = character.characterName;
    const charCore = {
      campaignName: character.campaignName,
      charRace: character.charRace,
      charClass: character.charClass,
      armorClass: character.armorClass,
      hitPoints: character.hitPoints,
      statArray: character.statArray,
      proficiencies: character.proficiencies
    };
    database.ref('Players/' + playerNam).child('Character/' + charName).set(charCore);

  }
}



