import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from '../components/common/http.service';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { AppStore } from '../app.store';

/**
 * @interface - Required user information (login)
 */
export interface IRequestSessionInformation {

  /** @param {string} - User's email */
  email: string;

  /** @param {string} - Login password */
  password: string;
}

@Injectable()

export class AuthService {

  /** @type {Observable} - ユーザー情報同期 */
  public userInfo: Observable<Array<IResponseSessionInformation>>;

  /** @type {string} - Fake API */
  private baseUrl = 'http://127.0.0.1:2050/data';

	/** フィールド宣言 */
  constructor(private http: HttpService,
              private store: Store<AppStore>) {

    // this.userInfo = store.select( store => store.userInfo );
    // ユーザー情報の同期を実施
    this.userInfo = store.select( store => store.userInfo );
  }

  /**
   * @method - ログイン処理
   */
  public sendSessionInfo = (value: IRequestSessionInformation): Observable<Response> => {

    let body = JSON.stringify({
      email: value.email,
      password: value.password
    });

    return this.http.get(this.baseUrl)
      .map((res: Response) => {
        let body = res.json();
        return body.users || {};
      })
      .map((payload: IResponseSessionInformation[]) => {
        return { type: 'LOGIN', payload };
      })
      .subscribe((action) => {
        this.store.dispatch(action);
      });
  };
}
