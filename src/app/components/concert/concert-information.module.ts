import { NgModule } from '@angular/core';
import { SharedModule } from '../common/shared.module';
import { ConcertInformationRoutesModule } from './concert-information.routes';
import { ConcertInformationComponent } from './concert-information.component';

@NgModule({
  imports: [
    SharedModule,
    ConcertInformationRoutesModule,
  ],
  exports: [
  ],
  declarations: [
    ConcertInformationComponent
  ],
  providers: [
  ]
})

export class ConcertInformationModule { }
