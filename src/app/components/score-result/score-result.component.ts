import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Score } from 'src/app/classes/message';
import { ScoreSerivce } from 'src/app/services/score.service';

@Component({
  selector: 'app-score-result',
  templateUrl: './score-result.component.html',
  styleUrls: ['./score-result.component.css']
})
export class ScoreResultComponent implements OnInit {
    public selectedGame: string = "ppt";
    listadoMensajes: any[];
    pptScores$: Observable<Score[]>;
    constructor(public scoreService: ScoreSerivce) { }

    public ngOnInit(): void {
        this.pptScores$ = this.scoreService.getAll().valueChanges().pipe(map(values => values.filter(p => p.game == "ppt")))
    }

    public getDate(numero: any) {
        return new Date(+numero).toLocaleTimeString();
    }

    public isSelectedGame(game: string){
        return this.selectedGame == game;
    }

    public selectGame(game: string) {
        this.selectedGame = game;
    }
}
