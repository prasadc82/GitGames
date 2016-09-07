import {Component, OnInit} from '@angular/core';
import { RepoManagerService} from './../../../services/repo-manager';

let css = require('./list-games.css');
@Component({
  selector: 'list-games',
  template: require('./list-games.tmpl.html'),
  styles: [`${css}`]
})

export class ListGames implements OnInit{

  listGames: Array<any>=[];
  listGamesMessage: string = 'Fetching games list...';

  constructor(public _repoManager: RepoManagerService){}

  ngOnInit(){
    this._repoManager.listGames().once('value',(snapshot)=> {
      let response = snapshot.val();
      if(response) {
        let keys = Object.keys(response);
        let games = [];
        keys.forEach((key) => games.push((response[key])));
        this.listGames = games;
      } else {
        this.listGames = [];
        this.listGamesMessage = `There are no saved games.
        Please go to the live comparision to enjoy this game. :)`;
      }

    })
  }

}
