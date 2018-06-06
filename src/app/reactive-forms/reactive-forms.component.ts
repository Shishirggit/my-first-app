import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormBuilder} from '@angular/forms';
import {User} from './user';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  userList: User[] = [];
  usrForm : FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.usrForm = this.fb.group({
      name: new FormControl('',Validators.required),
      contact: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
    });
  }
  addUser(usrForm){
    console.log(usrForm.value);
    this.userList.push(usrForm.value);
  }

}
