import { Routes } from '@angular/router';
import { LoginModule } from './components/login/login.module';
import { StateModule } from './components/state/state.module';
import { ConcertInformationModule } from './components/concert/concert-information.module';
import { SpecialTopicModule } from './components/special/special-topic.module';

export function loadLoginModule(): any {
  return LoginModule;
}

export function loadConcertInformationModule(): any {
  return ConcertInformationModule;
}

export function loadSpecialTopicModule(): any {
  return SpecialTopicModule;
}

export const ROUTES: Routes = [
  { path: '', loadChildren: loadLoginModule },
  { path: 'concert', loadChildren: loadConcertInformationModule },
  { path: 'special', loadChildren: loadSpecialTopicModule }
];
