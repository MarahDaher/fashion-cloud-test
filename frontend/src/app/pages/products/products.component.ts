import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadingService } from '@app/services/loading.service';
import { ProductsService } from '@app/services/products/products.service';
import { DropdownOptionsModel } from '@app/shared/models/dropdown/dropdown.model';
import {
  FilterTypeEnum,
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

  public priceList: DropdownOptionsModel[] = [
    {
      id: '1',
      value: 'price',
      name: 'Ascending',
    },
    {
      id: '2',
      value: '-price',
      name: 'Descending',
    },
  ];

  public productList: IProduct[] = [];
  public filterParams!: IProductFilter;

  //Filter options
  public FilterType = FilterTypeEnum;
  private brandName: string | undefined;
  private category: string | undefined;
  private sort: string | undefined;

  constructor(
    private productSrv: ProductsService,
    private loader: LoadingService
  ) {}

  ngOnInit(): void {
    this.loader.show();
    this.getAllProducts();
  }

  private getAllProducts() {
    const productFilter = this.getCurrentFilterParams();
    this.productSrv.getAllProducts(productFilter).subscribe({
      next: (res) => {
        this.productList = res.data;
        this.loader.hide();
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
        this.loader.hide();
      },
    });
  }

  // Public method to apply filters based on filter type and value.
  public onFilter(value: any, type?: FilterTypeEnum) {
    this.loader.show();
    switch (type) {
      case FilterTypeEnum.BrandName:
        this.brandName = value;
        break;
      case FilterTypeEnum.Category:
        this.category = value;
        break;
      case FilterTypeEnum.Price:
        this.sort = value;
        break;
      default:
        // Clear all filters if the filter type is not recognized.
        this.onClearFilter();
        break;
    }
    // Fetch products with the applied filter.
    this.getAllProducts();
  }

  private onClearFilter() {
    this.brandName = undefined;
    this.category = undefined;
    this.sort = undefined;
    this.getAllProducts();
  }

  private getCurrentFilterParams(): IProductFilter {
    const queryParams: IProductFilter = {};
    if (this.brandName) {
      queryParams.brandName = this.brandName;
    }
    if (this.category) {
      queryParams.category = this.category;
    }
    if (this.sort) {
      queryParams.sort = this.sort;
    }
    return queryParams;
  }
}
