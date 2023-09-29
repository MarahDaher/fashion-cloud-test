import { Component, Input, OnInit } from '@angular/core';
import { ProductCategoryEnum } from '@app/shared/models/category/category.enum';
import { IProduct } from '@app/shared/models/products/products.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: IProduct;
  constructor() {}

  ngOnInit(): void {}

  public getChipClass(category: string): string {
    switch (category) {
      case ProductCategoryEnum.Jacket:
        return 'jacket-chip';
      case ProductCategoryEnum.Shirt:
        return 'shirt-chip';
      case ProductCategoryEnum.Pant:
        return 'pants-chip';
      default:
        return '';
    }
  }
}
