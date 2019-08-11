import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private afs:AngularFirestore) { }

  // getComments(id:string){
  //   return this.afs.collection('comments', ref => ref.where('parentId', '==', id) ).snapshotChanges();
  // }

  getComments(id:string){

    return this.afs.collection('comments',ref => ref.where('parentId', '==', id) ).snapshotChanges();
  }
}
