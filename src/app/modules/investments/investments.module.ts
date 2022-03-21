import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentsRoutingModule } from './investments-routing.module';
import { InvestmentsComponent } from './pages/investments/investments.component';
import { InvestmentDetailsComponent } from './pages/investment-details/investment-details.component';
import { SharedModule } from '@shared/shared.module';
import { InvestmentDetailsHeaderComponent } from './components/investment-details-header/investment-details-header.component';
import { AmountSuccessModalComponent } from './components/amount-success-modal/amount-success-modal.component';
import { AmountErrorModalComponent } from './components/amount-error-modal/amount-error-modal.component';


@NgModule({
  declarations: [
    InvestmentsComponent,
    InvestmentDetailsComponent,
    InvestmentDetailsHeaderComponent,
    AmountSuccessModalComponent,
    AmountErrorModalComponent
  ],
  imports: [
    CommonModule,
    InvestmentsRoutingModule,
    SharedModule
  ]
})
export class InvestmentsModule { }
