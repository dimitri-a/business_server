import { Component } from '@angular/core';
import { ShopsService } from './shops.service';
import {Shop} from './shop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
 
  shops: Shop[] = null;

  constructor(private shopService: ShopsService) {
  }

  ngOnInit() {
    debugger;
    this.shopService.getShops().subscribe((shops) => {
      this.shops = shops;
    });
  }
}


