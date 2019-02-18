import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubchoiceService {

  constructor() { }

  raceType: {
    ChooseName: {name: 'Choose a Race', id: 'noSR'},
    Aarakocra: {name: 'Aarakocra', id: 'noSR'},
    Aasimar: {name: 'Aasimar', id: 'arSR'},
    Bugbear: {name: 'Bugbear', id: 'noSR'},
    Dragonborn: {name: 'Dragonborn', id: 'dnSR'},
    Dwarf: {name: 'Dwarf', id: 'dfSR'},
    Elf: {name: 'Elf', id: 'efSR'},
    Firbolg: {name: 'Firbolg', id: 'noSR'},
    Genasi: {name: 'Genasi', id: 'giSR'},
    Gnome: {name: 'Gnome', id: 'geSR'},
    Goblin: {name: 'Goblin', id: 'noSR'},
    Goliath: {name: 'Goliath', id: 'noSR'},
    Halfling: {name: 'Halfling', id: 'hgSR'},
    HalfElf: {name: 'Half-Elf', id: 'hfSR'},
    HalfOrc: {name: 'Half-Orc', id: 'noSR'},
    Hobgoblin: {name: 'Hobgoblin', id: 'noSR'},
    Human: {name: 'Human', id: 'hSR'},
    Kenku: {name: 'Kenku', id: 'noSR'},
    Kobold: {name: 'Kobold', id: 'noSR'},
    Orc: {name: 'Orc', id: 'noSR'},
    Tabaxi: {name: 'Tabaxi', id: 'noSR'},
    Triton: {name: 'Triton', id: 'noSR'},
    Tiefling: {name: 'Tiefling', id: 'tgSR'},
    Yuanti: {name: 'Yuan-Ti', id: 'noSR'}
  };




  }


