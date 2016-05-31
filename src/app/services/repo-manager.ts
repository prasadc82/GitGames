import {Injectable} from '@angular/core';
import * as Firebase from 'firebase';

@Injectable()
export class RepoManagerService {

  fireBaseUrl: string;
  firebaseGamesRef: Firebase;
  firebaseBaseRef: Firebase;

  constructor() {
    this.fireBaseUrl = 'https://luminous-fire-1260.firebaseio.com/';
    this.firebaseBaseRef = new Firebase(this.fireBaseUrl);
    this.firebaseGamesRef = new Firebase(this.fireBaseUrl + '/games');
  }

  addGame(comparisonStack) {
    return this.firebaseGamesRef.push(comparisonStack);
  }

  listGames() {
    return this.firebaseGamesRef;
  }

}
