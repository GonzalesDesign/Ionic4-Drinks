import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { ListService } from '../list.service';
// import { DataModel } from './../../../services/data.model';
import { ListModel } from '../list.model';

@Component({
	selector: 'app-drink-detail',
	templateUrl: './drink-detail.page.html',
	styleUrls: ['./drink-detail.page.scss']
})
export class DrinkDetailPage implements OnInit {
	// public title = 'Titolo';
	public aDetailData = [];
    public loadedDrink: ListModel;
    public info = null;

	constructor( private activatedRoute: ActivatedRoute,
                 private dataService: DataService,
                 private listService: ListService ) {}

	ngOnInit() {

        this.activatedRoute.paramMap.subscribe(paramMap => {
            const idDrink = paramMap.get('drinkId');
            this.loadedDrink = this.listService.fGetDrink(idDrink);
        });

        // const id = this.activatedRoute.snapshot.paramMap.get('drinkId');
        // this.dataService.fGetDetail(id).subscribe(result => {
        //     console.log('result: ', result);
        //     this.loadedDrink = result;
        // });
		// this.activatedRoute.paramMap.subscribe(paramMap => {
		// 	if (!paramMap.has('drinkId')) {
		// 		console.log('Wrong ID!');
		// 		return;
		// 	}
		// 	const xd = paramMap.get('drinkId');
		// 	console.log('xd: ', xd);
		// 	console.log('paramMap: ', paramMap);
        //     this.loadedDrink = this.dataService.fGetDetail(xd);
		// 	//   this.loadedDrink = this.dataService.fGetDetail(drinkId);

		// 	//       this.dataService.fGetDetail(drinkId).subscribe(
		// 	// 		data => {
		// 	// 			const dataDetail = data; // populate aAllData array with all the data
		// 	// 			this.aDetailData = data[drinkId]; // populate aAllData array with all the data
		// 	// 			// this.aDrinks = this.aAllData; // populate aAllData array with all the data
		// 	// console.log('this.aDetailData: ', this.aDetailData);

		// 	// // const dataDetailX = this.aDetailData[0];
		// 	// 			// this.serviceData = this.aAllData[2];
		// 	// 			console.log('dataDetail: ', dataDetail);
		// 	// 			// console.log('this.serviceData: ', this.serviceData);

		// 	// 			// console.log('[...this.aDrinks]: ', [...this.aDrinks]);

		// 	// 			// this.sectionTitle = data[2].title;
		// 	// 		},
		// 	// 		// error => (this.errorMsg = this.fError())
		// 	//     );
		// });
	}
}
