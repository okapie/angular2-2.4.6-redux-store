import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecialTopicComponent } from './special-topic.component';

const specialTopicRoutes: Routes = [
  { path: '', component: SpecialTopicComponent },
];

@NgModule({
  imports: [RouterModule.forChild(specialTopicRoutes)],
  exports: [RouterModule],
})

export class SpecialTopicRoutesModule { }
