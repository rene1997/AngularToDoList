import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl:'./register.component.html',
  styleUrls:['./register.component.css']
})

export class RegisterComponent implements OnInit{
  constructor(
    private route:ActivatedRoute,
    private router:Router
  ){}
  ngOnInit() {

  }
}
