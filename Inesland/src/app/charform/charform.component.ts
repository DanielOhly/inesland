import {
  Component,
  OnInit
} from '@angular/core';
import {
  Character
} from '../character';
import { FormGroup, FormBuilder, ReactiveFormsModule, FormControl } from '@angular/forms';
import { NgModule} from '@angular/core';
import { CharacterService } from '../character.service';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../../environments/environment.prod';
import { PlayerIndex } from '@angular/core/src/render3/interfaces/player';

@Component({
  selector: 'app-charform',
  templateUrl: './charform.component.html',
  styleUrls: ['./charform.component.css']
})



export class CharformComponent implements OnInit {
  // Creating Form Control fields
  charSheet = new FormGroup ({
    playerName: new FormControl(''),
    campaignName: new FormControl(''),
    characterName: new FormControl(''),
    charRace: new FormGroup ({
      raceOpt: new FormControl(''),
      subRaceOpt: new FormControl('')
    }),
    charClass: new FormGroup({
      classLvl: new FormControl(''),
      classOpt: new FormControl(''),
      subClassOpt: new FormControl('')
    }),
    armorClass: new FormControl(''),
    hitPoints: new FormControl(''),
    statArray: new FormGroup({
      str: new FormControl(''),
      strSV: new FormControl(''),
      dex: new FormControl(''),
      dexSV: new FormControl(''),
      con: new FormControl(''),
      conSV: new FormControl(''),
      wis: new FormControl(''),
      wisSV: new FormControl(''),
      int: new FormControl(''),
      intSV: new FormControl(''),
      cha: new FormControl(''),
      chaSV: new FormControl('')
    }),
    proficiencies: new FormGroup({
      athl: new FormControl(''),
      athle: new FormControl(''),
      acro: new FormControl(''),
      acroe: new FormControl(''),
      slei: new FormControl(''),
      sleie: new FormControl(''),
      stea: new FormControl(''),
      steae: new FormControl(''),
      anim: new FormControl(''),
      anime: new FormControl(''),
      insi: new FormControl(''),
      insie: new FormControl(''),
      medi: new FormControl(''),
      medie: new FormControl(''),
      perc: new FormControl(''),
      perce: new FormControl(''),
      surv: new FormControl(''),
      surve: new FormControl(''),
      arca: new FormControl(''),
      arcae: new FormControl(''),
      hist: new FormControl(''),
      histe: new FormControl(''),
      inve: new FormControl(''),
      invee: new FormControl(''),
      natu: new FormControl(''),
      natue: new FormControl(''),
      reli: new FormControl(''),
      relie: new FormControl(''),
      dece: new FormControl(''),
      decee: new FormControl(''),
      inti: new FormControl(''),
      intie: new FormControl(''),
      perf: new FormControl(''),
      perfe: new FormControl(''),
      pers: new FormControl(''),
      perse: new FormControl('')
    })
  });
  submitted = false;

// Object holding the Class options, as well as an ID that will fuel the function in the selector
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
  // Object holding the base Race Options, uses an ngFor-Of to populate a drop down.
  raceOpt = [
    {name: 'Choose a Race', id: 'noSR'},
    {name: 'Aarakocra', id: 'noSR'},
    {name: 'Aasimar', id: 'arSR'},
    {name: 'Bugbear', id: 'noSR'},
    {name: 'Dragonborn', id: 'dnSR'},
    {name: 'Dwarf', id: 'dfSR'},
    {name: 'Elf', id: 'efSR'},
    {name: 'Firbolg', id: 'noSR'},
    {name: 'Genasi', id: 'giSR'},
    {name: 'Gnome', id: 'geSR'},
    {name: 'Goblin', id: 'noSR'},
    {name: 'Goliath', id: 'noSR'},
    {name: 'Halfling', id: 'hgSR'},
    {name: 'Half-Elf', id: 'hfSR'},
    {name: 'Half-Orc', id: 'noSR'},
    {name: 'Hobgoblin', id: 'noSR'},
    {name: 'Human', id: 'hSR'},
    {name: 'Kenku', id: 'noSR'},
    {name: 'Kobold', id: 'noSR'},
    {name: 'Orc', id: 'noSR'},
    {name: 'Tabaxi', id: 'noSR'},
    {name: 'Triton', id: 'noSR'},
    {name: 'Tiefling', id: 'tgSR'},
    {name: 'Yuan-Ti', id: 'noSR'}
  ];
  // Array holding simple number values to ease validity of input
  classLvl = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  // Array holding simple number values to ease validity of input
  statArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

