import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions, URLSearchParams } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl:'./register.component.html',
  styleUrls:['./register.component.css']
})

export class RegisterComponent implements OnInit{
  private registerUrl= "http://87.195.159.225:8081/apiV1/gettodos";

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private http:Http
  ){}

  ngOnInit() {

  }

  register(){
    console.log("trying to regiser:");
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('username', 'paul');
    urlSearchParams.append('password', 'wachtwoord2');
    urlSearchParams.append('serverKey', '175d6c2c2632e0f87a07f32e88a690104f921b517c7af1c6333de2dfad9be8e3');
    let body = urlSearchParams.toString()

    return this.http.post(this.registerUrl, body, options).subscribe(
        data  =>this.registerResponse(data),
        err   =>this.handleError(err),
        () =>console.log("todos received")
    );
  }

  registerResponse(res: Response){
    console.info(res['_body']);
    this.router.navigate(['login']);

  }

  handleError(error: Response){
    console.info(error.toString());
  }


}
