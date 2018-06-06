import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-example',
  templateUrl: './directives-example.component.html',
  styleUrls: ['./directives-example.component.css']
})
export class DirectivesExampleComponent implements OnInit {

  heroes:string[] = ['ABC','CDF','GHI'];
  index:number = 0;
  toggleHeroFlag:boolean = true;

  toggleHero(){
    this.toggleHeroFlag = !this.toggleHeroFlag;
  }
  constructor() { }

  ngOnInit() {
  }

}
