import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
    @Input() value: string = '';
    @Input() gameEnded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor() { }

    ngOnInit(): void {
    }

}
