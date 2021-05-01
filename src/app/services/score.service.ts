import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Message, Score } from '../classes/message';

@Injectable({
  providedIn: 'root'
})
export class ScoreSerivce{
    public dbpath: string = "/score";
    protected menssagesRef: AngularFirestoreCollection<Score>;
    
    constructor(private db: AngularFirestore) {
        this.menssagesRef = db.collection(this.dbpath);
    }

    public getAll(): AngularFirestoreCollection<Score> {
        return this.menssagesRef;
    }

    public create(score: Score) {
        return this.menssagesRef.add({...score});
    }
}
