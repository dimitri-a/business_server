import { Component } from '@angular/core';
import { ShopsService } from './shops.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
 
  shops: string[] = null;

  constructor(private shopService: ShopsService) {
  }

  ngOnInit() {
    debugger;
    this.shopService.getShops().subscribe((shops) => {
      this.shops = shops;
    });
  }
}


