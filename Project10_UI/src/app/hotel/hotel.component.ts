import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent extends BaseCtl{

  constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.HOTEL, locator, route);
  }
}
