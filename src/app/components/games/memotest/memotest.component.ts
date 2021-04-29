import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICard } from './interface';
import { getGameCards } from './model/card';

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css']
})
export class MemotestComponent implements OnInit {
    public lista: any;

    constructor() { }

    ngOnInit(): void {
        let asd = getGameCards();
        let obs = new BehaviorSubject<ICard[]>(null);
        obs.next(asd);
        this.lista = obs;
    }

}
