import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  userList: User[] = [];
  constructor() { }

  ngOnInit() {
  }
  submitForm(form){
    var user:User;
    user = form.value;
    console.log(user);
    this.userList.push(user);
  }
}
