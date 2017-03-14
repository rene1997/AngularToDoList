import { Component, OnInit } from '@angular/core';
import { Injectable }              from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response }          from '@angular/http';
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Headers, RequestOptions, URLSearchParams } from '@angular/http';


@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl:'./login.component.html',
  styleUrls:['./login.component.css']
})

export class LoginComponent implements OnInit{
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private http:Http
  ){}

  private serverUrl = "http://87.195.159.225:8081/apiV1";
  private loginUrl = "http://87.195.159.225:8081/apiV1/login";


  ngOnInit() {

  }

  login(){
    console.log('trying to login to ' + this.loginUrl);

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('username', 'rene');
    urlSearchParams.append('password', 'wachtwoordje');
    urlSearchParams.append('serverKey', '175d6c2c2632e0f87a07f32e88a690104f921b517c7af1c6333de2dfad9be8e3');

    let body = urlSearchParams.toString()


    return this.http.post(this.loginUrl,body, options)
        .subscribe(      data => this.loginResponse(data),
            err => this.handleError(err),
            () => console.log('Random Quote Complete'))
  }

  loginResponse(res: Response){
    console.log("keimooi!!!");
    console.info(res);
    this.router.navigate(['todolist']);
  }

  handleError(error:Response){
    console.log("error!!");
    console.info(error);
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
