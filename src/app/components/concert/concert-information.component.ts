import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IResponseSessionInformation, AuthService } from '../../services/auth.service';
import { CommonService, MembersResponseInterface } from '../../services/common.service';

@Component({
  selector: 'concert-information',
  templateUrl: '../../templates/concert/concert-information.html'
})

/**
 * @class - Concert information
 */
export class ConcertInformationComponent {

  /** @type {Observable} - Sync user information */
  public userInfo: Observable<Array<IResponseSessionInformation>>;

  /** @type {Observable} -  */
  public funnyGuyInfo: Observable<Array<MembersResponseInterface>>;

  /**
   * @constructor
   * @param authService
   * @param commonService
   */
  constructor(private authService: AuthService,
              private commonService: CommonService) {

    //
    this.userInfo = this.authService.userInfo;
    this.funnyGuyInfo = this.commonService.funnyGuyInfo;
  }
}
