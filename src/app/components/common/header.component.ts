import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { IResponseSessionInformation, AuthService } from '../../services/auth.service';

@Component({
  selector: 'common-header',
  templateUrl: '../../templates/common/header.html'
})

/**
 * @class - Common header
 */
export class HeaderComponent {

  /** @type {Observable} - Sync user information */
  public userInfo: Observable<Array<IResponseSessionInformation>>;

  /** @type {Subscription} - Instance of subscription to sync user information */
  private subscription: Subscription;

  /**
   * @constructor
   * @param authService
   * @param router
   */
  constructor(private authService: AuthService,
              private router: Router) {

    // Initializing process
    this.init();
  }

  /**
   * @method - Initializing process
   */
  private init() {

    // Sync user information
    this.userInfo = this.authService.userInfo;
    this.subscription = this.authService.userInfo.subscribe();
  }

  /**
   * @method - Logout
   */
  private doLogout(){

    // Unsubscribes user information
    this.subscription.unsubscribe();

    // Shifts to login page
    this.router.navigate(['/']);
  }
}
