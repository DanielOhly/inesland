import {
  Component,
  OnInit
} from '@angular/core';
import {
  Character
} from '../character';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SubchoiceService } from '../subchoice.service';

@Component({
  selector: 'app-charform',
  templateUrl: './charform.component.html',
  styleUrls: ['./charform.component.css'],
  providers: [SubchoiceService]
})



export class CharformComponent implements OnInit {



  charForm: FormGroup;


  submitted = false;
  onSubmit() {
    this.submitted = true;
  }






  constructor(private fb: FormBuilder) {}

  ngOnInit() {

  }



}
