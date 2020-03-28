import { NgModule } from '@angular/core';
import { RouterModule ,Routes } from '@angular/router';
import { QuestionListComponent } from './questions/question-list/question-list.component';
import { QuestionDetailComponent } from './questions/question-detail/question-detail.component';
import { AskQuestionModule } from './ask-question/ask-question.module';
// import { QuestionComponent } from './ask-question/question/question.component';
// import { AuthGuard } from './services/auth.guard';
// import { ContactComponent } from './contact/contact.component';
// import { AuthService } from './services/auth.service';

const appRoutes: Routes=[
    {path:'home',component:QuestionListComponent},
    {path:'home/:id',component:QuestionDetailComponent},
    // { path: 'home/:id', loadChildren: () => import('./questions/question-detail/question-detail.component').then(m => m.QuestionDetailComponent) },
    // {path:'askquestion',component:QuestionComponent , canActivate:[AuthGuard]},
    {
        path :'askquestion',
        loadChildren:() => import('./ask-question/ask-question.module').then(m=> m.AskQuestionModule),
    },

    // {path:'contact',component:ContactComponent,}
    { 
        path: 'contact', 
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) 
    },
    // {
    //     path: 'contact',
    //     loadChildren: './contact/contact.module#ContactModule'
    // }
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },




]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}