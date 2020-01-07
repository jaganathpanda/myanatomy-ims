import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from "./material/material.module";
import { FormsModule,ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CandidatesComponent } from './candidates/candidates.component';
import { CandidateComponent } from './candidates/candidate/candidate.component';
import {CandidateService} from './shared/candidate.service';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from "angularfire2/database";
import {environment} from '../environments/environment';
import {DepartmentService} from './shared/department.service';
import { CandidateListComponent } from './candidates/candidate-list/candidate-list.component';
import { CardviewComponent } from './cardview/cardview.component';
import { ProcessComponent,DialogOverviewExampleDialog } from './process/process.component';
import { ProcessDialogComponent } from './process-dialog/process-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    CandidatesComponent,
    CandidateComponent,
    CandidateListComponent,
    CardviewComponent,
    ProcessComponent,
    ProcessDialogComponent,
    DialogOverviewExampleDialog,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
    
  ],
  providers: [CandidateService,DepartmentService],
  bootstrap: [AppComponent],
  entryComponents:[CandidateComponent,DialogOverviewExampleDialog]
})
export class AppModule { }
