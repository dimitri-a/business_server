import { Injectable } from '@angular/core';
import { Observable, of, throwError as observableThrowError } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import {Shop} from './shop';


@Injectable({
  providedIn: 'root'
})
export class ShopsService {

  private MockedElementData = [{id:1,name:'Campos',link:'/detail'},{id:2,name: 'Snackbar tiggelen',link:'/'}]

  constructor() { }


  getShops(): Observable<Shop[]> {
    let names: Shop[] = this.MockedElementData;
    return Observable.create(observer => {
      observer.next(names);
      observer.complete();
    });
  }

  getShop(id:number):any{
    let result = this.MockedElementData.filter(shop=>{
      return shop.id === id;
    });
    return result;
  }




}
