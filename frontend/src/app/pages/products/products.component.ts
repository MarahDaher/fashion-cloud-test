import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@app/services/products/products.service';
import { DropdownOptionsModel } from '@app/shared/models/dropdown/dropdown.model';
import {
  IProduct,
  IProductFilter,
} from '@app/shared/models/products/products.model';

enum FilterType {
  BrandName = 'brandName',
  Category = 'category',
  Price = 'price',
}

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

  public priceList: DropdownOptionsModel[] = [
    {
      id: '1',
      value: 'asc',
      name: 'Ascending',
    },
    {
      id: '2',
      value: 'desc',
      name: 'Descending',
    },
  ];

  public productList: IProduct[] = [];
  public FilterType = FilterType;
  constructor(private productSrv: ProductsService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  // Private method to fetch products based on filter criteria.
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

  // Public method to apply filters based on filter type and value.
  public onFilter(value: any, type?: FilterType) {
    let queryParams: IProductFilter = {};
    switch (type) {
      case FilterType.BrandName:
        queryParams.brandName = value;
        break;
      case FilterType.Category:
        queryParams.category = value;
        break;
      case FilterType.Price:
        queryParams.sort = this.getSortQuery(value);
        break;
      default:
        // Clear all filters if the filter type is not recognized.
        queryParams = {};
        break;
    }
    // Fetch products with the applied filter.
    this.getAllProducts(queryParams);
  }

  // Private method to generate a sorting query.
  private getSortQuery(value: string): string {
    const sortField: string = 'price';
    const sortOrder: string = value === 'desc' ? '-' : '';
    return sortOrder + sortField;
  }
  // Public method to clear all filters and fetch all products.
  public onClearFilter() {
    this.getAllProducts();
  }
}
