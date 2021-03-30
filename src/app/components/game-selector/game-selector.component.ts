import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-selector',
  templateUrl: './game-selector.component.html',
  styleUrls: ['./game-selector.component.css']
})
export class GameSelectorComponent implements OnInit {

    @Input() title: string = "";
    @Input() imgSrc: string = "";
    @Input() description: string = "";
    constructor() { }

    ngOnInit(): void {
    }

}
