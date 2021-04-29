import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Message } from 'src/app/classes/message';
import { ChatserviceService } from 'src/app/services/chatservice.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit, AfterViewChecked {
    emailUsuario : string = '';
    idUsuario : string = '';  
    listadoMensajes : Array<Message> = [];
    loggedUserName: string = "";
    @ViewChild('scrollMe', {static: true}) myScrollContainer: ElementRef | undefined;

    constructor(private db: ChatserviceService, private auth: AuthService) { 
    }
    ngAfterViewChecked() {        
        this.scrollToBottom();        
    } 
    scrollToBottom(): void {
        try {
            if(this.myScrollContainer){
                this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
            }
        } catch(err) { }                 
    }
    public getDate(numero: any) {
        return new Date(+numero).toLocaleTimeString();
    }

    public isMyMessage(name: string) {
        return name == this.loggedUserName;
    }

    public getUserName(name: string) {
        if(this.isMyMessage(name)){
            return "Tú";
        }
        return name;
    }

    public ngOnInit(): void {
        this.loggedUserName = this.auth.loggedUser.value;
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
            this.scrollToBottom();
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
