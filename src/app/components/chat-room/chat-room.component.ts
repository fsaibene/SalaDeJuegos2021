import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Message } from 'src/app/classes/message';
import { ChatserviceService } from 'src/app/services/chatservice.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
    emailUsuario : string = '';
    idUsuario : string = '';  
    listadoMensajes : Array<Message> = [];
  
    constructor(private db: ChatserviceService, private auth: AuthService) { 
    }
    public getDate(numero: any) {
        return new Date(+numero).toLocaleString();
    }
    ngOnInit(): void {
        this.db.getAll().valueChanges().subscribe((mensajes:any) => {
        let auxListadoMensaje = new Array();
        for (let index = 0; index < mensajes.length; index++) {
            let currentMsg = mensajes[index];
            let msg = new Message();
            msg.date = currentMsg["date"];
            msg.user = currentMsg["user"];
            msg.text = currentMsg["text"];
            auxListadoMensaje.push(msg);

        }
        console.log(this.listadoMensajes);  
        this.listadoMensajes = auxListadoMensaje.sort((a, b) => a.date.localeCompare(b.date));
        })
    }
  
    inputMensaje : string = '';
    mensaje : string = '';
    fechaMsj : string= '';
  
    public enviarMensaje(){
        this.fechaMsj = new Date().toLocaleString();
        let newMsg = new Message();
        newMsg.date = Date.now().toString();
        newMsg.text = this.inputMensaje;
        newMsg.user = this.auth.loggedUser.value;
        this.db.create(newMsg).then(resp => {
            console.log(resp);
        })

        this.inputMensaje = '';

    }
  

}
