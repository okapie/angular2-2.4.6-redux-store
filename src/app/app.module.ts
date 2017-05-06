import { NgModule, ApplicationRef, ErrorHandler } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';

import { CoreModule } from './components/common/core.module';
import { LoginModule } from './components/login/login.module';
import { ConcertInformationModule } from './components/concert/concert-information.module';
import { SpecialTopicModule } from './components/special/special-topic.module';
import { ApiBaseModule } from './api-base.module';
import {
  userInfo,
  bannersInfo,
  funnyGuyInfo
} from './components/state/reducer';

import { AuthService } from './services/auth.service';
import { CommonService } from './services/common.service';

import { CustomErrorHandler } from './app.handler';
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';

// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState,
  ApiBaseModule,
  AuthService,
  CommonService,
  { provide: ErrorHandler, useClass: CustomErrorHandler },
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [ // import Angular's modules
    CoreModule,
    LoginModule,
    ConcertInformationModule,
    SpecialTopicModule,
    BrowserModule,
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    StoreModule.provideStore({
      userInfo,
      bannersInfo,
      funnyGuyInfo
    }),
  ],
  exports: [
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    AuthService
  ]
})

export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) { }

  hmrOnInit(store: StoreType) {
    if (!store || !store.state) return;
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}

