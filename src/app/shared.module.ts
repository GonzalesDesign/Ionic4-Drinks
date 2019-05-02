import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RlgErrorDirective } from './directives/rlg-error.directive';
import { FadeDirective } from './directives/fade.directive';

@NgModule({
  declarations: [FadeDirective],
  exports: [FadeDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
