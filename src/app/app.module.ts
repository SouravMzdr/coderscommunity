import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewQuestionComponent } from './questions/new-question/new-question.component';
import { QuestionListComponent } from './questions/question-list/question-list.component';
import { QuestionDetailComponent } from './questions/question-detail/question-detail.component';
import { AnswerListComponent } from './answers/answer-list/answer-list.component';
import { NewAnswerComponent } from './answers/new-answer/new-answer.component';
import { NavbarComponent } from './navbar/navbar.component';


import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';

//Angular Firebase

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { LoadingAnimationComponent } from './ui/loading-animation/loading-animation.component';
import { QuestionComponent } from './questions/question/question.component';

// import { ReactiveFormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms';

import { MarkdownModule } from 'ngx-markdown';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { ShortenPipe } from './pipe/shorten.pipe';
import { FooterComponent } from './footer/footer.component';
import { NewCommentComponent } from './comments/new-comment/new-comment.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { SharedModule } from './shared/shared.module';
// import { ContactComponent } from './contact/contact.component';
// import { ContactModule } from './contact/contact.module';


@NgModule({
  declarations: [
    AppComponent,
    NewQuestionComponent,
    QuestionListComponent,
    QuestionDetailComponent,
    AnswerListComponent,
    NewAnswerComponent,
    NavbarComponent,
    LoadingAnimationComponent,
    QuestionComponent,
    ShortenPipe,
    FooterComponent,
    NewCommentComponent,
    CommentListComponent
    // ContactComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    // ContactModule,
    // ReactiveFormsModule,
    // FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MarkdownModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule, 
    ToastrModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
