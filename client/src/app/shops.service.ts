import { Injectable } from '@angular/core';
import { Observable, of, throwError as observableThrowError } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ShopsService {

  private MockedElementData = ['Campos', 'Snackbar tiggelen']

  constructor() { }


  getShops(): Observable<string[]> {
    let names: string[] = this.MockedElementData;
    return Observable.create(observer => {
      observer.next(names);
      observer.complete();
    });
  }




}
