import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { take, map, tap } from 'rxjs/operators';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth:AuthService,
              private router:Router,
              private toastr:ToastrService){}

  canActivate(next,state): Observable<boolean>{
    return this.auth.user$.pipe(
      take(1),
      map(user => !! user),
      tap(loggedIn => {
        if(!loggedIn){
          this.router.navigate(['/']);
          this.toastr.warning('Please Log in to ask a question')
        }
      })
    );
  }
  
}
