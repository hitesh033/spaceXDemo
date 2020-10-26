import { Component, OnInit } from '@angular/core';
import { LaunchDataService } from '../../services/launch-data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private spacexDataService: LaunchDataService) { }
  filterOptions;

  ngOnInit(): void {
    this.getPrograms();
  }

  getPrograms() {
    return this.spacexDataService.getSpaceXData()
      .subscribe(data => {
        this.filterOptions = data;
      });
  }

}
