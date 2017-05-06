import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CommonService, BannersResponseInterface } from '../../services/common.service';

@Component({
  selector: 'special',
  templateUrl: '../../templates/special/special-topic.html'
})

/**
 * @class - Special topic
 */
export class SpecialTopicComponent {

  /** @type {Observable} -  */
  public bannersInfo: Observable<Array<BannersResponseInterface>>;

  /**
   * @constructor
   * @param commonService
   */
  constructor(private commonService: CommonService) {

    //
    this.bannersInfo = this.commonService.bannersInfo;
  }
}
