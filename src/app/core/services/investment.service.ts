import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Investment } from '@data/schema/investment';
import { Response } from '@data/schema/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  investment!: Investment;
  baseURL: string = 'https://run.mocky.io/v3/ca4ec77d-b941-4477-8a7f-95d4daf7a653';

  constructor(private http: HttpClient) {}

  getInvestments(): Observable<Response> {
    return this.http.get<Response>(this.baseURL);
  }

  getInvestment(): Investment {
    return JSON.parse(localStorage.getItem('investment')!);
  }

  setInvestment(investment: Investment) {
    const jsonData = JSON.stringify(investment);
    localStorage.setItem('investment', jsonData);
  }
}
