import {Component, View, bootstrap} from 'angular2/angular2';
import {Angujobs} from 'angujobs';

@Component({
  selector: 'main'
})

@View({
  directives: [Angujobs],
  template: `
    <angujobs></angujobs>
  `
})

class Main {

}

bootstrap(Main);
