import { Component, OnInit } from '@angular/core';
import { ProductDatService } from '../product-dat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Observable<any>;
  constructor(private productDataService: ProductDatService) {}

  ngOnInit(): void {
    this.products = this.productDataService.getAllProducts();
  }
}
