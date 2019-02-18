import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-prof-form',
  template: `

  <!--Radio buttons for SV's, denote boolean when information is saved-->
  <div>
          <label>Saves:</label>
          <p> This will say what your SV's are </p>
          <label for='strSV'>Strength</label>
          <input type="checkbox" id="strSV" name="strSV">
          <label for='dexSV'>Dexterity</label>
          <input type="checkbox" id="dexSV" name="dexSV">
          <label for='conSV'>Constitution</label>
          <input type="checkbox" id="conSV" name="conSV">
          <label for='wisSV'>Wisdom</label>
          <input type="checkbox" id="wisSV" name="wisSV">
          <label for='intSV'>Intelligence</label>
          <input type="checkbox" id="intSV" name="intSV">
          <label for='chaSV'>Charisma</label>
          <input type="checkbox" id="chaSV" name="chaSV">
  </div>
  <div>
  <label>Proficiencies:</label>
  <p> This will say what your Proficiencies's are </p>
  <label for="athl">Athletics:</label>
  <input type="checkbox" name="athl" value="athlp" (click)='makeExp("athlex","athl","athle")'>
  <span id=athlex> </span>
  </div>
  <div>
  <label for="acro">Acrobatics:</label>
  <input type="checkbox" name="acro" value="acrop" (click)='makeExp("acrox","acro","acroe")'>
  <span id=acrox> </span>
  </div>
  <div>
  <label for="slei">Sleight of Hand:</label>
  <input type="checkbox" name="slei" value="sleip" (click)='makeExp("sleix","slei","sleie")'>
  <span id=sleix> </span>
  </div>
  <div>
  <label for="stea">Stealth:</label>
  <input type="checkbox" name="stea" value="steap" (click)='makeExp("steax","stea","steae")'>
  <span id=steax> </span>
  </div>
  <div>
  <label for="reli">Animal Handling:</label>
  <input type="checkbox" name="anim" value="animp" (click)='makeExp("animx","anim","anime")'>
  <span id=animx> </span>
  </div>
  <div>
  <label for="insi">Insight:</label>
  <input type="checkbox" name="insi" value="insip" (click)='makeExp("insix","insi","insie")'>
  <span id=insix> </span>
  </div>
  <div>
  <label for="medi">Medicine:</label>
  <input type="checkbox" name="medi" value="medip" (click)='makeExp("medix","medi","medie")'>
  <span id=medix> </span>
  </div>
  <div>
  <label for="perc">Perception:</label>
  <input type="checkbox" name="perc" value="percp" (click)='makeExp("percx","perc","perce")'>
  <span id=percx> </span>
  </div>
  <div>
  <label for="surv">Survival:</label>
  <input type="checkbox" name="surv" value="survp" (click)='makeExp("survx","surv","surve")'>
  <span id=survx> </span>
  <div>
  <div>
  <label for="arca">Arcana:</label>
  <input type="checkbox" name="arca" value="arcap" (click)='makeExp("arcax","arca","arcae")'>
  <span id=arcax> </span>
  </div>
  <div>
  <label for="hist">History:</label>
  <input type="checkbox" name="hist" value="histp" (click)='makeExp("histx","hist","histe")'>
  <span id=histx> </span>
  </div>
  <div>
  <label for="inve">Investigation:</label>
  <input type="checkbox" name="inve" value="invep" (click)='makeExp("invex","inve","invee")'>
  <span id=invex> </span>
  </div>
  <div>
  <label for="natu">Nature:</label>
  <input type="checkbox" name="natu" value="natup" (click)='makeExp("natux","natu","natue")'>
  <span id=natux> </span>
  </div>
  <div>
  <label for="reli">Religion:</label>
  <input type="checkbox" name="reli" value="relip" (click)='makeExp("relix","reli","relie")'>
  <span id=relix> </span>
  </div>
  <label for="dece">Deception:</label>
  <input type="checkbox" name="dece" value="decep" (click)='makeExp("decex","dece","decee")'>
  <span id=decex> </span>
  </div>
  <div>
  <label for="inti">Intimidation:</label>
  <input type="checkbox" name="inti" value="intip" (click)='makeExp("intix","inti","intie")'>
  <span id=intix> </span>
  </div>
  <div>
  <label for="perf">Performance:</label>
  <input type="checkbox" name="perf" value="perfp" (click)='makeExp("perfx","perf","perfe")'>
  <span id=perfx> </span>
  </div>
  <div>
  <label for="surv">Persuasion:</label>
  <input type="checkbox" name="pers" value="persp" (click)='makeExp("persx","pers","perse")'>
  <span id=persx> </span>
  </div>
  `,
  styleUrls: ['./prof-form.component.css']
})
export class ProfFormComponent implements OnInit {



//  Makes checkbox for Expertise if applicable
//  Bug!! Does not go away if unclicked
 makeExp(div, name, value) {
  document.getElementById(div).innerHTML = '<label>Expertise</label>' + '<input type=\"checkbox\" name=' + name + 'value=' + value + '>' ;
}

  constructor() { }

  ngOnInit() {
  }

}
