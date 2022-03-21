import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AmountSuccessModalComponent } from './amount-success-modal.component';

describe('AmountSuccessModalComponent', () => {
  let component: AmountSuccessModalComponent;
  let fixture: ComponentFixture<AmountSuccessModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountSuccessModalComponent ],
      providers: [ 
        NgbActiveModal,
        HttpClient,
        HttpHandler 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountSuccessModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
