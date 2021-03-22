import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }
  forgotpasswordUser(event) {
    event.preventDefault()
    const target = event.target
    const forgotpassword = target.querySelector('#forgotpassword').value
    

    // this.Auth.getUserDetails(forgotpassword)
    // console.log(forgotpassword)
  }

}
