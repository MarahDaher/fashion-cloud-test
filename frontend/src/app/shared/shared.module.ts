import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { PrimngLibModule } from './modules/primng-lib.module';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const shared_Modules: any[] | Type<any> = [
  PrimngLibModule,
  FormsModule,
  ReactiveFormsModule,
];

const shared_component: any[] | Type<any> = [DropdownComponent];
@NgModule({
  imports: [CommonModule, shared_Modules],
  exports: [shared_Modules, shared_component],
  declarations: [shared_component],
})
export class SharedModule {}
