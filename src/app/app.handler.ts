import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { Router } from '@angular/router';

@Injectable()
export class CustomErrorHandler implements ErrorHandler {

  private router: Router;

  constructor(injector: Injector) {
    this.router = injector.get(Router);
  }

  handleError(error: any) {

    // TODO: do something?
    // console.log(error);

    this.router.navigate(['/error']);
  }
}
