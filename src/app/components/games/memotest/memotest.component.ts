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
    public responseColor: string = "black";
    public response: string = "Elija 2 cartas!";

    constructor() { }

    ngOnInit(): void {
        let obs = new BehaviorSubject<ICard[]>(getGameCards());
        this.lista = obs;
    }
    public seleccion(evt){
        if(evt){
            this.responseColor = "green";
            this.response = "Encontrados!"
        } else {
            this.responseColor = "red";
            this.response = "Intente de nuevo!"
        }
    }

}
