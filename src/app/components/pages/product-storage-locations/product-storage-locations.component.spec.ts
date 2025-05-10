import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStorageLocationsComponent } from './product-storage-locations.component';

describe('ProductStorageLocationsComponent', () => {
  let component: ProductStorageLocationsComponent;
  let fixture: ComponentFixture<ProductStorageLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductStorageLocationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductStorageLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
