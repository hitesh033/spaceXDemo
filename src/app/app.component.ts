import { Component } from '@angular/core';
import { LaunchDataService } from './services/launch-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spaceXDemo';
  loading: boolean = false;
  public data: any;

  constructor(private spacexDataService: LaunchDataService) { }

  ngOnInit(): void {
    localStorage.clear();
    this.loading = true;
    this.getPrograms();
  }

  getPrograms() {
    return this.spacexDataService.getSpaceXData()
      .subscribe(data => {
        this.loading = false;
        localStorage.setItem('spacex-data', JSON.stringify(data));
      });
  }

  updateData(event) {
    this.data = event;
  }
}
