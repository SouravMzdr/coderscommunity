import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public auth:AuthService,
              public route:Router) { }

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

  goToHome(){
    this.route.navigate(['/'])
  }

  goToContact(){
    this.route.navigate(['/contact'])
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
