import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';

  accessions: Accession[] = [
    { testSet: [ { isCritical: false } ]},
    { testSet: [ { isCritical: true } ]}
  ]
}



class Accession {
  testSet: AccessionTestSet[] = []
}

class AccessionTestSet {
  isCritical: boolean
}
