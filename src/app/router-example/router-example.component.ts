import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-example',
  templateUrl: './router-example.component.html',
  styleUrls: ['./router-example.component.css']
})
export class RouterExampleComponent implements OnInit {

  constructor(private router:Router) { }
  goToFirst(){
    this.router.navigate(['/first']);
  }
  ngOnInit() {
  }

}
