import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonRegisterComponent } from './common-register.component';

describe('CommonRegisterComponent', () => {
  let component: CommonRegisterComponent;
  let fixture: ComponentFixture<CommonRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
