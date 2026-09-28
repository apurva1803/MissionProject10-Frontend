import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-onlinevoting',
  templateUrl: './onlinevoting.component.html',
  styleUrls: ['./onlinevoting.component.css']
})
export class OnlinevotingComponent extends BaseCtl{
  constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
      super(locator.endpoints.ONLINE_VOTING, locator, route);
    }
}
