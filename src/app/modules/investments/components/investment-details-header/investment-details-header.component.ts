import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-investment-details-header',
  templateUrl: './investment-details-header.component.html',
  styleUrls: ['./investment-details-header.component.scss']
})
export class InvestmentDetailsHeaderComponent {
  @Input() public name!: string;
  @Input() public goal!: string;
  @Input() public totalBalance!: number;
}
