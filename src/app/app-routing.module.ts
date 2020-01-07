import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatesComponent } from './candidates/candidates.component';
import { CandidateListComponent } from './candidates/candidate-list/candidate-list.component';
import { CardviewComponent } from './cardview/cardview.component';
import { CandidateComponent } from './candidates/candidate/candidate.component';
import { ProcessComponent } from './process/process.component';


const routes: Routes = [
  {path:'employee' ,component:CandidateComponent},
  {path:'candidateList' ,component:CandidateListComponent},
  {path:'interviewProcess' ,component:ProcessComponent},
  {path:'' ,component:CardviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
