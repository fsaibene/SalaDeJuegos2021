import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { MemotestComponent } from './components/games/memotest/memotest.component';
import { MiJuegoComponent } from './components/games/mi-juego/mi-juego.component';
import { PiedraPapelTijeraComponent } from './components/games/piedra-papel-tijera/piedra-papel-tijera.component';
import { TatetiComponent } from './components/games/tateti/tateti.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ScoreResultComponent } from './components/score-result/score-result.component';
import { SurveyComponent } from './components/survey/survey.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'forgot-password', component:  ForgotPasswordComponent },
    { path: 'about-me', component: AboutMeComponent, canActivate: [AuthGuardService] },
    { path: 'chatroom', component: ChatRoomComponent, canActivate: [AuthGuardService] },
    { path: 'score-result', component: ScoreResultComponent, canActivate: [AuthGuardService] },
    { path: 'survey', component: SurveyComponent, canActivate: [AuthGuardService] },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
    { path: 'juego', loadChildren: () => import('../../src/app/modules/games/games.module').then(m => m.GamesModule)},
    { path: '', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
 }
 