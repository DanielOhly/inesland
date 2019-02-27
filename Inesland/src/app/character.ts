export class Character {
    constructor(
        public playerName: string,
        public characterName: string,
        public campaignName: string,
        public charRace: object,
        public charClass: object,
        public armorClass: number,
        public hitPoints: number,
        public statArray: object,
        public proficiencies: object
        ) { }


}
