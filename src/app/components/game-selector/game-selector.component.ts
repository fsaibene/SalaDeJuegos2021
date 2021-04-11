import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-selector',
  templateUrl: './game-selector.component.html',
  styleUrls: ['./game-selector.component.css']
})
export class GameSelectorComponent implements OnInit {

    @Input() title: string = "";
    @Input() imgSrc: string = "";
    @Input() description: string = "";
    @Input() gameId: number = 0;
    constructor(public router: Router) { }

    ngOnInit(): void {
    }
    public selectGame(){
        console.log("select game " + this.gameId);
        let gameRoute = ""
        switch(this.gameId){
            case 0:
            gameRoute = "piedrapapeltijera";
            break;
            case 1:
            gameRoute = "tateti";
            break;
            case 2:
            gameRoute = "memotest";
            break;
            case 3:
            gameRoute = "mijuego";
            break;
        }
        this.router.navigate([gameRoute]);
    }
}
