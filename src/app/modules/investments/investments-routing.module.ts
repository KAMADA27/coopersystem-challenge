import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestmentDetailsComponent } from './pages/investment-details/investment-details.component';
import { InvestmentsComponent } from './pages/investments/investments.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'investments',
    pathMatch: 'full',
  },
  {
    path: 'investments',
    component: InvestmentsComponent,
  },
  {
    path: 'investments/:name',
    component: InvestmentDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestmentsRoutingModule {}
