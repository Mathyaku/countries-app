import { Injectable } from '@angular/core';

@Injectable()
export class ErrorHandlerService {

  constructor() { }

  handle(response) {
    let err = response;
    if (response.status === 0 || response.status === -1) {
      err = 'It was not possible to access the server!';
    }
    else if (response.status === 400 && response.error.Message) {
      err = response.error.Message;
    }
    else if (response.status === 401) {
      err = 'You don\'t have permissions for that operation! Please check with the system manager.';
    }
    else if (response.status === 403) {
      err = 'You don\'t have permissions for that operation! Please check with the system manager.';
    }
    else if (response.status === 503) {
      err = 'The Service is unavailable!';
    }
    else if (response.status === 500) {
      if (response.error) {
        if (response.error.ExceptionMessage) {
          if (response.error.InnerException) {
            response.error = response.error.InnerException;
            return this.handle(response);
          }
          else {
            err = response.error.ExceptionMessage;
          }
        }
      }
      else {
        err = 'Internal Server Error!';
      }
    }
    else if (typeof response === 'string' || response instanceof String) { // custom erros from server
      // if (response === 'Authentication Errors.') {
      //   err = response;
      // }

      err = response;
    }
    else if (Array.isArray(response)) {
      response.forEach(function (err) {
        return err;
      })

      return response;
    }
    else if (!response.error) {
      if (response.ExceptionMessage) {
        err = response.ExceptionMessage;
      }
      else if (response.message) {
        err = response.message;
      }
    }
    else if (response.error.ExceptionMessage) {
      if (response.error.InnerException) {
        response.error = response.error.InnerException;
        return this.handle(response);
      }
      else {
        err = response.error.ExceptionMessage;
      }
    }
    else if (response.error.Message) {
      err = response.error.Message;
    }
    else {
      err = 'Unknown Error!';
    }

    return err;
  }
}
