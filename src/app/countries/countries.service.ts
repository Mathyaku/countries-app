import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ErrorHandlerService } from '../common/services/errorHandler.service';
import { NotificationService } from '../common/services/notification.service';

@Injectable()
export class CountriesService {

  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlerService,
    private notificationService: NotificationService
  ) {}

  getCountries(){
    return this.http.get('https://restcountries.eu/rest/v2/all', {})
      .toPromise()
      .then(
        (countries) => {
        this.notificationService.notifyMessage('success', "The countries were found!");
          return <[]>countries;
        }
      )
      .catch(res => {
        this.notificationService.notifyMessage('error', this.errorHandler.handle(res));
        return [];
      });
  }

}
