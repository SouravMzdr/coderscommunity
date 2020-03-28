import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { SharedModule } from '../shared/shared.module';
import { AskQuestionRoutingModule } from './ask-question.routing';


@NgModule({
  declarations: [QuestionComponent],
  imports: [
    // CommonModule
    SharedModule,
    AskQuestionRoutingModule
 ],
})
export class AskQuestionModule { }
