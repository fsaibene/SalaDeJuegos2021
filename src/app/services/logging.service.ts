import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Message, UserLogged } from '../classes/message';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
    private readonly dbpath: string = "/log-usuarios";
    private menssagesRef: AngularFirestoreCollection<UserLogged>;
    
    constructor(private db: AngularFirestore) {
        this.menssagesRef = db.collection(this.dbpath);
    }

    public getAll(): AngularFirestoreCollection<UserLogged> {
        return this.menssagesRef;
    }

    public create(userLogged: UserLogged) {
        return this.menssagesRef.add({...userLogged});
    }
}
