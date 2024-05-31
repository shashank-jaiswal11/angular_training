import { Component } from '@angular/core';
import { OnlineserviceService } from '../onlineservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers:[OnlineserviceService]
})
export class RegisterComponent {

  dob: string = '';
  dobError: string = '';
  registrationSuccess:boolean=false;

  constructor(public ob: OnlineserviceService){
  }
  validate(frm :any){
    this.ob.addNewUser(frm).subscribe(result=> alert(result.message));
  }

  validateDate() {
    const selectedDate = new Date(this.dob);
    const today = new Date();
    if (selectedDate > today) {
      this.dobError = "Date of birth cannot be in the future.";
    } else {
      this.dobError = '';
    }
  }
  
}
