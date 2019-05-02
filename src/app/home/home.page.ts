import { FunksionsService } from '../../services/funksions.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {

    /*---= home page view props =---*/
    public mainKontainerId = '#rlg-main-kontainer-id';

    /*---= loader props =---*/
    public loading = '.loading';
    public loadingKontainer = '.loading-kontainer';

    /*---= Timer =----*/
    public timeout = 2000;

    constructor(private funksions: FunksionsService) {}

    ngOnInit() {
        // this.funksions.fDisplay(this.loadingKontainer, 'flex'); // show loader
        // this.funksions.fLoadTimer(this.loading, this.timeout); // simulating text percentage loading
    }

    ngAfterViewInit(): void {
        // setTimeout(() => {
        //     this.funksions.fRemoveLoader(this.loadingKontainer, 'none', .5); // remove loader
        //     this.funksions.fDisplay(this.mainKontainerId, 'flex'); // display mainKontainerId
        //   }, this.timeout);
    }

}
