import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { InvestmentService } from './investment.service';

describe('InvestmentService', () => {
  let service: InvestmentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        HttpClient,
        HttpHandler
      ]
    });

    service = TestBed.inject(InvestmentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  }); 

  const dummyInvestmentsResponse = {
    response: {
      status: "200",
      data: {
        listaInvestimentos: [
          {
            nome: "INVESTIMENTO I",
            objetivo: "Minha aposentadoria",
            saldoTotal: 39321.29,
            indicadorCarencia: "N",
            acoes: [
              {
                id: "1",
                nome: "Banco do Brasil (BBAS3)",
                percentual: 28.1
              },
              {
                id: "2",
                nome: "Vale (VALE3)",
                percentual: 20.71
              },
              {
                id: "3",
                nome: "Petrobras (PETR4)",
                percentual: 21.63
              },
              {
                id: "4",
                nome: "Cemig (CMIG3)",
                percentual: 12.41
              },
              {
                id: "5",
                nome: "Oi (OIBR3)",
                percentual: 17.15
              }
            ]
          },
        ]
      }
    }
  }

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getInvestments() should return data', () => {
    service.getInvestments().subscribe((res) => {
      expect(res).toEqual(dummyInvestmentsResponse);
    });
  });
});
