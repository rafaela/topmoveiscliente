import { Pipe, PipeTransform } from '@angular/core';
import { TiposUnidade } from '../common';

@Pipe({
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {

  transform(value: number, unity: TiposUnidade | string = '' , currency = 'BRL'): string {
    let style = '';

    if (unity == null || unity === '' || unity.toString().replace(/[^\d]/g,'').length !== 0) {
       switch (unity) {
          case TiposUnidade.Dinheiro: style = 'currency'; break;
          case TiposUnidade.Porcentagem: style = 'percent'; break;
          case TiposUnidade.Decimal: default: style = 'decimal'; break;
       }
    }
    else {
       style = unity.toString();
    }

    return Intl.NumberFormat('pt-BR', { style, currency }).format(value);
 }

}
