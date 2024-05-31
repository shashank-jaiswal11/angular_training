import { Component } from '@angular/core';
import { OnlineserviceService } from '../onlineservice.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css',
  providers:[OnlineserviceService]
})
export class BuyComponent {
   result: string;
   pid:any;
   pname:any;
   price:any;
   pimage:any;
   qty:number=0;
   //uisng activateroute u can read query string from the current url
  constructor(public ob: OnlineserviceService, public r : ActivatedRoute){
    r.queryParamMap.subscribe(obj => {
      this.pid=obj.get('a'),
      this.pname=obj.get('b'),
      this.price=obj.get('c'),
      this.pimage=obj.get('d')
  
  })
    this.result=ob.add(5,8);

  }

  placeorder(){
    var res={
      username:sessionStorage.getItem("u"),
          pid:this.pid,
          transdate:new Date(),
          qty:this.qty
    }
    this.ob.buy(res).subscribe(c=> alert(c.message))
  }

}
