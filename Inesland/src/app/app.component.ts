import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseApp } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Inesland';
  constructor(public db: AngularFireDatabase ) {

    }

  }

