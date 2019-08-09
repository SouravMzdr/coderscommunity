import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public auth:AuthService) { }

  photoUrl:string=''
  loginOperation:string= 'Log In'

  ngOnInit() {
    this.auth.user$.subscribe(
      (value) =>{
        if (value !=null){
          this.loginOperation='Log out';
          this.photoUrl = value.photoUrl
          console.log(this.photoUrl)
        }
        else {
         this.photoUrl =''
        }
      }
    )
  }


  signOut(){
    this.photoUrl=''
    this.auth.signOut();
  }
  signIn(){
    this.auth.googleSignin();
  }

  toggleLogIn(){
    if (this.loginOperation == 'Log In'){
      this.auth.googleSignin();
    }
    else {
    this.auth.signOut();
    this.loginOperation = 'Log In'

    }
  }

}
