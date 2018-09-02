import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ShopsService } from '../../shops.service';
@Component({
  selector: 'shop-shopdetail',
  templateUrl: './shopdetail.component.html'
})
export class ShopDetailComponent implements OnInit {

  private shopName;

  constructor(private route: ActivatedRoute,private shopService:ShopsService) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
  

      debugger
     this.shopName = this.shopService.getShop(params.id);

     console.log(this.shopName)

     
    });
  }



}
