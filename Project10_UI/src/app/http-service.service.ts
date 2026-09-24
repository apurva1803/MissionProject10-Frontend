import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpClient: HttpClient, private router: Router) {

  }

  post(endpoint: any, bean: any, callback: any) {
    return this.httpClient.post(endpoint, bean, {withCredentials : true}).subscribe((data) => {
      callback(data);
    }, (error) => {
      this.handleError(error);
    });
  }

  get(endpoint: any, callback: any) {
    return this.httpClient.get(endpoint, {withCredentials : true}).subscribe((data) => {
      callback(data);
    }, (error) => {
      this.handleError(error);
    });
  }

   getReport(url: string, token: string) {
    this.httpClient
      .get(url, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
        responseType: 'blob',
      })
      .subscribe((res: any) => {
        const file = new Blob([res], { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      }, (error) => {
        this.handleError(error);
      });
  }

  private handleError(error: any, callback?: any) {

    let message = '';

    if (error.status === 0) {

      message = 'Backend server is down';

    } else if (error.status === 503) {

      message = error.error?.result?.message || 'Database server down!!';

    } else if (error.status === 500) {

      message = 'Internal server error';

    } else if (error.status === 401) {
      
      localStorage.clear();

      this.router.navigate(['/login'], {
        queryParams: { errorMessage: error.error.error }
      });
      return;
    }

    const currentRoute = this.router.url.split('?')[0];

    this.router.navigate([currentRoute], {
      queryParams: {
        errorMessage: message
      }
    });

    if (callback) {
      callback({
        success: false,
        result: { message }
      });
    }
  }

}
