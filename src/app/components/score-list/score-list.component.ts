import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatGridList } from '@angular/material/grid-list';
import { Observable } from 'rxjs';
import { Columns } from 'src/app/classes/columns';
import { Score } from 'src/app/classes/message';

@Component({
  selector: 'app-score-list',
  templateUrl: './score-list.component.html',
  styleUrls: ['./score-list.component.css']
})
export class ScoreListComponent implements OnInit {
    @Input() lista$: Observable<Score[]>;
    @Input() extraColumns: Array<Columns>;
    cantCols: number;

    @ViewChild('grid', {static : true}) grid: MatGridList;

    constructor() { 
    }

    ngOnInit(): void {
        this.grid.cols =this.extraColumns.length + 2;
    }
    
    public formatData(column: Columns, score: Score){
        if(column.formatter){
            return column.formatter(score.score[column.field]);
        }
        return score.score[column.field];
    }

    public getDate(numero: any) {
        return new Date(+numero).toLocaleString();
    }
}
