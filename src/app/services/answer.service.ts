import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Answer } from '../model/answer.model';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private afs:AngularFirestore) { }

  answer:Answer;

  getAnswer(id:string){
    return this.afs.collection('answers', ref => ref.where('questionId', '==', id) ).snapshotChanges();
  }
}
