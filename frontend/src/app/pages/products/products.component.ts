import { Component, OnInit } from '@angular/core';
import { DropdownOptionsModel } from '@app/shared/models/dropdown/dropdown.model';

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
  constructor() {}

  ngOnInit(): void {}

  public onFilter(event: any) {
    console.log('OnFilter:', event);
  }
}
