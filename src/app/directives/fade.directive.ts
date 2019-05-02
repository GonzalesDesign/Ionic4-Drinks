import { Directive, ElementRef, OnInit } from '@angular/core';
import { AnimationService } from './../../services/animation.service';

@Directive({
  selector: '[appFade]'
})
export class FadeDirective implements OnInit {
	public elem;

    constructor(public elr: ElementRef,
                private fadeAnim: AnimationService) {
                this.elem = elr;
	}

	ngOnInit() {
		const element = this.elem.nativeElement;
		// this.elem.nativeElement.style.background = 'yellowGreen';
        this.fadeAnim.fAlphaAnim(element, 5, 0);
	}
}
