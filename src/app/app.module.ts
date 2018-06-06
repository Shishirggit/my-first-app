import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import {FirstComponent} from './first/first.component';
import { DirectivesExampleComponent } from './directives-example/directives-example.component';
import { RouterExampleComponent } from './router-example/router-example.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ServExampleComponent } from './serv-example/serv-example.component';

const ROUTES:Routes =[
  {path:'',component:RouterExampleComponent},
  {path:'first',component:FirstComponent},
  {path:'directives',component:DirectivesExampleComponent},
  {path:'template-driven',component:TemplateDrivenComponent},
  {path:'reactive-forms',component:ReactiveFormsComponent},
  {path:'serv-example',component:ServExampleComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    DirectivesExampleComponent,
    RouterExampleComponent,
    TemplateDrivenComponent,
    ReactiveFormsComponent,
    ServExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
