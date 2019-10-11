import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material';
import {MannschaftEinsComponent} from './mannschaft-eins.component';

@NgModule({
  declarations: [
    MannschaftEinsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule
  ]
})
export class MannschaftEinsModule {
}
