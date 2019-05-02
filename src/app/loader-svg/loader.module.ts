// import { LoaderSvgComponent } from './../loader-svg/loader-svg.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { LoaderSvgComponent } from './loader-svg.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoaderSvgComponent
      }
    ])
  ],
  declarations: [LoaderSvgComponent]
})
export class LoaderPageModule {}
