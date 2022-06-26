import { CatalogueService } from './../catalogue.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any;

  constructor(
    public catService: CatalogueService,
    private route:ActivatedRoute
    ) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id'])
    this.getProducts();
  }
  getProducts() {
    this.catService.getResourse('/products/search/selectedProducts').subscribe(
      (data) => {
        this.products = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
