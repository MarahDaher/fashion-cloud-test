import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from './dropdown.component';
import { DropdownOptionsModel } from '@app/shared/models/dropdown/dropdown.model';
import { FilterTypeEnum } from '@app/shared/models/products/products.model';

// Mock the FormControl and EventEmitter
@Component({
  selector: 'app-test-host',
  template: `
    <app-dropdown
      [dropdownOptions]="priceList"
      [placeholder]="'Sort by price'"
      (optionSelected)="onFilter($event, FilterType.Price)"
      (clearSelected)="onClearFilter()"
    ></app-dropdown>
  `,
})
class TestHostComponent {
  priceList: DropdownOptionsModel[] = [
    {
      id: '1',
      value: 'price',
      name: 'Ascending',
    },
    {
      id: '2',
      value: '-price',
      name: 'Descending',
    },
  ];

  selectedFilter: string | null = null;

  onFilter(selectedValue: string, filterType: FilterTypeEnum) {
    // Handle the optionSelected event, e.g., store the selected filter
    this.selectedFilter = selectedValue;
  }

  onClearFilter() {
    // Handle the clearSelected event, e.g., reset the selected filter
    this.selectedFilter = null;
  }
}

describe('DropdownComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let testHost: TestHostComponent;
  let dropdownComponent: DropdownComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownComponent, TestHostComponent],
      imports: [ReactiveFormsModule],
    });

    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    dropdownComponent = fixture.debugElement.children[0].componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(dropdownComponent).toBeTruthy();
  });

  it('should emit selected option', () => {
    const option: DropdownOptionsModel = {
      id: '1',
      value: 'price',
      name: 'Ascending',
    };

    dropdownComponent.onChangeValue(option.value);
    expect(testHost.selectedFilter).toBeDefined();
    if (testHost.selectedFilter) {
      expect(testHost.selectedFilter).toBe(option.value);
    }
  });

  it('should emit clearSelected event', () => {
    dropdownComponent.onClearValue();
    expect(testHost.selectedFilter).toBeNull();
  });
});
