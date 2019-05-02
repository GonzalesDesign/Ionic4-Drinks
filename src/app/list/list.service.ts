import { Injectable } from '@angular/core';
// import { DataModel } from './../../services/data.model';
import { ListModel } from './list.model';

// export interface ListDataInterface {
//     id: string;
//     title: string;
//     imageUrl: string;
//     recipe: string[];
//     ingredient: {}; // {string};
//     instruction: string;
//   }

@Injectable({
  providedIn: 'root'
})
export class ListService {

    private drinks: ListModel[] = [
        {
            id:           'd0',
            title:        'Bloody Mary',
            imageUrl:     './../../assets/images/BloodyMary.jpg',
            recipe:     [
                '1.5 OZ SMIRNOFF® NO. 21 VODKA',
                '5 OZ TOMATO JUICE',
                '5 dash of hot sauce',
                'DASH WORCESTERSHIRE SAUCE'
            ],
            instruction:  'SERVE OVER ICE IN A ROCKS GLASS.'
        },
        {
            id:           'd1',
            title:        'Screwdriver',
            imageUrl:     './../../assets/images/Screwdriver.jpg',
            recipe:     [
                '1.5 OZ SMIRNOFF® NO. 21 VODKA',
                '3 OZ FRESH ORANGE JUICE',
                'ORANGE WEDGE'
            ],
            instruction:  'SERVE OVER ICE IN A ROCKS GLASS.'
        },
        {
            id:           'd2',
            title:        'Ocean Breeze Punch',
            imageUrl:     './../../assets/images/OceanBreeze.jpg',
            recipe:     [
                '1.5 CUPS OF SMIRNOFF VODKA',
                '1.5 CUPS CURACAO',
                'LEMON WHEEL GARNISH',
                '2 CUPS LEMONADE',
                'SERVES 8​'
            ],
            instruction:  'MIX AND ENJOY!'
        },
        {
            id:           'd3',
            title:        'Smirnoff & Cranberry',
            imageUrl:     './../../assets/images/SmirnoffCranberry.jpg',
            recipe:     [
                 '1.5 CUPS OF SMIRNOFF VODKA',
                 '3 OZ CRANBERRY JUICE',
                 'Fresh Lime'
            ],
            instruction:  'Born from generations of wine makers and distillers dating back to the 15th century, Jean-Sebastien Robicquet, the Master Distiller of CÎROC™ has the art of distilling in his veins. Jean-Sebastian is based in Villevert, France in the renowned wine region of Bordeaux. His distillery, Maison Villevert, has been in his family for over 500 years.'
        }
    ];

  constructor() { }

    public fGetAllDrinks() {
        return [...this.drinks];  // spread, makes copy of the private version and return a new array
    }

    public fGetDrink(id: string) {
        return {
            ...this.drinks.find(drink => {
                return drink.id === id;
            })
        }; // spread, make copy and makes an object
    }

}
