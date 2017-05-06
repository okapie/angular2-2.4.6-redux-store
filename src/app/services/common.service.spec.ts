import { inject, async, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { HttpModule, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';

import { HttpService } from '../components/common/http.service';
import { ApiBaseModule } from '../api-base.module';
import { CommonService } from './common.service';
import { LoaderService } from '../components/common/loader/loader.service';
import { LoginComponent } from '../components/login/login.component';
import { AngularReduxRequestOptions } from '../components/common/angular-redux-request.options';

class RouterStub {
  navigateByUrl = jasmine.createSpy('navigateByUrl');
}

describe('# CommonService', () => {

  let commonService: CommonService;
  let mockBackend: MockBackend;

  beforeEach(() => {

    // TestBedでテストモジュールを作る
    TestBed.configureTestingModule({

      // テストするcomponentを指定
      declarations: [LoginComponent],
      imports: [ RouterModule.forRoot([]), HttpModule, CommonModule, FormsModule, ReactiveFormsModule ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' },
        {provide: Store, useClass: RouterStub},
        HttpService,
        ApiBaseModule,
        CommonService,
        LoaderService,
        AngularReduxRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend]
        }
      ]
    });
  });

  it('お知らせ一覧取得要求の期待値 => success: true', function() {

    expect(function(done) {

      commonService.fetchNotices()
        .subscribe((response) => {
          expect(response.json()).toEqual({ success: true });
          done();
        });
    });
  });

  it('広告バナー取得要求の期待値 => success: true', function() {

    expect(function(done) {

      commonService.fetchAdvertisement()
        .subscribe((response) => {
          expect(response.json()).toEqual({ success: true });
          done();
        });
    });
  });

  it('タグ一覧取得要求の期待値 => success: true', function() {

    expect(function(done) {

      commonService.fetchTags()
        .subscribe((response) => {
          expect(response.json()).toEqual({ success: true });
          done();
        });
    });
  });
});
