import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'todolist',
  templateUrl:'./todolist.component.html',
  styleUrls:['./todolist.component.css']
})

export class TodoListComponent implements OnInit{
  constructor(
    private route:ActivatedRoute,
    private router:Router
  ){}
  ngOnInit() {

  }
}
