import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [DatePipe]
})
export class ContactComponent implements OnInit {

  constructor(private auth:AuthService,
              private afs:AngularFirestore,
              private fb:FormBuilder,
              private router:Router,
              private toastr:ToastrService,
              private datePipe:DatePipe) { }

    feedbackForm:FormGroup

    currDate=Date.now();

  ngOnInit() {

    this.feedbackForm=this.fb.group({
      feedbackName:new FormControl(null,Validators.required),
      feedbackEmail:new FormControl(null,[Validators.required,Validators.email]),
      feedbackSubject:new FormControl(null,Validators.required),
      feedbackMessage:new FormControl(null,Validators.required),
      feedbackDate:new FormControl(null,Validators.required),
      feedbackUserId:new FormControl(null),
      feedbackUserName:new FormControl(null),
    })
    this.auth.user$.subscribe(
      (value) => {
        if(value != null){
          this.feedbackForm.patchValue({
            feedbackUserId:value.uid,
            feedbackUserName:value.displayName,
            feedbackDate:this.datePipe.transform(this.currDate,'dd-MM-yyyy')
          })
        }
       if(value == null){
        this.feedbackForm.patchValue({
          feedbackUserId:null,
          feedbackUserName:null,
          feedbackDate:this.datePipe.transform(this.currDate,'dd-MM-yyyy')
        })
       }
      }
    )
  }

  onSubmit(){
    if(this.feedbackForm.valid){
      let values=this.feedbackForm.value;
      this.afs.collection('feedback').add({...values})
      this.router.navigate(['/']) 
      this.toastr.success('Feedback Submitted Successfully');
    }
  }

}
