import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentDetailsHeaderComponent } from './investment-details-header.component';

describe('InvestmentDetailsHeaderComponent', () => {
  let component: InvestmentDetailsHeaderComponent;
  let fixture: ComponentFixture<InvestmentDetailsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentDetailsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentDetailsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
