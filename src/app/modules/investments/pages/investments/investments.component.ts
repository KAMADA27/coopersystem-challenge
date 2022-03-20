import { Component, OnInit } from '@angular/core';
import { Response } from '@data/schema/api';
import { Investment } from '@data/schema/investment';
import { InvestmentService } from '@core/services/investment.service';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.scss']
})
export class InvestmentsComponent implements OnInit {
  error: string | undefined;
  investments!: Investment[];

  constructor(private investmentService: InvestmentService) { }

  ngOnInit(): void {
    this.getInvestmentService();
  }

  getInvestmentService(): void  {
    this.investmentService.getInvestments()
      .pipe(
        tap((response: Response) => {
          this.investments = response.response.data.listaInvestimentos.map((investment: any) => {
            return {
              name: investment.nome,
              goal: investment.objetivo,
              totalBalance: investment.saldoTotal,
              shortageIndicator: investment.indicadorCarencia,
              stock: investment.acoes.map((stock: any) => {
                return {
                  id: stock.id,
                  name: stock.nome,
                  percentage: stock.percentual
                };
              })
            }
          });
        }),
        catchError(error => of((this.error = error)))
      )
      .subscribe();
  }
}
