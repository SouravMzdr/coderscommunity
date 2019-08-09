import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionTagsService {

  tags:Array<string>=['Linux','Web-dev','App-dev','General programming','Networking','others']

  constructor() { }

  getQuestionTags(){
    return this.tags
  }
}
