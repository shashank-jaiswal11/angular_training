import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public r: Router){}
  filter(){
    var res= (document.getElementById("txt") as HTMLInputElement).value;
    this.r.navigate(['search'],{queryParams:{'s':res}});
  }
  title = 'onlineshop';
}
