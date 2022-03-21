import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-amount-success-modal',
  templateUrl: './amount-success-modal.component.html',
  styleUrls: ['./amount-success-modal.component.scss']
})
export class AmountSuccessModalComponent {
  constructor(public activeModal: NgbActiveModal) {}
}
