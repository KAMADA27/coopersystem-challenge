import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentsRoutingModule } from './investments-routing.module';
import { InvestmentsComponent } from './pages/investments/investments.component';
import { InvestmentDetailsComponent } from './pages/investment-details/investment-details.component';


@NgModule({
  declarations: [
    InvestmentsComponent,
    InvestmentDetailsComponent
  ],
  imports: [
    CommonModule,
    InvestmentsRoutingModule
  ]
})
export class InvestmentsModule { }
