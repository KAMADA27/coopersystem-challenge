import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '@data/schema/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  baseURL: string = 'https://run.mocky.io/v3/ca4ec77d-b941-4477-8a7f-95d4daf7a653';

  constructor(private http: HttpClient) {}

  getInvestments(): Observable<Response> {
    return this.http.get<Response>(this.baseURL);
  }
}
