import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {FormGroup,FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-serv-example',
  templateUrl: './serv-example.component.html',
  styleUrls: ['./serv-example.component.css'],
  providers:[DataService]
})
export class ServExampleComponent implements OnInit {
  itemRecived : string[] = [''];
  formServ : FormGroup;
  getItemFromServiceClass(){
    this.itemRecived = this.dataService.getItems(); //// TODO:
  }

  addItemToList(){
    console.log(this.formServ.value);
    this.dataService.addItemToList(this.formServ.get('item').value);
  }
  constructor(private dataService : DataService, private fb:FormBuilder) { }

  ngOnInit() {
    this.formServ = this.fb.group({
      item: new FormControl('')
    })
  }

}
