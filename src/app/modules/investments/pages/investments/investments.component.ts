import { Component, OnInit } from '@angular/core';
import { Response } from '@data/schema/api';
import { Investment } from '@data/schema/investment';
import { InvestmentService } from '@core/services/investment.service';
import { of } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.scss']
})
export class InvestmentsComponent implements OnInit {
  error: string | undefined;
  investments!: Investment[];
  hasLocalInvestments: boolean = false;
  isLoading: boolean = false;

  constructor(
    private investmentService: InvestmentService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.hasLocalInvestments = !!this.investmentService.getInvestmentsFromLocal();
    this.getInvestmentService();
  }

  getInvestmentService(): void  {
    if (this.hasLocalInvestments) {
      this.investments = this.investmentService.getInvestmentsFromLocal();
      return;
    }

    this.isLoading = true;

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
          this.investmentService.setInvestmentsToLocal(this.investments);
        }),
        catchError(error => of((this.error = error))),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe();
  }

  shortageIndicatorHandler(investment: Investment): void {
    const { shortageIndicator, name } = investment;

    if (shortageIndicator === 'S') {
      return;
    }

    this.investmentService.setInvestment(investment);

    this.router.navigate([name.split(' ').join('')], {
      relativeTo: this.activatedRoute
    });
  }
}
