import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot()
  ],
  exports:[
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MarkdownModule
]
})
export class SharedModule { }
