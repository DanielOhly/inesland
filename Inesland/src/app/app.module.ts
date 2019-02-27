import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharformComponent } from './charform/charform.component';
import { CharsheetComponent } from './charsheet/charsheet.component';


@NgModule({
  declarations: [
    AppComponent,
    CharformComponent,
    CharsheetComponent,

  ],
  imports: [

    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireFunctionsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
