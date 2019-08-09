import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.scss']
})
export class NewQuestionComponent implements OnInit {

  constructor(public auth:AuthService,
              public route:Router) { }

  ngOnInit() {
  }

  askQuestion(){
    this.route.navigate(['/askquestion'])
  }

}
