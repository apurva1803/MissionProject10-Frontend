import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  endpoint = "http://localhost:8888/Auth/login";

  form: any = {
    error: false,
    message: '',
    data: { },
    inputerror: {},
    messsage : ""
  };

  constructor(private httpService: HttpServiceService, private router: Router, private activatedRoute : ActivatedRoute) {

    this.activatedRoute.queryParams.subscribe(params => {
      if (params['message']) {
        this.form.message = params['message'];
      }
      if (params['errorMessage']) {
        this.form.message = params['errorMessage'];
        this.form.error = true;
      }
    });
  }

  signIn() {
    var _self = this;
    this.httpService.post(this.endpoint, this.form.data, function (res: any) {

      _self.form.message = '';
      _self.form.inputerror = {};

      _self.form.error = !res.success;
      if (_self.form.error) {
        if (!res.result?.inputerror) {
          _self.form.message = res.result?.message || res.message || 'Invalid login ID or password.';
        }
        if (res.result?.inputerror) {
          _self.form.inputerror = res.result.inputerror;
        }
      }

      if (res.success) {
        localStorage.setItem("loginId", res.result.loginId);
        localStorage.setItem("role", res.result.role);
        localStorage.setItem("fname", res.result.fname);
        localStorage.setItem("lname", res.result.lname);
        localStorage.setItem("userId", res.result.data.id);
        localStorage.setItem("token", 'Bearer ' + res.result.token);

         _self.router.navigateByUrl('dashboard');
      }
    });
  }

  signUp() {
    this.router.navigateByUrl('signup');
  }


}