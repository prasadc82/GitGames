import {Component} from '@angular/core';
import {RepoFinder} from './../repo-finder';
import {RepoManagerService} from '../services/repo-manager';
import {GameElement } from './../game-element'

@Component({
  selector: 'live-comparision',
  template: require('./live-comparision.tmpl.html'),
  directives: [RepoFinder, GameElement],
  providers: [RepoManagerService],
  styles: [`
    .padding-bottom-30{
      padding-bottom: 30px;
    }
  `]
})
export class LiveComparision {
  statsLeft: Object = {};
  statsRight: Object = {};
  saveButtonMessage: string = 'Save Comparision';
  saveButtonDisabled: boolean = false;

  constructor(
    private _repoManagerService: RepoManagerService
  ) { }

  // Check for empty objects
  isStatsEmpty(input) {
    if (input) {
      return Object.keys(input).length === 0;
    }
    return true;
  }

  activateButton(){
    this.saveButtonDisabled = false;
    this.saveButtonMessage = 'Save Comparision';
  }

  // Save compared repository objects
  saveComparison(statsLeft, statsRight) {

    let comparisonStack = {
      name: statsLeft.name + ' v/s ' + statsRight.name,
      left: {
        owner: { login: statsLeft.owner.login },
        html_url:  statsLeft.html_url,
        stargazers_count: statsLeft.stargazers_count,
        forks_count: statsLeft.forks_count,
        watchers_count: statsLeft.watchers_count
      },
      right: {
        owner: { login: statsRight.owner.login },
        html_url: statsRight.html_url,
        stargazers_count: statsRight.stargazers_count,
        forks_count: statsRight.forks_count,
        watchers_count: statsRight.watchers_count
      }
    };


    this._repoManagerService.addGame(comparisonStack).on('value', (snap, err)=> {
      this.saveButtonMessage = 'Working....';
      this.saveButtonDisabled = true;
      if(err) {
        // code...
      } else{
        this.saveButtonMessage = 'Comparision saved.';
      }
    });
  }
};
