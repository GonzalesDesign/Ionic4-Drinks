import { FunksionsService } from './../../services/funksions.service';
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFade]'
})
export class FadeDirective implements OnInit {
	public elem;

    constructor(public elr: ElementRef,
                private funksions: FunksionsService) {

                this.elem = elr;
	}

	ngOnInit() {
		const element = this.elem.nativeElement;
		// this.elem.nativeElement.style.background = 'yellowGreen';
		this.funksions.fTMxFrAlphaIon(element, 2, 0);
	}
}
