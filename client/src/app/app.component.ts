import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { fromEvent } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = "Dating App";
  user: any;
  weather: any;
  loggedIn: boolean = false;
  // behzad: Array<any> = [];
  // x: Array<any> = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.behzad.push("behzad");
    // this.x.push(new Date());
    // this.behzad.push("hasan");
    // this.behzad.push(() => {
    //   console.log('test');
    // })
    // this.behzad.push(1);
    // this.behzad.push(2);

    // this.behzad.forEach(x => {
    //   if(typeof(x) === "number")
    //   {
    //     console.log(x);
    //   } else {
    //     console.log(x, 'the type isnot number');
    //   }
    // })
    // console.log(this.behzad,'behzad')

    this.getUser();
    this.getWeather();
  }


  getUser() {

    this.http.get('https://localhost:5001/api/User').subscribe((response) => {
      this.user = response;
      console.log('users', this.user);
    }, (error) => {
      console.log(error);
    })
  }
  getWeather() {

    this.http.get('https://localhost:5001/api/WeatherForecast').subscribe((response) => {
      this.weather = response;
      console.log('weather', this.weather);
    }, (error) => {
      console.log(error);
    })
  }
}
