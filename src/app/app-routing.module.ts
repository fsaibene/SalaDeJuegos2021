import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { MemotestComponent } from './components/games/memotest/memotest.component';
import { MiJuegoComponent } from './components/games/mi-juego/mi-juego.component';
import { PiedraPapelTijeraComponent } from './components/games/piedra-papel-tijera/piedra-papel-tijera.component';
import { TatetiComponent } from './components/games/tateti/tateti.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'forgot-password', component:  ForgotPasswordComponent },
    { path: 'about-me', component: AboutMeComponent, canActivate: [AuthGuardService] },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
    { path: 'tateti', component: TatetiComponent, canActivate: [AuthGuardService] },
    { path: 'piedrapapeltijera', component: PiedraPapelTijeraComponent, canActivate: [AuthGuardService] },
    { path: 'memotest', component: MemotestComponent, canActivate: [AuthGuardService] },
    { path: 'mijuego', component: MiJuegoComponent, canActivate: [AuthGuardService] },
    { path: '', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
 }
 