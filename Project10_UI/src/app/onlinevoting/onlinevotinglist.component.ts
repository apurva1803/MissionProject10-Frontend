import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../baselist.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-onlinevotinglist',
  templateUrl: './onlinevotinglist.component.html',
  styleUrls: ['./onlinevotinglist.component.css']
})
export class OnlinevotinglistComponent extends BaseListCtl {

  constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.ONLINE_VOTING, locator, route);
  }

}
