import { Component, OnInit, Input, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { GameStateService } from 'src/app/services/blackjack/game-state.service';
import { Card } from '../card';
import { CardViewComponent } from '../card-view/card-view.component';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {
  @Input() dealer:boolean = false;
  @ViewChildren(CardViewComponent) cardComponents: QueryList<CardViewComponent>;

  public cards: Card[] = [];

  constructor(
    private gameStateService: GameStateService,
    private cdRef : ChangeDetectorRef
  ) {}

  ngOnInit() {
    if (this.dealer) {
      this.cards = this.gameStateService.dealerCards;
    } else {
      this.cards = this.gameStateService.playerCards;
    }
  }

  ngAfterViewInit() {
    if (this.dealer) {
      this.cardComponents.changes.subscribe(
        () =>{
          if ( this.cardComponents.length === 2 ) {
            this.cardComponents.first.rotate();
            this.cdRef.detectChanges(); 
          }
        }
      )
    }
  }

}
