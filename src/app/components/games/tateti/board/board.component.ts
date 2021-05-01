import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Score } from 'src/app/classes/message';
import { ScoreSerivce } from 'src/app/services/score.service';

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
  
    constructor(private scoreService: ScoreSerivce, private authService: AuthService) {}
  
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
          let randomMove = this.getRandomMoveIndex();
          if(randomMove != -1) {
              this.makeMove(randomMove);
          } else {
                this.winner = this.calculateWinner();
          } 
      }

      this.winner = this.calculateWinner();
      if(this.winner){
          if(idx != -1 && !this.gameEnded.value) {
              this.saveScore();
          }
          this.gameEnded.next(true);
      }
    }

    private saveScore() {
        let score = new Score();
        score.game = "tateti";
        score.date = Date.now().toString();
        score.user = this.authService.loggedUser.value;
        let resultWon = this.getResult(); 
        score.score = {
            result: resultWon
        };
        console.log("a ver q pasa")
        this.scoreService.create(score);
    }

    private getResult(){
        if(this.winner == "draw"){
            return "draw";
        } else if(this.winner == "X") {
            return "won";
        }
        return "lost";
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
        if(count == 9) {
            return -1
        }
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
      let leftSquares = this.squares.filter(s => s != "O" && s != "X");
      if(leftSquares.length == 0){
          return "draw";
      }
      return "";
    }
}
