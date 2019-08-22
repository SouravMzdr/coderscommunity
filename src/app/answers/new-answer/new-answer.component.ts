import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-answer',
  templateUrl: './new-answer.component.html',
  styleUrls: ['./new-answer.component.scss']
})
export class NewAnswerComponent implements OnInit {

  constructor(private fb:FormBuilder,
              private route:ActivatedRoute,
              private afs:AngularFirestore,
              public auth:AuthService,
              public toastr:ToastrService) { }

  public textData='';
  myDate = Date.now();
  answerForm:FormGroup
  id:string;
  signInMessage:boolean=false;
         

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.answerForm = this.fb.group({
      questionId: new FormControl(null,Validators.required),
      answerBody: new FormControl(null,Validators.required),
      answerUserId: new FormControl(null,Validators.required),
      answerDate: new FormControl(null,Validators.required)
    })
    this.auth.user$.subscribe(
      (value) => {
        if (value != null){
          this.answerForm.patchValue({
            questionId:this.id,
            answerUserId:value.displayName,
            answerDate:this.myDate
          }); 
          this.signInMessage = false;
          }
        else {
          this.signInMessage = true;
        }
      }
    )
  }

  onSubmit(){
    if(this.answerForm.valid){
      let values=this.answerForm.value;
      this.afs.collection('answers').add({...values})
      this.answerForm.reset();  
      this.toastr.success('Answer submitted successfully');

    }
    this.textData = ''
  }
}
