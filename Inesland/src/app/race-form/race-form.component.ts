import { Component, OnInit } from '@angular/core';
import {
  Character
} from '../character';
import { FormGroup, FormBuilder } from '@angular/forms';




@Component({
  selector: 'app-race-form',
  styleUrls: ['./race-form.component.css'],
  template: `
  <!--Race choice, and subclass selector-->
  <div class="form-group">
      <label for="raceOpt">Race: </label>
      <select class="form-control"  name="raceOpt" id="raceOpt" (change)="displaySR(id)">
        <option  *ngFor="let race of raceOpt" id={{race.id}}>{{race.name}}</option>
      </select>
  </div>
  <div class="form-group">
  <label for="subRaceOpt">Sub Race: </label>
  <select class="form-control"  name="subRaceOpt" id="subRaceOpt">
  </select>
</div>
`

})
export class RaceFormComponent implements OnInit {

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

  displaySR() {
    const selectorSR = document.getElementById('raceOpt') as HTMLSelectElement;
    const raceSel = selectorSR.options[selectorSR.selectedIndex].id;
    switch (raceSel) {
      case 'noSR':
        this.noSR();
        break;
      case 'arSR':
        this.arSR();
        break;
      case 'dnSR':
        this.dnSR();
        break;
      case 'dfSR':
        this.dfSR();
        break;
      case 'efSR':
        this.efSR();
        break;
      case 'giSR':
        this.giSR();
        break;
      case 'geSR':
        this.geSR();
        break;
      case 'hgSR':
        this.hgSR();
        break;
      case 'hfSR':
        this.hfSR();
        break;
      case 'hSR':
        this.hSR();
        break;
      case 'tgSR':
        this.tgSR();
        break;
    }
  }

  // If the race has no Sub Races available, raise none.
noSR() {
    document.getElementById('subRaceOpt').innerHTML =
        '<optgroup id=\"noSR\" label=\"No Subraces Available\">' +
        '<option value=\"-\" selected>No Subraces Available</option>' +
        '</optgroup>';
}

// Aasimar
arSR() {
  document.getElementById('subRaceOpt').innerHTML =
      '<optgroup id=\"arSR\" label=\"Aasimar\'>' +
      '<option value=\'Protector\'>Protector</option>' +
      '<option value=\'Scourge\'>Scourge</option>' +
      '<option value=\'Fallen\'>Fallen</option>' +
      '</optgroup>';
}
// Dragonborn
dnSR() {
  document.getElementById('subRaceOpt').innerHTML =
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
}
// Dwarf
dfSR() {
  document.getElementById('subRaceOpt').innerHTML =
      '<optgroup id=\'dfSR\' label=\'Dwarf\'>' +
      '<option value=\'Hill\'>Hill</option>' +
      '<option value=\'Mountain\'>Mountain</option>' +
      '<option value=\'Duergar\'>Duergar</option>' +
      '</optgroup>';
}
// Elf
 efSR() {
  document.getElementById('subRaceOpt').innerHTML =
      '<optgroup id=\'arSR\' label=\'Elf\'>' +
      '<option value=\'Drow\'>Drow</option>' +
      '<option value=\'Eladrin\'>Eladrin</option>' +
      '<option value=\'High Elf\'>High Elf</option>' +
      '<option value=\'Sea Elf\'>Sea Elf</option>' +
      '<option value=\'Shadar-Kai\'>Shadar-Kai</option>' +
      '<option value=\'Wood Elf\'>Wood Elf</option>' +
      '</optgroup>';
}
// Genasi
 giSR() {
  document.getElementById('subRaceOpt').innerHTML =
      '<optgroup id=\'gi\' label=\'Genasi\'>' +
      '<option value=\'Air\'>Air</option>' +
      '<option value=\'Earth\'>Earth</option>' +
      '<option value=\'Fire\'>Fire</option>' +
      '<option value=\'Water\'>Water</option>' +
      '</optgroup>';
}
// Gnome
 geSR() {
  document.getElementById('subRaceOpt').innerHTML =
      '<optgroup id=\'geSR\' label=\'Gnome\'>' +
      '<option value=\'Deep\'>Deep</option>' +
      '<option value=\'Forest\'>Forest</option>' +
      '<option value=\'Rock\'>Rock</option>' +
      '</optgroup>';
}
// Halfling
 hgSR() {
  document.getElementById('subRaceOpt').innerHTML =
      '<optgroup id=\'hgSR\' label=\'Halfling\'>' +
      '<option value=\'Lightfoot\'>Lightfoot</option>' +
      '<option value=\'Stout\'>Stout</option>' +
      '<option value=\'Ghostwise\'>Ghostwise</option>' +
      '</optgroup>';
}
// Half Elf
 hfSR() {
  document.getElementById('subRaceOpt').innerHTML =
      '<optgroup id=\'hfSR\' label=\'Half-Elf\'>' +
      '<option value=\'None\'>None</option>' +
      '<option value=\'heDrow\'>Drow</option>' +
      '<option value=\'heHighElf\'>High Elf</option>' +
      '<option value=\'heSeaElf\'>Sea Elf</option>' +
      '<option value=\'heWoodElf\'>Wood Elf</option>' +
      '</optgroup>';
}
// Human
 hSR() {
  document.getElementById('subRaceOpt').innerHTML =
      '<optgroup id=\'hSR\' label=\'Human\'>' +
      '<option value=\'Human\'>Human</option>' +
      '<option value=\'Variant Human\'>Variant Human</option>' +
      '</optgroup>';
}
// Tiefling
 tgSR() {
  document.getElementById('subRaceOpt').innerHTML =
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
}



  constructor() {
   }

  ngOnInit() {

  }

}
