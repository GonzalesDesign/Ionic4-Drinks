/**********************************************************
 * Project: R.Lloyd Gonzales Portfolio Website
 * URL: RLGonzales.com
 * Contact: rolandolloyd@gmail.com
 * Copyright © 2019 GonzalesDesign
 * Platform: Angular 6
 * Component Name: LoaderSvgComponent
 * Note: Component to display loading animation.
 **********************************************************/
import { LoaderAnimService } from './loader-anim.service';
import { Component, OnInit } from '@angular/core';
import { FunksionsService } from '../../services/funksions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader-svg',
  templateUrl: './loader-svg.component.html',
  styleUrls: ['./loader-svg.component.scss']
})
export class LoaderSvgComponent implements OnInit {

    /*---= loader props =---*/
    public loading = '.loading';
    public loadingKontainer = 'loading-kontainer';
    /*---= Timer =----*/
    public timeout = 2000;

  constructor(private loaderAnim: LoaderAnimService,
              private funksions: FunksionsService,
              private router: Router) { }

  ngOnInit() {
    // this.funksions.fDisplay(this.loadingKontainer, 'flex'); // show loader
    this.loaderAnim.fArchSVG();
    this.funksions.fLoadTimer(this.loading, this.timeout); // simulating text percentage loading
    setTimeout(() => {
        // this.loaderAnim.fArchSVG(false);
        this.router.navigate(['home']);
      }, this.timeout);

  }

}
