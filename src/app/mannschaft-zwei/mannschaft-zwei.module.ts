import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MannschaftZweiComponent} from './mannschaft-zwei.component';
import {MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [MannschaftZweiComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    FlexLayoutModule
  ]
})
export class MannschaftZweiModule {
}
