import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnswerService } from 'src/app/services/answer.service';
import { Answer } from 'src/app/model/answer.model';
import { Comment } from 'src/app/model/comment.model';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.scss']
})
export class AnswerListComponent implements OnInit {

  constructor(private route:ActivatedRoute,
              private answerService:AnswerService,
              private commentService:CommentService) { }

  public answerList:Answer[]=[
    {
      questionId:null,
      answerBody:null,
      answerUserId:null,
      answerDate:null
    }
  ]


  id:string
  currAnswerId:string
  showLoadingAnimation:boolean=true

  public commentList:Comment[]=[
    {
      parentId:null,
      commentBody:null,
      commentUserId:null,
      commentDate:null
    }
  ]

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.answerService.getAnswer(this.id).subscribe(
      (actionArray =>{
        this.showLoadingAnimation=false;
        this.answerList = actionArray.map(item =>{
          const currAnswerId = item.payload.doc.id;
          const data = item.payload.doc.data() as Answer;
          // this.loadComments(currAnswerId);
          return{...data}
        }); 
      })
    )

  }

  loadComments(id:string){
    this.commentService.getComments(id).subscribe(
      (actionArray =>{
        this.commentList = actionArray.map(item => {
          const commentData = item.payload.doc.data() as Comment;
          return{...commentData}
        })
      })
    );
  }

}
