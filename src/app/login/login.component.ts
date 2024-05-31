import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnlineserviceService } from '../onlineservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [OnlineserviceService]
})
export class LoginComponent {
  constructor(public ob: Router, public onlineService: OnlineserviceService){

  }
  status: String='';
  result:any;
  validate(frm:any){
    // obs.showproduct().subscribe(result=> this.prod = result);
    //this.ob.addNewUser(frm).subscribe(result=> alert(result.message));
    this.onlineService.validuser(frm).subscribe(c =>{this.result=c.message[0].cnt
      if(this.result > 0 ){
        this.ob.navigate(['products'])
        sessionStorage.setItem("u",frm.uname)
        this.status="valid user"
      }else{
        this.status="Invalid user"
      }
    
    })
    

    
    // if(frm.uid=="admin" && frm.pwd=="india123"){
    //   this.ob.navigate(['products'])
    //   sessionStorage.setItem("u",frm.uid)
    //   this.status="valid user"
    // }else{
    //   this.status="Invalid user"
    // }
  }


}
