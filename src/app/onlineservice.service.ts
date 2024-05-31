import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class OnlineserviceService {

  add(a: number, b: number){
    return('sum is:' + (a+b));
  }
  multiply(a: number, b: number){
    return('sum is:' + (a*b));
  }

  constructor(public h : HttpClient) {


   }
   showproduct(): Observable<any>{
        const httpOptions = { headers: new HttpHeaders ({ 'Content-Type': 'application/json'}) }; 
        return this.h.get("http://localhost:3000/show",httpOptions);
   }

   addNewUser(data:any): Observable<any>{
        const httpOptions = { headers: new HttpHeaders ({ 'Content-Type': 'application/json'}) }; 
        return this.h.post("http://localhost:3000/add",data,httpOptions);
   }
   validuser(user:any): Observable<any>{
        const httpOptions = { headers: new HttpHeaders ({ 'Content-Type': 'application/json'}) }; 
        return this.h.post("http://localhost:3000/login",user,httpOptions);
   }
   buy(data:any): Observable<any>{
    const httpOptions = { headers: new HttpHeaders ({ 'Content-Type': 'application/json'}) }; 
    return this.h.post("http://localhost:3000/buy",data,httpOptions);
}
  prod:Iprod[]=[
    {pid:"p001",pname:"TV",price:10000, qty:10, pimage:'/assets/tv.jpg'},
    {pid:"p002",pname:"Washingmachine",price:12000, qty:9,pimage:'/assets/washingmachine.jpg'},
    {pid:"p003",pname:"Monitor",price:11000, qty:3,pimage:'/assets/monitor.jpg'},
    {pid:"p004",pname:"Watch",price:9000, qty:5,pimage:'/assets/watch.jpg'},
    {pid:"p005",pname:"Fan",price:300, qty:9,pimage:'/assets/fan.jpg'},
    {pid:"p006",pname:"Fridge",price:30000, qty:55,pimage:'/assets/Fridge.jpg'},
    {pid:"p007",pname:"Projector",price:80000, qty:33,pimage:'/assets/projector.jpg'},
    {pid:"p008",pname:"Invertor",price:90000, qty:44,pimage:'/assets/Invertor.jpg'},
    {pid:"p009",pname:"ac",price:190000, qty:44,pimage:'/assets/ac.jpg'},
    {pid:"p010",pname:"car",price:900000, qty:44,pimage:'/assets/car.jpg'},
    {pid:"p011",pname:"mobile",price:19000, qty:44,pimage:'/assets/mobile.jpg'},
     ]


}
 export interface Iprod{
  pid:string;
  pname:string;
  price:number;
  qty:number;
  pimage:string
 }
