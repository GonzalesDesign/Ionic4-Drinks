// import { RlgErrorDirective } from './../directives/rlg-error.directive';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

    // public appRlgError: RlgErrorDirective;

  constructor() { }

  ngOnInit() {
  }

  public fOnLogin() {
      console.log('fOnLogin()');
  }

}
