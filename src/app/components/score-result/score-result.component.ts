import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Columns } from 'src/app/classes/columns';
import { Score } from 'src/app/classes/message';
import { ScoreSerivce } from 'src/app/services/score.service';
import { BLACKJACK_COLUMNS, MEMOTEST_COLUMNS, PPT_COLUMNS, TATETI_COLUMNS } from './extra-columns';

@Component({
  selector: 'app-score-result',
  templateUrl: './score-result.component.html',
  styleUrls: ['./score-result.component.css']
})
export class ScoreResultComponent implements OnInit {
    public selectedGame: string = "ppt";
    public listadoMensajes: any[];
    public pptExtraColumns: Array<Columns> = PPT_COLUMNS;
    public tatetiExtraColumns: Array<Columns> = TATETI_COLUMNS;
    public memotestExtraColumns: Array<Columns> = MEMOTEST_COLUMNS;
    public blackjackExtraColumns: Array<Columns> = BLACKJACK_COLUMNS;

    public pptScores$: Observable<Score[]>;
    public tatetiScores$: Observable<Score[]>;
    public memotestScores$: Observable<Score[]>;
    public blackjackScores$: Observable<Score[]>;
    
    constructor(public scoreService: ScoreSerivce) { 
    }

    private getListFromService(collectionName: string){
        return this.scoreService.getAll().valueChanges().pipe(map(values => values.filter(p => p.game == collectionName)));
    }

    public ngOnInit(): void {
        this.pptScores$ = this.getListFromService("ppt");
        this.tatetiScores$ = this.getListFromService("tateti");
        this.memotestScores$ = this.getListFromService("memotest");
        this.blackjackScores$ = this.getListFromService("blackjack");
    }

    public isSelectedGame(game: string){
        return this.selectedGame == game;
    }

    public selectGame(game: string) {
        this.selectedGame = game;
    }

    public getColumnsNumber(arr: Array<Columns>): number
    {
        return arr.length + 2;
    }
}
