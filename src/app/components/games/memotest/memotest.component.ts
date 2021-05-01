import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Score } from 'src/app/classes/message';
import { ScoreSerivce } from 'src/app/services/score.service';
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
    public errorCount: number = 0;
    public foundCount: number = 0;
    private readonly maxFoundCount = 8;
    public showErrors: boolean = true;

    constructor(private scoreService: ScoreSerivce, private as: AuthService) { }

    public ngOnInit(): void {
        let obs = new BehaviorSubject<ICard[]>(getGameCards());
        this.lista = obs;
    }

    public seleccion(evt){
        if(evt){
            this.responseColor = "green";
            this.response = "Encontrados!"
            this.foundCount++;
            if(this.foundCount == this.maxFoundCount){
                this.won()
            }
        } else {
            this.responseColor = "red";
            this.response = "Intente de nuevo!"
            this.errorCount++;
        }
    }

    private won() {
        this.response = "Felicitaciones! Ganó! Con un total de " + this.errorCount + "errores.";
        this.responseColor = "#673ab7";
        this.showErrors = false;
        this.saveScore();

    }
    private saveScore(){
        let score = new Score();
        score.date = Date.now().toString();
        score.user = this.as.loggedUser.value;
        score.game = "memotest";
        let memoScore = {errors: this.errorCount };
        score.score = memoScore;
        this.scoreService.create(score);
    }
}