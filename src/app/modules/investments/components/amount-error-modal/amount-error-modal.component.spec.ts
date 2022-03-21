import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvestmentService } from '@core/services/investment.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AmountErrorModalComponent } from './amount-error-modal.component';

describe('AmountErrorModalComponent', () => {
  let component: AmountErrorModalComponent;
  let fixture: ComponentFixture<AmountErrorModalComponent>;
  let investmentService: jasmine.SpyObj<InvestmentService>;

  beforeEach(async () => {
    const investmentServiceSpy = jasmine.createSpyObj('InvestmentService', ['getInvestment']);
    await TestBed.configureTestingModule({
      declarations: [ AmountErrorModalComponent ],
      providers: [ 
        NgbActiveModal,
        HttpClient,
        HttpHandler,
        { provide: InvestmentService, useValue: investmentServiceSpy } 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    investmentService = TestBed.inject(InvestmentService) as jasmine.SpyObj<InvestmentService>;
    investmentService.getInvestment.and.returnValue({
      name: 'INVESTIMENTO I',
      goal: 'Minha aposentadoria',
      totalBalance: 39321.29,
      shortageIndicator: 'N',
      stock: [
        {
          "id": "1",
          "name": "Banco do Brasil (BBAS3)",
          "percentage": 28.1
          },
          {
          "id": "2",
          "name": "Vale (VALE3)",
          "percentage": 20.71
          },
          {
          "id": "3",
          "name": "Petrobras (PETR4)",
          "percentage": 21.63
          },
          {
          "id": "4",
          "name": "Cemig (CMIG3)",
          "percentage": 12.41
          },
          {
          "id": "5",
          "name": "Oi (OIBR3)",
          "percentage": 17.15
        }
      ]
    });
    fixture = TestBed.createComponent(AmountErrorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
