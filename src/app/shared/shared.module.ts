import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
import { ControlMessagesComponent } from './components/control-messages/control-messages.component';
import { TitleComponent } from './components/title/title.component';
import { AmountToRedeemValidatorDirective } from './directives/amount-to-redeem-validator.directive';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "left",
  allowNegative: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "."
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CurrencyMaskModule,
    NgbModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CurrencyMaskModule,
    NgbModule,
    AmountToRedeemValidatorDirective,
    ControlMessagesComponent,
    TitleComponent,
  ],
  declarations: [
    AmountToRedeemValidatorDirective,
    ControlMessagesComponent,
    TitleComponent,
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ]
})
export class SharedModule {}
