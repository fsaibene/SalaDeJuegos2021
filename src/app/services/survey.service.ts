import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Survey } from '../classes/message';

@Injectable({
  providedIn: 'root'
})
export class SurveyService{
    public dbpath: string = "/survey";
    protected menssagesRef: AngularFirestoreCollection<Survey>;
    
    constructor(private db: AngularFirestore) {
        this.menssagesRef = db.collection(this.dbpath);
    }

    public getAll(): AngularFirestoreCollection<Survey> {
        return this.menssagesRef;
    }

    public create(survey: Survey) {
        return this.menssagesRef.add({...survey});
    }
}
