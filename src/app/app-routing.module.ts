import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGameComponent } from './components/main-game/main-game.component';
import { PlayGameComponent } from './components/play-game/play-game.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'playGame', pathMatch: 'full'
  },
  {
    path: 'testGames', component: MainGameComponent
  },
  {
    path: 'playGame', component: PlayGameComponent
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
