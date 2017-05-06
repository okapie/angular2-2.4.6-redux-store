import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../common/shared.module';
import { LoginRoutesModule } from './login.routes';

@NgModule({
  imports: [
    SharedModule,
    LoginRoutesModule,
    FormsModule,
  ],
  exports: [
  ],
  declarations: [
  ],
  providers: [
  ]
})

export class LoginModule { }