  // Function which determines which Sub Race to show in the sub race drop down
  // Uses a switch case and inner HTML to define each OptGroup
  displaySR() {
    const selectorSR = document.getElementById('raceOpt') as HTMLSelectElement;
    const raceSel = selectorSR.options[selectorSR.selectedIndex].id;
    const subRaceSel = document.getElementById('subRaceOpt');
    switch (raceSel) {
      case 'noSR':
        // If the race has no Sub Races available, raise none.
        subRaceSel.innerHTML =
        '<optgroup id=\"noSR\" label=\"No Subraces Available\">' +
        '<option value=\"x\" selected>No Subraces Available</option>' +
        '</optgroup>';
        break;
      case 'arSR':
        // Aasimar
        subRaceSel.innerHTML =
        '<optgroup id=\"arSR\" label=\"Aasimar\'>' +
        '<option value=\'Protector\'>Protector</option>' +
        '<option value=\'Scourge\'>Scourge</option>' +
        '<option value=\'Fallen\'>Fallen</option>' +
        '</optgroup>';
        break;
      case 'dnSR':
        // Dragonborn
        subRaceSel.innerHTML =
        '<optgroup id=\'arSR\' label=\'Dragonborn\'>' +
        '<option value=\'Black\'>Black</option>' +
        '<option value=\'Blue\'>Blue</option>' +
        '<option value=\'Brass\'>Brass</option>' +
        '<option value=\'Bronze\'>Bronze</option>' +
        '<option value=\'Copper\'>Copper</option>' +
        '<option value=\'Gold\'>Gold</option>' +
        '<option value=\'Green\'>Green</option>' +
        '<option value=\'Red\'>Red</option>' +
        '<option value=\'Silver\'>Silver</option>' +
        '<option value=\'White\'>White</option>' +
        '</optgroup>';
        break;
      case 'dfSR':
        // Dwarf
        subRaceSel.innerHTML =
        '<optgroup id=\'dfSR\' label=\'Dwarf\'>' +
        '<option value=\'Hill\'>Hill</option>' +
        '<option value=\'Mountain\'>Mountain</option>' +
        '<option value=\'Duergar\'>Duergar</option>' +
        '</optgroup>';
        break;
      case 'efSR':
        // Elf
        subRaceSel.innerHTML =
        '<optgroup id=\'arSR\' label=\'Elf\'>' +
        '<option value=\'Drow\'>Drow</option>' +
        '<option value=\'Eladrin\'>Eladrin</option>' +
        '<option value=\'High Elf\'>High Elf</option>' +
        '<option value=\'Sea Elf\'>Sea Elf</option>' +
        '<option value=\'Shadar-Kai\'>Shadar-Kai</option>' +
        '<option value=\'Wood Elf\'>Wood Elf</option>' +
        '</optgroup>';
        break;
      case 'giSR':
        // Genasi
        subRaceSel.innerHTML =
        '<optgroup id=\'gi\' label=\'Genasi\'>' +
        '<option value=\'Air\'>Air</option>' +
        '<option value=\'Earth\'>Earth</option>' +
        '<option value=\'Fire\'>Fire</option>' +
        '<option value=\'Water\'>Water</option>' +
        '</optgroup>';
        break;
      case 'geSR':
        // Gnome
        subRaceSel.innerHTML =
        '<optgroup id=\'geSR\' label=\'Gnome\'>' +
        '<option value=\'Deep\'>Deep</option>' +
        '<option value=\'Forest\'>Forest</option>' +
        '<option value=\'Rock\'>Rock</option>' +
        '</optgroup>';
        break;
      case 'hgSR':
        // Halfling
        subRaceSel.innerHTML =
        '<optgroup id=\'hgSR\' label=\'Halfling\'>' +
        '<option value=\'Lightfoot\'>Lightfoot</option>' +
        '<option value=\'Stout\'>Stout</option>' +
        '<option value=\'Ghostwise\'>Ghostwise</option>' +
        '</optgroup>';
        break;
      case 'hfSR':
        // Half-Elf
        subRaceSel.innerHTML =
        '<optgroup id=\'hfSR\' label=\'Half-Elf\'>' +
        '<option value=\'None\'>None</option>' +
        '<option value=\'heDrow\'>Drow</option>' +
        '<option value=\'heHighElf\'>High Elf</option>' +
        '<option value=\'heSeaElf\'>Sea Elf</option>' +
        '<option value=\'heWoodElf\'>Wood Elf</option>' +
        '</optgroup>';
        break;
      case 'hSR':
        // Human
        subRaceSel.innerHTML =
        '<optgroup id=\'hSR\' label=\'Human\'>' +
        '<option value=\'Human\'>Human</option>' +
        '<option value=\'Variant Human\'>Variant Human</option>' +
        '</optgroup>';
        break;
      case 'tgSR':
        // Tiefling
        subRaceSel.innerHTML =
        '<optgroup id=\'tgSR\' label=\'Tiefling\'>' +
        '<option value=\'Tiefling\'>Tiefling/ Asmodeus</option>' +
        '<option value=\'Feral\'>Feral</option>' +
        '<option value=\'Devil\'s Tongue\'>Devil\'s Tongue</option>' +
        '<option value=\'Winged\'>Winged</option>' +
        '<option value=\'Baalzebul\'>Baalzebul</option>' +
        '<option value=\'Dispater\'>Dispater</option>' +
        '<option value=\'Fierna\'>Fierna</option>' +
        '<option value=\'Glasya\'>Glasya</option>' +
        '<option value=\'Levistus\'>Levistus</option>' +
        '<option value=\'Mammon\'>Mammon</option>' +
        '<option value=\'Mephistopheles\'>Mephistopheles</option>' +
        '<option value=\'Zariel\'>Zariel</option>' +
        '</optgroup>';
        break;
    }
  }

  // Function which determines which Sub Class to show in the sub class drop down
    // Uses a switch case and inner HTML to define each OptGroup
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

// Makes checkbox for Expertise if applicable
// Bug!! Does not go away if unclicked
 makeExp(div, name, value) {
  document.getElementById(div).innerHTML = '<label>Expertise?</label>' +
  '<input type=\"checkbox\" formControlName=' + value + ' name=' + value + ' value=' + value + '>'; }


  onSubmit() {
    this.submitted = true;
    this.crudAPI.AddCharacter(this.charSheet.value);
    console.log(this.charSheet.value);

  }

constructor(
    private fb: FormBuilder,
    public db: AngularFireDatabase,
    public crudAPI: CharacterService
  ) {
  }

  ngOnInit() {

  }



}

