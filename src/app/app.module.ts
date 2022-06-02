import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TileComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
