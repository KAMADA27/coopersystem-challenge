import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Investment } from '@data/schema/investment';
import { InvestmentService } from '@core/services/investment.service';
import { Stock } from '@data/schema/stock';
import { AmountSuccessModalComponent } from '../../components/amount-success-modal/amount-success-modal.component';
import { AmountErrorModalComponent } from '../../components/amount-error-modal/amount-error-modal.component';

@Component({
  selector: 'app-investment-details',
  templateUrl: './investment-details.component.html',
  styleUrls: ['./investment-details.component.scss']
})
export class InvestmentDetailsComponent implements OnInit {
  investment: Investment = {
    name: '',
    goal: '',
    totalBalance: 0,
    shortageIndicator: '',
    stock: []
  };
  investments: Investment[] = [];
  stockForm!: FormGroup;
  totalBalance: number = 0;

  constructor(
    private investmentsService: InvestmentService,
    private formBuilder: FormBuilder,
    private _location: Location,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.investment = this.investmentsService.getInvestment();
    this.investments = this.investmentsService.getInvestmentsFromLocal();
    this.buildForm();
  }

  get f(): any {
    return this.stockForm.controls;
  }

  accumulatedBalanceHandler(percentage: number): number {
    const result = this.investment.totalBalance * (percentage / 100);
    return result ?? 0;
  }

  private buildForm(): void {
    let amountList: any = {};

    this.investment.stock.forEach((item: Stock) => {
      amountList[item.id] = [''];
    });

    this.stockForm = this.formBuilder.group({
      ...amountList
    });
  }

  getTotalAmount(): number {
    let total = 0;

    this.investment.stock.forEach((item: Stock) => {
      total += Number(this.f[item.id].value);
    });

    return total;
  }

  openSuccessModal(): void {
    this.modalService.open(AmountSuccessModalComponent, { centered: true }).result.then(() => {
      this.back();
    });
  }

  findIndexOfInvalidStock(): string[] {
    const controls = this.stockForm.controls;
    let stockErrorIndexList = [];

    for(let item in controls) {
      if (controls[item].status === 'INVALID') {
        stockErrorIndexList.push(item);
      }
    }

    return stockErrorIndexList;
  }

  openErrorModal(): void {
    const modalRef = this.modalService.open(AmountErrorModalComponent, { centered: true, size: 'lg' });
    modalRef.componentInstance.stockIdErrorList = this.findIndexOfInvalidStock();
    modalRef.componentInstance.totalBalance = this.investment.totalBalance;
  }

  back(): void {
    this._location.back();
  }

  setNewInvestment(): void {
    this.investments = this.investments.map(currInvestment => {
      if (currInvestment.name === this.investment.name) {
        currInvestment = this.investment;
        currInvestment.totalBalance = this.totalBalance;
      }

      return currInvestment;
    });

    this.investmentsService.setInvestmentsToLocal(this.investments);
  }

  updateStock(): void {
    this.investment.stock.forEach(stock => {
      this.totalBalance += this.stockForm.value[stock.id];
    });

    this.totalBalance = this.investment.totalBalance - this.totalBalance;

    this.investment.stock = this.investment.stock.map(stock => {
      const currBalance = this.accumulatedBalanceHandler(stock.percentage);
      const newBalance = currBalance - this.stockForm.value[stock.id];
      const newPercentage = (newBalance / this.totalBalance) * 100;
      
      stock.percentage = Number(newPercentage.toFixed(2));

      return stock;
    });

    this.setNewInvestment();
  }

  submit(): void {
    if (this.stockForm.status === 'INVALID') {
      this.openErrorModal();
      return;
    }
    
    this.updateStock();
    this.openSuccessModal();
  }
}
