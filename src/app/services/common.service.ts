import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { ApiBaseModule } from '../api-base.module';
import { Store } from '@ngrx/store';
import { AppStoreNotices, AppStoreFunnyGuy } from '../app.store';

/**
 * @interface - Banners path
 */
export interface BannersResponseInterface {

  /** @param {string} - Banner ID */
  bannerId: string;

  /** @param {string} - Banner path */
  path: string;
}

/**
 * @interface - Members information
 */
export interface MembersResponseInterface {

  /** @type {string} - Member ID */
  memberId: string;

  /** @type {string} - Member name */
  name: string;
}

@Injectable()

/**
 * @class - Sync funny guy list and banners path
 */
export class CommonService {

  /** @type {Observable} - Sync banners path */
  public bannersInfo: Observable<Array<BannersResponseInterface>>;

  /** @type {Observable} - Sync members list */
  public funnyGuyInfo: Observable<Array<MembersResponseInterface>>;

  /** @type {string} - Request URL to request banners path */
  private baseUrlFetchBanners = `${this.API_BASE.API_HOST}/mock-data/banners.json`;

  /** @type {string} - Request URL to request members list */
  private baseUrlFetchTags = `${this.API_BASE.API_HOST}/mock-data/funnyGuyList.json`;

  /**
   * @constructor
   * @param API_BASE
   * @param http
   * @param bannersStore
   * @param funnyGuyStore
   */
  constructor(public API_BASE: ApiBaseModule,
              private http: Http,
              private bannersStore: Store<AppStoreBanners>,
              private funnyGuyStore: Store<AppStoreFunnyGuy>) {

    // Sync each information
    this.bannersInfo = bannersStore.select( bannersStore => bannersStore.bannersInfo );
    this.funnyGuyInfo = funnyGuyStore.select( funnyGuyStore => funnyGuyStore.funnyGuyInfo );
  }

  /**
   * @method - Request banners path
   */
  public fetchBanners = (): Observable<Response> => {

    return this.http.get(this.baseUrlFetchBanners)
      .map((res: Response) => {
        let body = res.json();
        return body.data.banners || {};
      })
      .map((payload: BannersResponseInterface[]) => {
        return { type: 'GET_BANNERS', payload };
      })
      .subscribe((action) => {
        this.bannersStore.dispatch(action);
      });
  };

  /**
   * @method - Request funny guy list
   */
  public fetchFunnyGuyList = (): Observable<Response> => {

    return this.http.get(this.baseUrlFetchTags)
      .map((res: Response) => {
        let body = res.json();
        return body.data.members || {};
      })
      .map((payload: MembersResponseInterface[]) => {
        return { type: 'GET_FUNNY_GUY', payload };
      })
      .subscribe((action) => {
        this.funnyGuyStore.dispatch(action);
      });
  };
}
