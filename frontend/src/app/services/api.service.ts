import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private router: Router,
    private httpClient: HttpClient
    ) { }

  get(path, params = {}) {
    return this.httpClient
      .get(this.apiUrl(path), this.getOptions(params))
      .toPromise()
      .then(response => this.successResponse(response))
      .catch(response => this.errorResponse(response));
  }

  post(path, params = {}) {
    return this.httpClient
      .post(this.apiUrl(path), params, this.getOptions())
      .toPromise()
      .then(response => this.successResponse(response))
      .catch(response => this.errorResponse(response));
  }

  patch(path, params = {}) {
    return this.httpClient
      .patch(this.apiUrl(path), params, this.getOptions())
      .toPromise()
      .then(response => this.successResponse(response))
      .catch(response => this.errorResponse(response));
  }

  delete(path, params = {}) {
    return this.httpClient
      .delete(this.apiUrl(path), this.getOptions({}, params))
      .toPromise()
      .then(response => this.successResponse(response))
      .catch(response => this.errorResponse(response));
  }

  upload(path, data) {
    let options = this.getOptions();
    options = { ...options, headers: options.headers.delete('Content-Type') };

    return this.httpClient
      .post(this.apiUrl(path), data, options)
      .toPromise()
      .then(response => this.successResponse(response))
      .catch(response => this.errorResponse(response));
  }

  apiUrl(path) {
    const url = [environment.apiUrl];

    return [...url, path]
      .filter(item => !!item)
      .map(item => item.replace(/^\//, ''))
      .map(item => item.replace(/\/$/, ''))
      .filter(item => !!item)
      .join('/');
  }

  private getOptions(params = {}, body = {}) {
    let headers: any = {'Content-Type': 'application/json'};

    return {
      headers: new HttpHeaders(headers),
      params,
      body,
    };
  }

  private successResponse(response) {
    return response;
  }

  private errorResponse(response) {

    switch (response.status) {
      case 401: {
        localStorage.clear();
        this.router.navigate(['/entrar']);
        break;
      }
      case 403: {
        this.router.navigate(['/403']);
        break;
      }
      case 404: {
        this.router.navigate(['/404']);
        break;
      }
      case 412: {
        this.router.navigate(['/412']);
        break;
      }
      case 422: {
        throw response.error;
      }
      case 428: {
        this.router.navigate(['/428']);
        break;
      }
      default: {
        this.router.navigate(['/500']);
        break;
      }
    }
  }
}
