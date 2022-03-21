import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountErrorModalComponent } from './amount-error-modal.component';

describe('AmountErrorModalComponent', () => {
  let component: AmountErrorModalComponent;
  let fixture: ComponentFixture<AmountErrorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountErrorModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountErrorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
