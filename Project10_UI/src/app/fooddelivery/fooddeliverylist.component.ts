import { Component } from '@angular/core';
import { BaseListCtl } from '../baselist.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fooddeliverylist',
  templateUrl: './fooddeliverylist.component.html',
  styleUrls: ['./fooddeliverylist.component.css']
})
export class FooddeliverylistComponent extends BaseListCtl {
  
  constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
      super(locator.endpoints.FOODDELIVERY, locator, route);
    }
}
