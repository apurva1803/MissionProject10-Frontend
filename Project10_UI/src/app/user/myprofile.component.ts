import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html'
})
export class MyprofileComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.USER, locator, route);
  }

  myProfile() {
    this.submit();
  }

}