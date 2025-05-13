import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGroupSubgroupComponent } from './product-group-subgroup.component';

describe('ProductGroupSubgroupComponent', () => {
  let component: ProductGroupSubgroupComponent;
  let fixture: ComponentFixture<ProductGroupSubgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductGroupSubgroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductGroupSubgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
