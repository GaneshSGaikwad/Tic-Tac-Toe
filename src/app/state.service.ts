import { Injectable } from '@angular/core';

@Injectable()
export class StateService {
  private player = 'X';

  get CurrentTurn(): string {
    return this.player;
  }
  constructor() {}
}
