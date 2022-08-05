import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  loggedIn: boolean;

  constructor(private accountservice: AccountService) { }

  ngOnInit(): void {

  }
  // ngOnChanges(): void {
  //   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   //Add '${implements OnChanges}' to the class.
  //     this.login();
  // }


  login() {
    console.log('model', this.model);

    this.accountservice.login(this.model).subscribe(response => {
      console.log(response);
      this.loggedIn = true;
    }, (error) => {
      console.log(error)
    });
  }


}
