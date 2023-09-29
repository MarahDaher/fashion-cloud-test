import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DropdownOptionsModel } from '@app/shared/models/dropdown/dropdown.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.less'],
})
export class DropdownComponent implements OnInit {
  // Inputs
  @Input() dropdownOptions!: DropdownOptionsModel[];
  @Input() placeholder!: string;

  // Output
  @Output() optionSelected: EventEmitter<any> = new EventEmitter<any>();
  @Output() clearSelected: EventEmitter<any> = new EventEmitter<any>();

  // Variables
  public selectedOption: any = '';
  public dropdownFormControl: FormControl = new FormControl();

  constructor() {}

  ngOnInit(): void {}

  public onChangeValue(value: any) {
    this.optionSelected.emit(value);
  }

  public onClearValue() {
    this.clearSelected.emit();
  }
}
