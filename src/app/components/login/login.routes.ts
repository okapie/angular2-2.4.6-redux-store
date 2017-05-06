import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginComponent } from './login.component';
import { ConcertInformationComponent } from '../concert/concert-information.component';
import { SpecialTopicComponent } from '../special/special-topic.component';

const loginRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  { path: 'concert', component: ConcertInformationComponent },
  { path: 'special', component: SpecialTopicComponent }
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule],
  providers: [
    AuthService
  ]
})

export class LoginRoutesModule { }
