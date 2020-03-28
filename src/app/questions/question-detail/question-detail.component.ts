import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/model/question.model';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {

  constructor(private questionService:QuestionService,
              private route:ActivatedRoute) { }

  question:Question={
    questionTitle:null,
    questionBody:null,
    questionUserId:null,
    questionDate:null,
    questionSelTags:null
  }

  textData:string=''

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.questionService.loadQuestion(id).subscribe(
      (doc)=>{
          this.question = Object.assign({},{...(doc as object)})as Question;
          this.textData = this.question.questionBody
      }
    );
  }

}
