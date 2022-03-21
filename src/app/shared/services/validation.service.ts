import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  public static getValidationErrorMessage(validatorName: string, validatorValue?: any): any {
    const config: any = {
      required: `Campo é requerido.`,
      invalidAmount: `O valor a resgatar não pode ser maior que R$ ${ validatorValue.toLocaleString('pt-br', { maximumFractionDigits: 2 }) }.`,
    };

    return config[validatorName];
  }
}
