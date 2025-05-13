import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostProfitCenterComponent } from './cost-profit-center.component';

describe('CostProfitCenterComponent', () => {
  let component: CostProfitCenterComponent;
  let fixture: ComponentFixture<CostProfitCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostProfitCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostProfitCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
