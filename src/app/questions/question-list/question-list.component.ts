import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { Router } from '@angular/router';
import { Question } from 'src/app/model/question.model';
import { QuestionTagsService } from 'src/app/services/question-tags.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  constructor(private questionService:QuestionService,
              private router:Router,
              private qts:QuestionTagsService,
              private toastr:ToastrService) { }

  list:Question[];
  id:string;
  showLoadingAnimation=true;
  questionTag:Array<String>;
  category:string;


  ngOnInit() {
   this.questionTag=this.qts.getQuestionTags();
   this.loadQuestionList();

  }

  onSelect(id:string){
    this.router.navigate(['/home',id])
  }

  onSelectTag(id?:string){
    this.loadQuestionList(id);
 
  }


  loadQuestionList(id?:string){
    if (id != null){
       this.category = this.questionTag[id]
    }
    this.questionService.getQuestions(this.category).subscribe(
      (actionArray =>{
        this.showLoadingAnimation=false,
        this.list = actionArray.map(item =>{
          const data = item.payload.doc.data() as Question;
          const id = item.payload.doc.id;
          return{id,...data}
      }); 
      })
   );
   if (this.category == null){
    this.toastr.info('Displaying all question')
   }
   else {
    this.toastr.info('Now Displaying question from category: ' + this.category )
   }
   this.category = null
  }
}
