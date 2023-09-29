import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@app/services/products/products.service';
import { DropdownOptionsModel } from '@app/shared/models/dropdown/dropdown.model';
import { IProduct } from '@app/shared/models/products/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less'],
})
export class ProductsComponent implements OnInit {
  public brandlist: DropdownOptionsModel[] = [
    {
      id: '1',
      name: 'Nike',
    },
  ];

  public productList: IProduct[] = [];
  constructor(private productSrv: ProductsService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  public onFilter(event: any) {
    console.log('OnFilter:', event);
  }

  private getAllProducts() {
    this.productSrv.getAllProducts().subscribe({
      next: (res) => {
        this.productList = res.data;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      },
    });
  }
}
