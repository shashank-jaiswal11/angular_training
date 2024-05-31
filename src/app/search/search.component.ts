import { Component } from '@angular/core';
import { Iprod, OnlineserviceService } from '../onlineservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  providers:[OnlineserviceService]
  
})
export class SearchComponent {
 data:any;
prod:Iprod[]=[];
constructor(public ob: OnlineserviceService, public r : ActivatedRoute){
  this.prod=ob.prod;
 r.queryParamMap.subscribe(result => {
 this.data= result.get('s') 
  this.prod=this.prod.filter(c=> c.pname.includes(this.data))
      }) 
  }

}
