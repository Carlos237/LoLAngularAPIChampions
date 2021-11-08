import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampDetailComponent } from './components/champ-detail/champ-detail.component';
import { ChampsTableComponent } from './components/champs-table/champs-table.component';

const routes: Routes = [
  {path: 'home', component: ChampsTableComponent},
  {path: 'champDetail/:name', component: ChampDetailComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
