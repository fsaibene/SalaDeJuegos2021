import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Message } from '../classes/message';

@Injectable({
  providedIn: 'root'
})
export class ChatserviceService{
    public dbpath: string = "/chatroom";
    protected menssagesRef: AngularFirestoreCollection<Message>;
    
    constructor(private db: AngularFirestore) {
        this.menssagesRef = db.collection(this.dbpath);
    }

    public getAll(): AngularFirestoreCollection<Message> {
        return this.menssagesRef;
    }

    public create(message: Message) {
        return this.menssagesRef.add({...message});
    }
}
