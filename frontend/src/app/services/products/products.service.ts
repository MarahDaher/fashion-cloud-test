import { Injectable } from '@angular/core';
import { ApiService } from '@services/api/api.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private api: ApiService) {}
}
