import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { PrimngLibModule } from './modules/primng-lib.module';

const shared_Modules: any[] | Type<any> = [PrimngLibModule];

const shared_component: any[] | Type<any> = [];
@NgModule({
  imports: [CommonModule, shared_Modules],
  exports: [shared_Modules, shared_component],
  declarations: [shared_component],
})
export class SharedModule {}
