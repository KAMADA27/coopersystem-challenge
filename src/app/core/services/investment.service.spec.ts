import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { InvestmentService } from './investment.service';

describe('InvestmentService', () => {
  let service: InvestmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler
      ]
    });
    service = TestBed.inject(InvestmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
