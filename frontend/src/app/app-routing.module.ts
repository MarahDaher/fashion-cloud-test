import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleResolver } from './shared/resolver/title.resolver';

const routes: Routes = [
  {
    path: '',
    title: TitleResolver,
    data: {
      title: 'Products',
    },
    loadChildren: () =>
      import('./pages/products/products.module').then((m) => m.ProductsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
