import { NgModule } from '@angular/core';
import { RouterModule ,Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { AuthGuard } from '../shared/auth.guard';

const appRoutes: Routes=[
    {path:'',
    component:QuestionComponent,
    canActivate:[AuthGuard]
  },
]

@NgModule({
    imports:[RouterModule.forChild(appRoutes)],
    exports:[RouterModule]
})

export class AskQuestionRoutingModule{

}