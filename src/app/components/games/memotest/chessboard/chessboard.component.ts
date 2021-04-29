import { Component, Input } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { ICard } from '../interface'

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.css']
})
export class ChessboardComponent {
    @Input() cards$: BehaviorSubject<ICard[]>
    public flipCard(card){

            card.flipped = !card.flipped;
            let filppedCards = this.cards$.value.filter(carta => carta.flipped && !carta.discovered);
            if(filppedCards.length != 1){
                if(filppedCards.length == 2){
                    this.checkSuccess(filppedCards);
                } else {
                    setTimeout(() => { card.flipped = false }, 1000);
                }
            }
        }
        checkSuccess(filppedCards: ICard[]) {
            setTimeout(()=> {
                
                if(filppedCards){
                    if(filppedCards[0].name == filppedCards[1].name){
                        filppedCards[0].discovered = true;
                        filppedCards[1].discovered = true;
                        return true;
                    }
                    filppedCards[0].flipped = false;
                    filppedCards[1].flipped = false;
                    filppedCards[0].discovered = false;
                    filppedCards[1].discovered = false;
                }
                return false;
            }, 500);
    }
}
