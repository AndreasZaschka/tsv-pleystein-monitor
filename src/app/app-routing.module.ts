import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MannschaftEinsComponent} from './mannschaft-eins/mannschaft-eins.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '1te'
  },
  {
    path: '1te', component: MannschaftEinsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
