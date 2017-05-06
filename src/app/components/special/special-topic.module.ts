import { NgModule } from '@angular/core';
import { SharedModule } from '../common/shared.module';
import { SpecialTopicRoutesModule } from './special-topic.routes';
import { SpecialTopicComponent } from './special-topic.component';

@NgModule({
  imports: [
    SharedModule,
    SpecialTopicRoutesModule,
  ],
  exports: [
  ],
  declarations: [
    SpecialTopicComponent,
  ],
  providers: [
  ]
})

export class SpecialTopicModule { }
