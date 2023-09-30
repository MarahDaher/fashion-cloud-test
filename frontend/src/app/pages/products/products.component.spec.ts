import { IResponse } from '@app/shared/models/response';
import { LoadingService } from '@app/services/loading.service';
import { of } from 'rxjs';
import { productMock } from '@app/services/mock-data/product-mock';
import { ProductsComponent } from './products.component';
import { ProductsService } from '@app/services/products/products.service';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
  tick,
} from '@angular/core/testing';

import {
  FilterTypeEnum,
  IProduct,
} from '@app/shared/models/products/products.model';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let productsService: ProductsService;
  let loadingService: LoadingService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [HttpClientTestingModule],
      providers: [ProductsService, LoadingService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    productsService = TestBed.inject(ProductsService);
    loadingService = TestBed.inject(LoadingService);
    fixture.detectChanges();
  });

  it('should fetch products on initialization', fakeAsync(() => {
    let mockProducts: IProduct[] = productMock;

    const mockResponse: IResponse<IProduct[]> = {
      status: 'success',
      data: mockProducts,
    };

    spyOn(loadingService, 'show');
    spyOn(productsService, 'getAllProducts').and.returnValue(of(mockResponse));

    component.ngOnInit();
    tick();

    const req = httpMock.expectOne('http://localhost:8000/api/products'); // expect one request to this URL
    expect(req.request.method).toEqual('GET'); // check if it's a GET request
    req.flush(mockResponse); // respond with mockResponse

    expect(loadingService.show).toHaveBeenCalled();
    expect(productsService.getAllProducts).toHaveBeenCalled();
    expect(component.productList).toEqual(mockProducts);
    flush();
  }));

  it('should apply filters and fetch products', fakeAsync(() => {
    let mockProducts: IProduct[] = productMock;

    const mockFilteredProducts = mockProducts.filter(
      (product) => product.category === 'jacket'
    );

    const mockResponse: IResponse<IProduct[]> = {
      status: 'success',
      data: mockFilteredProducts,
    };

    spyOn(loadingService, 'show');
    spyOn(productsService, 'getAllProducts').and.returnValue(of(mockResponse));

    component.onFilter('jacket', FilterTypeEnum.Category);
    tick();

    const req = httpMock.expectOne('http://localhost:8000/api/products'); // expect one request to this URL
    expect(req.request.method).toEqual('GET'); // check if it's a GET request
    req.flush(mockResponse); // respond with mockResponse

    expect(loadingService.show).toHaveBeenCalled();
    expect(productsService.getAllProducts).toHaveBeenCalled();
    expect(component.productList).toEqual(mockFilteredProducts);
    flush();
  }));

  afterEach(() => {
    httpMock.verify(); // Verify that there are no outstanding requests
  });
});
