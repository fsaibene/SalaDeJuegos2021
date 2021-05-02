import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Score } from 'src/app/classes/message';
import { ScoreSerivce } from 'src/app/services/score.service';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {
    public response: string = "";
    public oponentSelection: string = "";
    public userSelection: string = "";
    public responseColor: string = "red";

    constructor(private authService: AuthService, private scoreService: ScoreSerivce) { }

    ngOnInit(): void {

    }

    private getItemName(choice: string): string {
        switch (choice){
            case 's':
                return "Tijeras";
            case 'r':
                return "Piedra";
            case 'p':
                return "Papel";
        }
        return "nananana";
    }

    private win(gameResult: string, userSelection: string, computerSelection: string): void {
        this.response = "Ganaste :D";
        this.responseColor = "green";
        this.saveScore(gameResult, userSelection, computerSelection);
    }

    private lose(gameResult: string, userSelection: string, computerSelection: string): void {
        this.response = "Perdiste D:";
        this.responseColor = "red";
        this.saveScore(gameResult, userSelection, computerSelection);
    }

    private draw(gameResult: string, bothSelection: string): void {
        this.response = "Empate!! ._.";
        this.responseColor = "#673ab7";
        this.saveScore(gameResult, bothSelection, bothSelection);
    }

    private saveScore(gameResult: string, userSelection: string, computerSelection: string): void{
        let score = new Score();
        score.date = Date.now().toString();
        score.game = "ppt";
        score.user = this.authService.loggedUser.value;
        score.score = {
            gameResult: gameResult,
            userSelection: userSelection,
            computerSelection: computerSelection
        };
        this.scoreService.create(score);
    }

    public play(userChoice: string): void {
        this.userSelection = this.getItemName(userChoice);
        let computerChoice = this.getComputerChoice();
        this.oponentSelection = this.getItemName(computerChoice);
        const playUserComp = userChoice + computerChoice;
        switch (playUserComp){
          // Ganamos
          case 'rs':
          case 'sp':
          case 'pr':
            this.win("win", this.userSelection, this.oponentSelection);
            break;
          // Gana la computadora
          case 'rp':
          case 'ps':
          case 'sr':
            this.lose("lose", this.userSelection, this.oponentSelection);
            break;
          // Empatamos
          case 'rr':
          case 'pp':
          case 'ss':
            this.draw("draw", this.userSelection);
            break;
        }
    }

    private getComputerChoice(): string {
        const choices = ['r', 'p', 's']; // Roca, Pape, Tijeras
        const randomChoice = Math.floor(Math.random() * 3);
        return choices[randomChoice];
      }

}
