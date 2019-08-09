import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private afs:AngularFirestore) { }

  getQuestions(id?:string){
    if (id!=null){
      return this.afs.collection('questions',ref => ref.where('questionSelTags','array-contains',id)).snapshotChanges();
    }
    else {
      return this.afs.collection('questions').snapshotChanges();

    }
  }

  loadQuestion(id:string){
    return this.afs.collection('questions').doc(id).valueChanges();
    
  }
}
