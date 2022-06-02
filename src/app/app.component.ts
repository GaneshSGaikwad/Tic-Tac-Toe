import { Component, VERSION } from '@angular/core';
import { StateService } from './state.service';
import { TileService } from './tile.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StateService],
})
export class AppComponent {
  

  constructor(private tileService:TileService){ }

 get Board (){
   return this.tileService.Board;
 }





}
