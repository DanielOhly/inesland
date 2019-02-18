import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-form',
  template: `
  <!--Class choice, and subclass selector-->
  <div class="form-group">
  <label for="classlevel">Class Level: </label>
  <select class="form-control" name="classLevel">
  <option *ngFor="let lvl of classLvl" id={{lvl.value}}> {{lvl}} </option>
  </select>
  </div>
  <div class="form-group">
  <label for="classOpt">Class: </label>
  <select class="form-control"  name="classOpt" id="classOpt" (change)="displaySC(id)">
  <option  *ngFor="let class of classOpt" id={{class.id}}>{{class.name}}</option>
  </select>
  </div>
  <div class="form-group">
  <label for="subClassOpt">Sub Class: </label>
  <select class="form-control"  name="subClassOpt" id="subClassOpt">
  </select>
  </div>
`
,
  styleUrls: ['./class-form.component.css']
})
export class ClassFormComponent implements OnInit {
  classLvl = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  classOpt = [
    {name: 'Choose your Class!'},
    {name: 'Barbarian', id: 'bnSC'},
    {name: 'Bard', id: 'bdSC'},
    {name: 'Cleric', id: 'ccSC'},
    {name: 'Druid', id: 'ddSC'},
    {name: 'Fighter', id: 'frSC'},
    {name: 'Monk', id: 'mkSC'},
    {name: 'Paladin', id: 'pnSC'},
    {name: 'Ranger', id: 'rrSC'},
    {name: 'Rogue', id: 'reSC'},
    {name: 'Sorcerer', id: 'srSC'},
    {name: 'Warlock', id: 'wkSC'},
    {name: 'Wizard', id: 'wdSC'},
  ];
  displaySC() {
    const selectorSR = document.getElementById('classOpt') as HTMLSelectElement;
    const classSel = selectorSR.options[selectorSR.selectedIndex].id;
    const subClassFormSel = document.getElementById('subClassOpt') as HTMLSelectElement;
    switch (classSel) {
      case 'bnSC':
      subClassFormSel.innerHTML = '<optgroup id=\'bnsc\' label=\'Barbarian\'>' +
      '<option>Barbarian</option>' +
      '<option>Path of the Ancestral Guardian</option>' +
      '<option>Path of the Battlerager</option>' +
      '<option>Path of the Berserker</option>' +
      '<option>Path of the Storm Herald</option>' +
      '<option>Path of the Totem Warrior</option>' +
      '</optgroup>';
      break;
      case 'bdSC':
      subClassFormSel.innerHTML =
      '<optgroup id=\'bdsc\' label=\'Bard\'>' +
        '<option>Bard</option>' +
        '<option>College of Glamour</option>' +
        '<option>College of Lore</option>' +
        '<option>College of Swords</option>' +
        '<option>College of Valor</option>' +
        '<option>College of Whispers</option>' +
        '</optgroup>';
      break;
      case 'ccSC':
      subClassFormSel.innerHTML =
      '<optgroup id=\'ccsc\' label=\'Cleric\'>' +
        '<option>Cleric</option>' +
        '<option id=\'ccarca\'>Arcana Domain</option>' +
        '<option>Death Domain</option>' +
        '<option>Forge Domain</option>' +
        '<option>Grave Domain</option>' +
        '<option>Knowledge Domain</option>' +
        '<option>Life Domain</option>' +
        '<option>Light Domain</option>' +
        '<option>Nature Domain</option>' +
        '<option id=\'cctempe\'>Tempest Domain</option>' +
        '<option>Trickery Domain</option>' +
        '<option>War Domain</option>' +
        '</optgroup>';
      break;
        case 'ddSC':
        subClassFormSel.innerHTML =
        '<optgroup id=\'ddsc\' label=\'Druid\'>' +
        '<option>Druid</option>' +
        '<option>Circle of Dreams</option>' +
        '<option>Cirle of the Land</option>' +
        '<option>Cirle of the Moon</option>' +
        '<option>Cirle of the Shepherd</option>' +
        '<option>Cirle of the Spores</option>' +
        '<option>Cirle of the Twilight</option>' +
        '</optgroup>';
        break;
        case 'frSC':
        subClassFormSel.innerHTML =
        '<optgroup id=\'fr\' label=\'Fighter\'>' +
        '<option>Fighter</option>' +
        '<option>Arcane Archer</option>' +
        '<option id=\'frbatl\'>Battle Master</option>' +
        '<option>Cavalier</option>' +
        '<option>Champion</option>' +
        '<option>Eldritch Knight</option>' +
        '<option>Samurai</option>' +
        '</optgroup>';
        break;
        case 'mkSC':
        subClassFormSel.innerHTML =
        '<optgroup id=\'mksc\' label=\'Monk\'>' +
        '<option>Monk</option>' +
        '<option>Way of the Drunken Master</option>' +
        '<option>Way of the Four Elements</option>' +
        '<option>Way of the Kensei</option>' +
        '<option>Way of the Long Death</option>' +
        '<option>Way of the Open Hand</option>' +
        '<option>Way of the Shadow</option>' +
        '<option>Way of the Sun Soul</option>' +
        '</optgroup>';
        break;
        case 'pnSC':
        subClassFormSel.innerHTML =
        '<optgroup id=\'pnsc\' label=\'Paladin\'>' +
        '<option>Paladin</option>' +
        '<option id=\'pnanci\'>Oath of the Ancients</option>' +
        '<option>Oath of Conquest</option>' +
        '<option>Oath of the Crown</option>' +
        '<option>Oath of Devotion</option>' +
        '<option>Oath of Redemption</option>' +
        '<option>Oath of Vengeance</option>' +
        '<option>Oathbreaker</option>' +
        '</optgroup>';
        break;
        case 'rrSC':
        subClassFormSel.innerHTML =
        '<optgroup id=\'rrsc\' label=\'Ranger\'>' +
        '<option>Ranger</option>' +
        '<option>Beast Master</option>' +
        '<option>Gloom Stalker</option>' +
        '<option>Horizon Walker</option>' +
        '<option>Hunter</option>' +
        '<option>Monster Slayer</option>' +
        '</optgroup>';
        break;
        case 'reSC':
        subClassFormSel.innerHTML =
        '<optgroup id=\'resc\' label=\'Rogue\'>' +
        '<option>Rogue</option>' +
        '<option>Arcane Trickster</option>' +
        '<option>Assassin</option>' +
        '<option>Inquisitive</option>' +
        '<option id=\'remast\'>Mastermind</option>' +
        '<option>Scout</option>' +
        '<option>Swashbuckler</option>' +
        '<option>Thief</option>' +
        '</optgroup>';
        break;
        case 'srSC':
        subClassFormSel.innerHTML =
        '<optgroup id=\'srsc\' label=\'Sorcerer\'>' +
        '<option>Sorcerer</option>' +
        '<option>Divine Soul</option>' +
        '<option>Draconic Bloodline</option>' +
        '<option>Shadow Magic</option>' +
        '<option>Stone Sorcery</option>' +
        '<option>Storm Sorcery</option>' +
        '<option>Wild Magic</option>' +
        '</optgroup>';
        break;
        case 'wkSC':
        subClassFormSel.innerHTML =
        '<optgroup id=\'wksc\' label=\'Warlock\'>' +
        '<option>Warlock</option>' +
        '<option>The Archfey</option>' +
        '<option>The Celestial</option>' +
        '<option>The Fiend</option>' +
        '<option>The Great Old One</option>' +
        '<option>The Hexblade</option>' +
        '<option>The Undying</option>' +
        '</optgroup>';
        break;
        case 'wdSC':
        subClassFormSel.innerHTML =
        '<optgroup id=\'wdsc\' label=\'Wizard\'>' +
        '<option>Wizard</option>' +
        '<option>Bladesinging</option>' +
        '<option>School of Abjuration</option>' +
        '<option>School of Conjuration</option>' +
        '<option>School of Divination</option>' +
        '<option>School of Enchantment</option>' +
        '<option>School of Evocation</option>' +
        '<option>School of Illusion</option>' +
        '<option>School of Necromancy</option>' +
        '<option>School of Transmutation</option>' +
        '<option id=\'wdwarm\'>War Magic</option>' +
        '</optgroup>';
        break;
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
