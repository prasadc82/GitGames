import {Component} from '@angular/core';

let css = require('./app.css');

@Component({
  selector: 'app',
  template: require('./app.tmpl.html'),
  styles: [`${css}`]
})
export class AppComponent {
};