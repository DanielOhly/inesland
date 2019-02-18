import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharformComponent } from './charform/charform.component';
import { RaceFormComponent } from './race-form/race-form.component';
import { ClassFormComponent } from './class-form/class-form.component';
import { StatsFormComponent } from './stats-form/stats-form.component';
import { ProfFormComponent } from './prof-form/prof-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CharformComponent,
    RaceFormComponent,
    ClassFormComponent,
    StatsFormComponent,
    ProfFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
