import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfopComponent } from './cfop.component';

describe('CfopComponent', () => {
  let component: CfopComponent;
  let fixture: ComponentFixture<CfopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CfopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CfopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
