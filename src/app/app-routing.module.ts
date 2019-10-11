import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MannschaftEinsComponent} from './mannschaft-eins/mannschaft-eins.component';
import {MannschaftZweiComponent} from './mannschaft-zwei/mannschaft-zwei.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '1te'
  },
  {
    path: '1te', component: MannschaftEinsComponent
  },
  {
    path: '2te', component: MannschaftZweiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  public static ROUTING_TIME = 20_000;
}
