import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data.service';
import { ListService } from './list.service';
// import { DataModel } from './../../services/data.model';
import { ListModel } from './list.model';

@Component({
	selector: 'app-list',
	templateUrl: 'list.page.html',
	styleUrls: ['list.page.scss']
})

export class ListPage implements OnInit {

    // private selectedItem: any;

	// private icons = [
	// 	'flask',
	// 	'wifi',
	// 	'beer',
	// 	'football',
	// 	'basketball',
	// 	'paper-plane',
	// 	'american-football',
	// 	'boat',
	// 	'bluetooth',
	// 	'build'
    // ];

	public items: Array<{ title: string; note: string; icon: string }> = [];

    /*--===| public properties |===--*/
    public aAllData = [];
    // public aDrinks = [];
    public sectionTitle = [];
    public serviceData = []; // : string;

    /*--===| rxjs: subscription |===--*/
    // public subsData: Subscription;

    /*-= Error variables =----*/
    public errorMsg;

    public aDrinks: ListModel[];

    constructor(private dataService: DataService,
                private listService: ListService) {
		// for (let i = 1; i < 11; i++) {
		// 	this.items.push({
		// 		title: 'Item ' + i,
		// 		note: 'This is item #' + i,
		// 		icon: this.icons[Math.floor(Math.random() * this.icons.length)]
		// 	});
		// }
	}

	ngOnInit() {
        this.aDrinks = this.listService.fGetAllDrinks();

		/*---=|••• OBSERVABLE •••|=---*/
		// this.subsData = this.dataService.fGetAllDatas().subscribe(
		// 	data => {
		// 		this.aAllData = data; // populate aAllData array with all the data
		// 		this.aDrinks = this.aAllData; // populate aAllData array with all the data
		// 		// console.log('this.aAllData: ', this.aAllData);
		// 		// console.log('[...this.aDrinks]: ', [...this.aDrinks]);

        //      // this.serviceData = this.aAllData[2];
		// 		// console.log('this.serviceData: ', this.serviceData);


		// 		// this.sectionTitle = data[2].title;
		// 	},
		// 	error => (this.errorMsg = this.fError())
		// );
	}

	public fError() {
		return 'SOMETHING WENT WRONG! ';
	}

	/*-==================================
        Unsubscribe to avoid memory leaks
    =====================================-*/
	// ngOnDestroy() {
	// 	this.subsData.unsubscribe();
	// }

	// add back when alpha.4 is out
	// navigate(item) {
	//   this.router.navigate(['/list', JSON.stringify(item)]);
	// }
}
