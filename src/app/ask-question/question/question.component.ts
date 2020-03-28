import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { QuestionTagsService } from 'src/app/services/question-tags.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  constructor(public auth:AuthService,
              private fb:FormBuilder,
              private afs:AngularFirestore,
              private qts:QuestionTagsService,
              private toastr:ToastrService,
              private route:Router) { }

  public textData='';
  myDate = Date.now();
  questionForm:FormGroup
  showLoadingAnimation=true;
  
  // tags:Array<string>=['Linux','Web-dev','App-dev','General programming','Networking','others']

  tags = this.qts.getQuestionTags();

    
  
  selectedTagsValues =[];     
  tagsError:boolean = true;           

  ngOnInit() {
    this.questionForm = this.fb.group({
      questionTitle: new FormControl(null,Validators.required),
      questionBody: new FormControl(null,Validators.required),
      questionTags: this.addTagsControls(),
      questionUserId: new FormControl(),
      questionDate: new FormControl(null,Validators.required)
    })
    this.auth.user$.subscribe(
      (value) => {
          this.questionForm.patchValue({
            questionUserId:value.displayName,
            questionDate:this.myDate
        }); 
        this.showLoadingAnimation=false;
      }
    )
  }

  addTagsControls(){
    const arr = this.tags.map(element =>{
      return this.fb.control(false)
    });

    return this.fb.array(arr)
  }

  get tagsArray(){
    return <FormArray>this.questionForm.get('questionTags');
  }

  getSelectedTagsValue(){
    this.selectedTagsValues = [];
    this.tagsArray.controls.forEach((control, i)=> {
      if (control.value) {
        this.selectedTagsValues.push(this.tags[i])
      }
    })

    // console.log(this.selectedTagsValues);

    this.tagsError = this.selectedTagsValues.length > 0 ? false : true
  }

  checkTagsControlTouched(){
    let flag = false;
    this.tagsArray.controls.forEach(control => {
      if (control.touched){
        flag = true;
      }
    })

    return flag;
  }
  onSubmit(){

    const questionSelTags = this.selectedTagsValues;
    if(this.questionForm.valid && !this.tagsError){
      // this.questionForm.removeControl('questionTags')
      let values=this.questionForm.value;
      delete values.questionTags;
      // console.log({...values,questionSelTags})
      this.afs.collection('questions').add({...values,questionSelTags})
      this.questionForm.reset();
      this.route.navigate(['/'])
      this.toastr.success('Question submitted successfully');
    }

    

  }

}

