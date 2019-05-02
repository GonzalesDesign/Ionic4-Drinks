import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map, find } from 'rxjs/operators';
import { DataModel } from './data.model';


@Injectable({
	providedIn: 'root'
})
export class DataService {

    private url = '../../assets/json/data.json';

    public aAllXData: any;

    constructor( private httpClient: HttpClient ) {}

    // public fGetDataTest() {
    //     // console.log('...url: ', ...this.url );

    //     return [...this.url];
    // }

    public fGetAllDatas(): Observable<DataModel[]> {
        const xData =  this.httpClient
            .get<DataModel[]>(this.url)
            .pipe(
                tap(success => console.log('success: '),
                // error => console.log('error')
                // catchError(this.fHandleError)
                ),
                catchError(this.fHandleError)
                // map(x => `Hello ${x}!`)
            );
        // xData.subscribe(data => {
        //         this.aAllXData = data.id;
        //     }
        // );
        // console.log('this.aAllXData: ', this.aAllXData);

        return xData;

        // return [...this.url];

        // return {...this.url.find(drink => {
        //     return drink.id === drinkId;
        // })};
    }

    public fGetDetail(id) {
        console.log(`${this.url}?i=${id}&plot=full`);

        return this.httpClient
            .get(`${this.url}?i=${id}&plot=full`);
    }

    public fGetDetailXX(drinkId) {
        // console.clear();
        console.log('fGetDetail: ', this.url);
        return this.httpClient
            .get<DataModel[]>(this.url)
            .pipe(
                map(results => {
                    console.log('results: ', results, drinkId);
                    // return results = drinkId;
                }),
                tap (resData => {
                    console.log('resData: ', resData);
                },
                // find(drink => {
                //     console.log('drink: x ', drink);
                //     // return drink.id;
                //     return drink.id === drinkId;
                //     }
                // )
                )
            );
    }

    public fGetDetailX(drinkId): Observable<DataModel[]> {
        const xData =  this.httpClient.get<DataModel[]>(this.url).pipe(
                // tap (
                //     success => console.log('success: '),
                //     // error => console.log('error')
                //     // catchError(this.fHandleError)
                //  ),
                find(drink => {
                    console.log('drink: ', drink);
                    console.log('drinkId: ', drinkId);
                    return drinkId; // drink.id === drinkId;
                }),
                catchError(this.fHandleError)
                // map(x => `Hello ${x}!`)
            );
        // xData.subscribe(data => {
        //         this.aAllXData = data.id;
        //     }
        // );
        // console.log('this.aAllXData: ', this.aAllXData);


        return xData;

        // return [...this.url];

        // return {...this.url.find(drink => {
        //     return drink.id === drinkId;
        // })};
    }

    public fHandleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${
                error.message
                }`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }


}
