import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Columns } from 'src/app/classes/columns';
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
    pptExtraColumns: Array<Columns> = new Array<Columns>();
    constructor(public scoreService: ScoreSerivce) { 
        this.pptExtraColumns.push(
            new Columns("Seleccion Jugador", "userSelection", null),
            new Columns("Seleccion PC", "computerSelection", null),
            new Columns("Resultado", "gameResult", (data) => {
                    switch(data){
                        case 'win':
                            return "Gano!";
                        case 'draw':
                            return "Empato!";
                        case "lose":
                            return "Perdio!"
                    }
                    return "nada";
                })
            );
    }

    public ngOnInit(): void {
        this.pptScores$ = this.scoreService.getAll().valueChanges().pipe(map(values => values.filter(p => p.game == "ppt")))
    }

    public isSelectedGame(game: string){
        return this.selectedGame == game;
    }

    public selectGame(game: string) {
        this.selectedGame = game;
    }
}
