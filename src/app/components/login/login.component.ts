import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { IResponseSessionInformation, AuthService } from '../../services/auth.service';
import { CommonService, MembersResponseInterface } from '../../services/common.service';

@Component({
  selector: 'login',
  templateUrl: '../../templates/login/login.html'
})

/**
 * @class - Session class
 */
export class LoginComponent {

  /** @type {Observable} - Sync user information */
  public userInfo: Observable<Array<IResponseSessionInformation>>;

  /** @type {Observable} - Sync funny guy list */
  public funnyGuyInfo: Observable<Array<MembersResponseInterface>>;

  /** @type {FormGroup} - FormControl instance group  */
  private form: FormGroup;

  /** @type {AbstractControl} - Email */
  private email: AbstractControl;

  /** @type {AbstractControl} - Password */
  private password: AbstractControl;

  /** @type {Object} - Validation error message */
  private model = {
    errorEmail: '',
    errorPassword: ''
  };

  /** @type {boolean} - Flag to switch loading display */
  private submitted = false;

  /**
   * @constructor
   * @param router
   * @param authService
   * @param commonService
   * @param fb
   */
  constructor(public router: Router,
              public authService: AuthService,
              public commonService: CommonService,
              private fb: FormBuilder) {

    // Preparation to sync stored information
    this.userInfo = this.authService.userInfo;
    this.funnyGuyInfo = this.commonService.funnyGuyInfo;

    this.form = fb.group({

      // ID validation (within 278 characters)
      'email': ['', Validators.compose([Validators.required, Validators.maxLength(278)])],
      // Password validation (within 6 characters)
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];

    // Initializing process
    this.init();
  }

  /**
   * @method - Initializing process
   */
  private init() {

    // Sync each information
    this.commonService.fetchBanners();
    this.commonService.fetchFunnyGuyList();
  }

  /**
   * @method - Login
   */
  private onSubmit() {

    // Initializes variable to display error message when input form was filled out
    if (this.email.dirty || this.password.dirty) {

      this.model.errorEmail = '';
      this.model.errorPassword = '';
    }

    if (!this.form.valid) {

      // ID validation (Not input)
      if (this.form.value.email === '') {
        this.model.errorEmail = 'Please input ID.';
      }

      // Password validation (Not input)
      if (this.form.value.password === '') {
        this.model.errorPassword = 'Please input password.';
      }

      // ID validation (Number of characters)
      if (this.form.value.email.length > 278) {
        this.model.errorPassword = 'Please input ID, not more than 278 characters.';
      }

      // Password validation (Number of characters)
      if (this.password.dirty && this.form.value.password.length < 6) {
        this.model.errorPassword = 'Please input password, more than 6 characters.';
      }
    } else {

      // Asks login process
      this.authService.sendSessionInfo(this.form.value);

      // Displays concert name and funny guy list
      this.displayCommonInformations();

      // Shifts to top page
      this.router.navigate(['/concert']);
    }
  }

  /**
   * @method - Retrieves funny guy list
   */
  private displayCommonInformations() {

    // Sync funny guy list
    this.commonService.fetchFunnyGuyList();
  }
}
