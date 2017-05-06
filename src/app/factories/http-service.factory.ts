import { XHRBackend } from '@angular/http';
import { AngularReduxRequestOptions } from '../core/angular-redux-request.options';
import { HttpService } from '../components/common/http.service';
import { LoaderService } from '../components/common/loader/loader.service';

function httpServiceFactory(
  backend: XHRBackend,
  options: AngularReduxRequestOptions,
  loaderService: LoaderService
) {
    return new HttpService(backend, options, loaderService);
}

export { httpServiceFactory };
