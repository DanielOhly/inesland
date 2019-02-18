import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-form',
  template: `
  <div>
  <!--Input fields for AC and HP-->
  <div>
  HP and AC Info
  </div>
  <label for="AC">Armor Class: </label>
  <input class="form-control" type="number" id="number" name="AC" value="1" min="1">
  <label for="HP">Hit Points: </label>
  <input class="form-control"  type="number" id="number" name="HP" value="1" min="1">
  </div>
  <div>
Stat Array Info  
</div>
  <div>
  <label for="str">Strength: </label>
  <select class="form-control" name="str">
  <option *ngFor="let array of statArray" id={{array.value}}> {{array}} </option>
  </select>
  </div>
  <div>
  <label for="str">Dexterity: </label>
  <select class="form-control" name="dex">
  <option *ngFor="let array of statArray" id={{array.value}}> {{array}} </option>
  </select>
  </div>
  <div>
  <label for="str">Constitution: </label>
  <select class="form-control" name="con">
  <option *ngFor="let array of statArray" id={{array.value}}> {{array}} </option>
  </select>
  </div>
  <div>
  <label for="str">Wisdom: </label>
  <select class="form-control" name="wis">
  <option *ngFor="let array of statArray" id={{array.value}}> {{array}} </option>
  </select>
  </div>
  <div>
  <label for="str">Intelligence: </label>
  <select class="form-control" name="int">
  <option *ngFor="let array of statArray" id={{array.value}}> {{array}} </option>
  </select>
  </div>
  <div>
  <label for="str">Charisma: </label>
  <select class="form-control" name="cha">
  <option *ngFor="let array of statArray" id={{array.value}}> {{array}} </option>
  </select>
  </div>
  `,
  styleUrls: ['./stats-form.component.css']
})
export class StatsFormComponent implements OnInit {
  statArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

  constructor() { }

  ngOnInit() {
  }

}
