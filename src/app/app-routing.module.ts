import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestmentsComponent } from '@modules/investments/pages/investments/investments.component';

const routes: Routes = [
  {
    path: 'investments',
    component: InvestmentsComponent,
    loadChildren: () => import('@modules/investments/investments.module').then(m => m.InvestmentsModule)
  },
  {
    path: '**',
    redirectTo: '/investments',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
