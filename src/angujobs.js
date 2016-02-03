import {ComponentMetadata as Component, ViewMetadata as View} from 'angular2/angular2';

@Component({
  selector: 'angujobs'
})

@View({
  templateUrl: 'angujobs.html'
})

export class Angujobs {

  constructor() {
    console.info('Angujobs Component Mounted Successfully');
  }

}
