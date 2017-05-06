import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConcertInformationComponent } from './concert-information.component';

const concertInformationRoutes: Routes = [
  { path: '', component: ConcertInformationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(concertInformationRoutes)],
  exports: [RouterModule],
})
export class ConcertInformationRoutesModule { }
