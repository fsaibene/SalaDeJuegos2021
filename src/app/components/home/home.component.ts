import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'src/app/classes/message';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public messageText: string = "";
    constructor(public router: Router, private msgService: MessagesService) {
        
     }

    ngOnInit(): void {
    }

    public aboutMe(): void {
        this.router.navigate(['about-me']);
    }

    public addMessage(): void {
        let msg = new Message();
        msg.text = this.messageText;
        this.msgService.create(msg).then(result => {
            console.log(result);
        }).catch(e => console.log(e))
    }
}
