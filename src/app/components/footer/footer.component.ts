import { Component } from '@angular/core';

@Component({
  selector: 'page-footer',
  template: `
  <div *ngIf="loginFlag">
      <nav class="footerNav pcNone">
          <ul class="cf">
              <li class="mailIcon select">
                  <a [routerLink]="['/concert']">
                      INFORMATION
                  </a>
              </li>
              <li class="addressIcon">
                  <a [routerLink]="['/special']">
                      SPECIAL TOPIC
                  </a>
              </li>
          </ul>
      </nav>
  </div>
  `
})

/**
 * @class - Footer class
 */
export class FooterComponent {}
