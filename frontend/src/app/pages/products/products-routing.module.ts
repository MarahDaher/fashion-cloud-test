import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { TitleResolver } from '@app/shared/resolver/title.resolver';

const routes: Routes = [
  {
    path: '',
    title: TitleResolver,
    data: {
      title: 'Products',
    },
    component: ProductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
