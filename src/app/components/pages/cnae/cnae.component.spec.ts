import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnaeComponent } from './cnae.component';

describe('CnaeComponent', () => {
  let component: CnaeComponent;
  let fixture: ComponentFixture<CnaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CnaeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CnaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
