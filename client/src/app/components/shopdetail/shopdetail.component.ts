import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ShopsService } from '../../shops.service';
@Component({
  selector: 'shop-shopdetail',
  templateUrl: './shopdetail.component.html'
})
export class ShopDetailComponent implements OnInit {

  private shop;

  constructor(private route: ActivatedRoute, private shopService: ShopsService) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.shop= this.shopService.getShop(Number(params.id))[0];
      console.log(this.shop)
    });
  }



}
