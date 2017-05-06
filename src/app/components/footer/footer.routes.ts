import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './state.controller';

const footerRoutes: Routes = [
  { path: '', component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(footerRoutes)],
  exports: [RouterModule]
})
export class FooterRoutesModule { }
