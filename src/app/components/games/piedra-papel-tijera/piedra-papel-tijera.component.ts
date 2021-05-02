import { Component, OnInit } from '@angular/core';

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

    constructor() { }

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

    private win(): void {
        this.response = "Ganaste :D";
        this.responseColor = "green";
    }

    private lose(): void {
        this.response = "Perdiste D:";
        this.responseColor = "red";
    }

    private draw(): void {
        this.response = "Empate!! ._.";
        this.responseColor = "#673ab7";
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
            this.win();
            break;
          // Gana la computadora
          case 'rp':
          case 'ps':
          case 'sr':
            this.lose();
            break;
          // Empatamos
          case 'rr':
          case 'pp':
          case 'ss':
            this.draw();
            break;
        }
    }

    private getComputerChoice(): string {
        const choices = ['r', 'p', 's']; // Roca, Pape, Tijeras
        const randomChoice = Math.floor(Math.random() * 3);
        return choices[randomChoice];
      }

}
