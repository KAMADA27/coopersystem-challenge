import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { InvestmentService } from '@core/services/investment.service';

import { InvestmentDetailsComponent } from './investment-details.component';

describe('InvestmentDetailsComponent', () => {
  let component: InvestmentDetailsComponent;
  let fixture: ComponentFixture<InvestmentDetailsComponent>;
  let investmentService: jasmine.SpyObj<InvestmentService>;

  beforeEach(async () => {
    const investmentServiceSpy = jasmine.createSpyObj('InvestmentService', ['getInvestment', 'getInvestmentsFromLocal']);
    await TestBed.configureTestingModule({
      declarations: [ InvestmentDetailsComponent ],
      providers: [
        HttpClient,
        HttpHandler,
        FormBuilder,
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
    fixture = TestBed.createComponent(InvestmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
