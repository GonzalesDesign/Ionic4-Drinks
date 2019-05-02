/***********************************************************
 * Project: Ionic 4 PWA
 * Contact: rolandolloyd@gmail.com
 * Copyright © 2019 GonzalesDesign
 * Platform: Ionic 4 & NG7
 * Service Name: Animation service
 * Version: 19.05.02
 * Note: Miscellaneous basic animation using GSAP
 ***********************************************************/

import { Injectable } from '@angular/core';
import { TweenMax } from 'gsap';

@Injectable({
	providedIn: 'root'
})
export class AnimationService {

    constructor() {}

    public fAlphaAnim(e, tym, val) {
        TweenMax.from(e, tym, {alpha: val});
    }
}
