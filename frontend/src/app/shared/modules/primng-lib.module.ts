import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { CommonModule } from '@angular/common';
import { DialogService } from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { NgModule } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

//Primng Modules
const PRIMNG_COMP = [
  ButtonModule,
  MessageModule,
  DropdownModule,
  CardModule,
  ChipModule,
  ProgressSpinnerModule,
];

@NgModule({
  imports: [CommonModule, PRIMNG_COMP],
  declarations: [],
  exports: [PRIMNG_COMP],
  providers: [DialogService, MessageService],
})
export class PrimngLibModule {}
