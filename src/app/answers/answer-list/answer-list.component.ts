import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnswerService } from 'src/app/services/answer.service';
import { Answer } from 'src/app/model/answer.model';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.scss']
})
export class AnswerListComponent implements OnInit {

  constructor(private route:ActivatedRoute,
              private answerService:AnswerService) { }

  public answerList:Answer[]=[
    {
      questionId:null,
      answerBody:null,
      answerUserId:null,
      answerDate:null
    }
  ]

  id:string
  showLoadingAnimation:boolean=true

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.answerService.getAnswer(this.id).subscribe(
      (actionArray =>{
        this.showLoadingAnimation=false;
        this.answerList = actionArray.map(item =>{
        const data = item.payload.doc.data() as Answer;
        return{...data}
      }); 
      })
    )

  //   this.answerService.getAnswer(this.id).subscribe(
  //     (actionArray =>{
  //       this.answerList = actionArray.map(item =>{
  //       const data = item.payload.doc.data() as Answer;
  //       return{...data}
  //     }); 
  //     })
  //  );
  }

}
