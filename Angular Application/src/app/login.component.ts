import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl:'./login.component.html',
  styleUrls:['./login.component.css']
})

export class LoginComponent implements OnInit{
  constructor(
    private route:ActivatedRoute,
    private router:Router
  ){}
  ngOnInit() {

  }

  login(){
      this.router.navigate(['todolist']);
  }
}
