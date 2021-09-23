import { NgModule } from '@angular/core';
import { TatetiComponent } from 'src/app/components/games/tateti/tateti.component';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { MemotestComponent } from 'src/app/components/games/memotest/memotest.component';
import { MiJuegoComponent } from 'src/app/components/games/mi-juego/mi-juego.component';
import { RouterModule, Routes } from '@angular/router';
import { HangedComponent } from 'src/app/components/games/hanged/hanged.component';

const routes: Routes = [
    { path: 'tateti', component: TatetiComponent, canActivate: [AuthGuardService] },
    { path: 'hanged', component: HangedComponent, canActivate: [AuthGuardService] },
    { path: 'memotest', component: MemotestComponent, canActivate: [AuthGuardService] },
    { path: 'mijuego', component: MiJuegoComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class GamesModule { }
