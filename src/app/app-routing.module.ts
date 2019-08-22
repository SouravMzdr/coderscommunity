import { NgModule } from '@angular/core';
import { RouterModule ,Routes } from '@angular/router';
import { QuestionListComponent } from './questions/question-list/question-list.component';
import { QuestionDetailComponent } from './questions/question-detail/question-detail.component';
import { QuestionComponent } from './questions/question/question.component';
import { AuthGuard } from './services/auth.guard';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes=[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:QuestionListComponent},
    {path:'home/:id',component:QuestionDetailComponent},
    {path:'askquestion',component:QuestionComponent , canActivate:[AuthGuard]},
    {path:'contact',component:ContactComponent,}


]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}