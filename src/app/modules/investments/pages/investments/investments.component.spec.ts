import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';

import { InvestmentsComponent } from './investments.component';
import { InvestmentDetailsComponent } from '../investment-details/investment-details.component';

describe('InvestmentsComponent', () => {
  let component: InvestmentsComponent;
  let fixture: ComponentFixture<InvestmentsComponent>;

  const routes: Routes = [
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentsComponent, InvestmentDetailsComponent ],
      providers: [ 
        HttpClient,
        HttpHandler,
      ],
      imports: [
        RouterModule.forRoot(routes)
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
