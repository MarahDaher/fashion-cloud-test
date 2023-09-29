import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@app/services/products/products.service';
import { DropdownOptionsModel } from '@app/shared/models/dropdown/dropdown.model';
import {
  IProduct,
  IProductFilter,
} from '@app/shared/models/products/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less'],
})
export class ProductsComponent implements OnInit {
  // I prefer to get these two values for an api and the selectedValue is by id
  // especially, in case we want to add a new brand or category
  public brandlist: DropdownOptionsModel[] = [
    {
      id: '1',
      value: 'Nova',
      name: 'Nova',
    },
    {
      id: '2',
      value: 'Aurora',
      name: 'Aurora',
    },
  ];

  public categorylist: DropdownOptionsModel[] = [
    {
      id: '1',
      value: 'jacket',
      name: 'Jacket',
    },
    {
      id: '2',
      value: 'pant',
      name: 'Pant',
    },
    {
      id: '3',
      value: 'shirt',
      name: 'Shirt',
    },
  ];

  public productList: IProduct[] = [];

  constructor(private productSrv: ProductsService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  public onFilter(value: any, type?: string) {
    const queryParams: IProductFilter = {};
    switch (type) {
      case 'brandName':
        queryParams.brandName = value;
        break;
      case 'category':
        queryParams.category = value;
        break;
      default:
        break;
    }
    this.getAllProducts(queryParams);
  }

  private getAllProducts(productFilter?: IProductFilter) {
    this.productSrv.getAllProducts(productFilter).subscribe({
      next: (res) => {
        this.productList = res.data;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      },
    });
  }
}
