import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IProductFilter,
  IProduct,
} from '@app/shared/models/products/products.model';
import { IResponse } from '@app/shared/models/response';
import { ApiService } from '@services/api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private api: ApiService) {}

  public getAllProducts(
    productFilter?: IProductFilter
  ): Observable<IResponse<IProduct[]>> {
    let httpParams = new HttpParams();
    if (productFilter) {
      for (const [key, value] of Object.entries(productFilter)) {
        if (value !== undefined && value !== null) {
          httpParams = httpParams.set(key, value.toString());
        }
      }
    }
    return this.api.get<IResponse<IProduct[]>>('products', {
      params: httpParams,
    });
  }
}
