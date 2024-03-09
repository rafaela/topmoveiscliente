import { Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Subject } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

export interface IntlMaskProperties {
   locales?: string;
   // Para a lista completa de opções: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
   options?: Intl.NumberFormatOptions;
}

@Directive({
   selector: '[appIntlMask]',
   providers: [IonInput]
})
export class IntlMaskDirective implements OnInit, OnDestroy {

   @Input('appIntlMask') public intlMaskProps: IntlMaskProperties = {};

   private onDestroy: Subject<void> = new Subject<void>();

   constructor(public ionInput: IonInput, private api: ApiService) { }

   public ngOnInit() {
      this.intlMaskProps.locales ??= this.api.intlMaskProps.locales;
      this.intlMaskProps.options ??= this.api.intlMaskProps.options;

      this.configureInput();
   }

   public ngOnDestroy() {
      this.onDestroy.next();
   }

   private async configureInput() {
      const { locales: locales, options } = this.intlMaskProps;
      this.ionInput.ionBlur.subscribe((event: any) => {
         const value = event.target.value;
         if (value) {
            const cleanValue: any = getRawValueFromMaskedNumber(value);
            this.ionInput.value = cleanValue ? Intl.NumberFormat(locales, options).format(cleanValue) : '';
         }
      });
   }
}

export const getRawValueFromMaskedNumber = (maskedNumber: string) =>
   maskedNumber.toString().replace(/[^\d,]/g, '').replace(/,/g, '.').replace(/[.](?=.*[.])/g, '').replace('^0+', '');
;
