import { FunksionsService } from './../../services/funksions.service';
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
	selector: '[appRlgError]'
})
export class RlgErrorDirective implements OnInit {
	public elem;

	constructor(elr: ElementRef, private funksions: FunksionsService) {
		this.elem = elr;
	}

	ngOnInit() {
		const element = this.elem.nativeElement;
		element.style.background = 'orange';
	}
}
