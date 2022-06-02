import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StateService } from '../state.service';
import { TileService } from '../tile.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
})
export class TileComponent {
  @Input() row!: number;
  @Input() col!: number;

  // @Input() currentPlayer: string | null = null;
  @Input() currentPlayer!: string ;

  // @Output() update = new EventEmitter<{
  //   row: number;
  //   col: number;
  // }>();

  constructor(private tileService:TileService){ }

  mark() {

 this.tileService.updateTile({
   row:this.row,
   col:this.col,
 }); 
   
    // this.update.emit({
    //   row: this.row,
    //   col: this.col,
    // });
  }
}
