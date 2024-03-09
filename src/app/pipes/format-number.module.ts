import { NgModule } from '@angular/core';
import { FormatNumberPipe } from './format-number.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
   imports: [
      CommonModule,
   ],
   declarations: [FormatNumberPipe],
   exports: [FormatNumberPipe]
})
export class FormatNumberPipeModule { }
