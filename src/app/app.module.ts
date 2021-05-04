import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { drawableModuleComponents } from './modules/app-components.modules';
import { AngularMaterialModule } from './modules/angular-material.modules';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { firebaseConfig } from './firebase-config/firebase-config';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AuthService } from './auth/auth.service';
import { GameSelectorComponent } from './components/game-selector/game-selector.component';
import { GameHomeComponent } from './components/game-home/game-home.component';
import { AuthGuardService } from './services/auth-guard.service';
import { PiedraPapelTijeraComponent } from './components/games/piedra-papel-tijera/piedra-papel-tijera.component';
import { MemotestComponent } from './components/games/memotest/memotest.component';
import { TatetiComponent } from './components/games/tateti/tateti.component';
import { MiJuegoComponent } from './components/games/mi-juego/mi-juego.component';
import { BoardComponent } from './components/games/tateti/board/board.component';
import { SquareComponent } from './components/games/tateti/square/square.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { CardComponent } from './components/games/memotest/card/card.component';
import { ChessboardComponent } from './components/games/memotest/chessboard/chessboard.component';
import { ButtonPanelComponent } from './components/blackjack/button-panel/button-panel.component';
import { CardViewComponent } from './components/blackjack/card-view/card-view.component';
import { FlipComponent } from './components/blackjack/flip/flip.component';
import { HandComponent } from './components/blackjack/hand/hand.component';
import { ScoreResultComponent } from './components/score-result/score-result.component';
import { ScoreListComponent } from './components/score-list/score-list.component';
import { SurveyComponent } from './components/survey/survey.component';
import { SurveyButtonComponent } from './components/survey/survey-button/survey-button.component';
import { ErrorComponent } from './components/survey/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    drawableModuleComponents,
    GameSelectorComponent,
    GameHomeComponent,
    PiedraPapelTijeraComponent,
    MemotestComponent,
    TatetiComponent,
    MiJuegoComponent,
    BoardComponent,
    SquareComponent,
    ChatRoomComponent,
    CardComponent,
    ChessboardComponent,
    ButtonPanelComponent,
    CardViewComponent,
    FlipComponent,
    HandComponent,
    ScoreResultComponent,
    ScoreListComponent,
    SurveyComponent,
    SurveyButtonComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
