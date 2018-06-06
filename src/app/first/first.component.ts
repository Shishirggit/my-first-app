import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})

export class FirstComponent{
  title = 'first';
  headingTwo:string = 'Second';
  returnFunctionHeading(){
    return 'Third'
  }
  imageUrl:string = 'Fourth';
  changeValue(){
    this.headingTwo = 'Second is changed';
  }
  Name:string[];
  FirstName:string[] = ['A','B','C', 'D'];
  LastName:string[] = ['W','X','Y', 'Z'];
  i = 0;
  constructor(){
      this.Name = this.FirstName;
  }
  toggleValueOfName(){
    if(this.i%2 ==0)
        this.Name = this.FirstName;
    else
        this.Name = this.LastName;
    this.i++;
  }
  dataTwoWay:string = 'O';

  @Input() urlPassedString:string;
}
