import { Injectable } from '@angular/core';

//Router
import { Router } from '@angular/router';

//rxjs
import { Observable,of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

//Firebase
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore,AngularFirestoreDocument  } from '@angular/fire/firestore';

//Models
import { User } from '../model/user.model';
import { UserService } from './user.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  user$:Observable<User>
  constructor(
              private afAuth:AngularFireAuth,
              private afs:AngularFirestore,
              private router:Router,
              private currUser:UserService,
              private toastr:ToastrService
            ) 
    {
      this.user$ = this.afAuth.authState.pipe(
        switchMap(user => {
          if (user) {
            
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();

          }
          else {
            return of(null)
          }
        })
      )
    }

  async googleSignin(){
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  private updateUserData(user){
    //Sets user data to firestore on login

    const userRef:AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    let username = user.email
    const data ={
      uid: user.uid,
      email:user.email,
      displayName:username.replace(/@.*/,''),
      photoUrl:user.photoURL
    }

    this.afs.collection
    return userRef.set(data, {merge:true})

  }

  async signOut() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['/']);
    this.toastr.success('Logout Successful!!')
  }

          
}
