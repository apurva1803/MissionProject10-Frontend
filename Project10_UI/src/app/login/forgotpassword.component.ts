import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html'
})
export class ForgotpasswordComponent {

  endpoint = "http://localhost:8888/Auth/forgetPassword";

  form: any = {
    error: false,
    message: '',
    data: { id: null },
    inputerror: {},
  };

  constructor(private httpService: HttpServiceService, private router: Router) {
  }

  submit() {
    var _self = this;
    this.httpService.post(this.endpoint, this.form.data, function (res: any) {

      _self.form.message = '';
      _self.form.inputerror = {};
      _self.form.error = !res.success;

      if (res.success) {
        _self.form.message = 'Password sent to your email';
      } else if (res.result?.inputerror) {
        _self.form.inputerror = res.result.inputerror;
      } else if (res.message) {
        _self.form.message = res.message;
      } else {
        _self.form.message = 'Unable to send reset link. Please try again.';
      }
    });
  }

}