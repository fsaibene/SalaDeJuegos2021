import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
    public squares: string[] = new Array<string>();
    public xIsNext: boolean = false;
    public winner: string = "";
    public gameEnded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
    constructor() {}
  
    public ngOnInit() {
      this.newGame();
    }
  
    public newGame(): void {
      this.squares = Array(9).fill(null);
      this.winner = "";
      this.xIsNext = true;
      this.gameEnded.next(false);
    }
  
    get player() {
      return this.xIsNext ? 'X' : 'O';
    }
  
    public makeMove(idx: number): void {
      if (!this.squares[idx]) {
        this.squares[idx] = this.player;
        this.xIsNext = !this.xIsNext;
      }
  
      if(!this.xIsNext) {
          this.makeMove(this.getRandomMoveIndex());
      }

      this.winner = this.calculateWinner();
      if(this.winner){
          this.gameEnded.next(true);
      }
    }
  
    public getRandomMoveIndex(): number {
        let indexes = new Array<number>();
        let count = 0;
        this.squares.forEach(element => {
            if(!element) {
                indexes.push(count);
            }
            count++
        });
        if(indexes.length > 0) {
            return indexes[Math.floor(Math.random() * indexes.length)];
        }
        console.log("revisar");
        return 0;
    }

    public calculateWinner(): string {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
          this.squares[a] &&
          this.squares[a] === this.squares[b] &&
          this.squares[a] === this.squares[c]
        ) {
          return this.squares[a];
        }
      }
      return "";
    }
}
