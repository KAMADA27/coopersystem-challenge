import { Component, Input, OnInit } from '@angular/core';
import { InvestmentService } from '@core/services/investment.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Stock } from '@data/schema/stock';

@Component({
  selector: 'app-amount-error-modal',
  templateUrl: './amount-error-modal.component.html',
  styleUrls: ['./amount-error-modal.component.scss']
})
export class AmountErrorModalComponent implements OnInit {
  @Input() stockIdErrorList!: string[];
  @Input() totalBalance!: number;

  stockErroList: Stock[] = [];

  constructor(
    public activeModal: NgbActiveModal,
    private investmentService: InvestmentService
  ) {}

  ngOnInit(): void {
    this.getStock();
    console.log(this.stockIdErrorList);
  }

  getStock(): void {
    const stock = this.investmentService.getInvestment().stock;

    stock.forEach(item => {
      this.stockIdErrorList.forEach(stockId => {
        if (item.id === stockId) {
          this.stockErroList.push(item);
        }
      });
    });
  }
}
