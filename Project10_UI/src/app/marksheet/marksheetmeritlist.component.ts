import { BaseCtl } from '../base.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';
import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-marksheetmeritlist',
  templateUrl: './marksheetmeritlist.component.html',
  styleUrls: ['./marksheetmeritlist.component.css']
})

export class MarksheetmeritlistComponent extends BaseCtl {


  constructor(public locator: ServiceLocatorService, route: ActivatedRoute, private httpservice: HttpServiceService) {
    super(locator.endpoints.MARKSHEET, locator, route);

  }
  override ngOnInit() {
    this.getMeritList();
  }

  getMeritList() {
    this.httpservice.get(
      "http://localhost:8888/Marksheet/meritlist",
      (res: any) => {

        if (res.success) {
          this.form.list = res.result.list;

          if (this.form.list.length == 0) {
            this.form.message = "No record found";
            this.form.error = true;
          }

          console.log("List Size", this.form.list.length);

        } else {
          this.form.error = false;
          this.form.message = res.result.message;
        }

        console.log('FORM', this.form);
      }
    );
  }

  printReport() {
    const token = localStorage.getItem('token');

    if (!token) {
      alert("User not logged in");
      return;
    }

    // Add query parameter for merit list report
    const reportUrl = "http://localhost:8888/jasper/report?reportName=meritlist";
    
    console.log("Print Report - Token:", token ? "Present" : "Missing");
    console.log("Report URL:", reportUrl);

    this.httpservice.getReport(reportUrl, token);
  }

}
