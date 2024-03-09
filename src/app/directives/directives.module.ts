import { NgModule } from '@angular/core';
import { IonMaskDirective } from './ion-mask/ion-mask.directive';
import { IntlMaskDirective } from './intl-mask/intl-mask.directive';

@NgModule({
   declarations: [
      IonMaskDirective,
      IntlMaskDirective
   ],
   exports: [
      IonMaskDirective,
      IntlMaskDirective
   ]
})
export class DirectivesModule { }
