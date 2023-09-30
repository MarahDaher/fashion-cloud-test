import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { ProductCardComponent } from './product-card.component';
import { ProductCategoryEnum } from '@app/shared/models/category/category.enum';
import { IProduct } from '@app/shared/models/products/products.model';

// Mock the Input decorator
@Component({
  selector: 'app-test-host',
  template: '<app-product-card [product]="product"></app-product-card>',
})
class TestHostComponent {
  @Input() product!: IProduct;
}

describe('ProductCardComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let testHost: TestHostComponent;
  let productCard: ProductCardComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardComponent, TestHostComponent],
    });

    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    productCard = fixture.debugElement.children[0].componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(productCard).toBeTruthy();
  });

  it('should return correct chip class for Jacket category', () => {
    const jacketCategory = ProductCategoryEnum.Jacket;
    const chipClass = productCard.getChipClass(jacketCategory);
    expect(chipClass).toBe('jacket-chip');
  });

  it('should return correct chip class for Shirt category', () => {
    const shirtCategory = ProductCategoryEnum.Shirt;
    const chipClass = productCard.getChipClass(shirtCategory);
    expect(chipClass).toBe('shirt-chip');
  });

  it('should return correct chip class for Pant category', () => {
    const pantCategory = ProductCategoryEnum.Pant;
    const chipClass = productCard.getChipClass(pantCategory);
    expect(chipClass).toBe('pants-chip');
  });

  it('should return an empty string for an unknown category', () => {
    const unknownCategory = 'UnknownCategory';
    const chipClass = productCard.getChipClass(unknownCategory);
    expect(chipClass).toBe('');
  });
});
