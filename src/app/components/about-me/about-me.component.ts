import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  public showGameInfo: boolean = false;
  constructor() { }

  public aboutMe(choice: string) {
    this.showGameInfo = choice != "me";
  }

}
