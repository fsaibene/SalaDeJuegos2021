import { Columns } from "src/app/classes/columns";

export const PPT_COLUMNS: Array<Columns> = new Array<Columns>(
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

export const TATETI_COLUMNS: Array<Columns> = new Array<Columns>(
    new Columns("Resultado", "result", (data) => {
        switch(data){
        case 'won':
            return "Gano!";
        case 'draw':
            return "Empato!";
        case "lost":
            return "Perdio!"
        }
        return "nada";
    })
);

export const MEMOTEST_COLUMNS: Array<Columns> = new Array<Columns>(
    new Columns("Cant. de Errores", "errors", null)
);

export const BLACKJACK_COLUMNS: Array<Columns> = new Array<Columns>(
    new Columns("Puntaje Jugador", "playerScore", null),
    new Columns("Puntaje Dealer", "dealerScore", null),
    new Columns("Resultado", "gameState", (data) => {
        switch(data){
            case 'Win':
                return "Gano!";
            case 'Tie':
                return "Empato!";
            case "Lose":
                return "Perdio!";
            case "Bust":
                return "Se paso!"
            }
            return "nada";
    })
);