import { Component } from '@angular/core';
import { LaunchDataService } from './services/launch-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spaceXDemo';

  constructor(private spacexDataService: LaunchDataService) { }

  ngOnInit(): void {
    this.getPrograms();
  }

  getPrograms() {
    return this.spacexDataService.getSpaceXData()
      .subscribe(data => {
        localStorage.setItem('spacex-data', JSON.stringify(data));
      });
  }
}
