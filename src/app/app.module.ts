import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RacesComponent } from './races/races.component';
import { RaceService } from './races/race.service';
import { RaceComponent } from './race/race.component';

@NgModule({
  declarations: [
    AppComponent,
    RacesComponent,
    RaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
        { path: '', component: RacesComponent }
    ])
  ],
  providers: [ RaceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
