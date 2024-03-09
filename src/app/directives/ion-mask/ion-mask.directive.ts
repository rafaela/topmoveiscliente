import { Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { conformToMask, createTextMaskInputElement } from 'text-mask-core';


@Directive({
   selector: '[appIonMask]',
   providers: [IonInput]
})
export class IonMaskDirective implements OnInit, OnDestroy {

   @Input('appIonMask')
   public mask: Array<any> | ((valor: any) => Array<any>) = [];

   private onDestroy: Subject<void> = new Subject<void>();

   constructor(public ionInput: IonInput) { }

   public ngOnInit() {
      if (this.mask) {
         this.configureInput();
      }
   }

   public ngOnDestroy() {
      this.onDestroy.next();
   }

   public async configureInput() {
      const input = await this.ionInput.getInputElement();
      const maskedInput = createTextMaskInputElement({
         inputElement: input,
         mask: this.mask,
         guide: false
      });
      this.ionInput
         .ionChange
         .pipe(takeUntil(this.onDestroy))
         .subscribe((event: CustomEvent) => {
            const { value } = event.detail;
            maskedInput.update(value);
            this.ionInput.value = input.value;
         });
   }
}

// Mascara um valor utilizando uma das máscaras
export const maskRawValue = (rawValue: any, mask: any) => conformToMask(rawValue, mask, { guide: false });
