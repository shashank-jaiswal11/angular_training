import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  fg:any;
    constructor(){
      this.fg= new FormGroup({
        username:new FormControl("admin",[Validators.required]),
        mail: new FormControl("",[Validators.email]),
        message: new FormControl("",[Validators.maxLength(5)]),
        age: new FormControl("",[ageValidator])
      })     
    }

    showdata(frm:any){
      alert(frm.username+ frm.mail+ frm.message);
    }
  }

  export function ageValidator(txt: AbstractControl){
    // txt contains age,value,state,properties
    const data= parseInt(txt.value);
    if(data >18){
     return null;
    }
        return{
          age: true
        }
}
