import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MannschaftEinsModule} from './mannschaft-eins/mannschaft-eins.module';
import {MannschaftZweiModule} from './mannschaft-zwei/mannschaft-zwei.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MannschaftEinsModule,
    MannschaftZweiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
