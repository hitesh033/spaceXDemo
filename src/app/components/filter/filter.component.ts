import { Component, OnInit } from '@angular/core';
import { LaunchDataService } from '../../services/launch-data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  filterOptions;

  constructor(private spacexDataService: LaunchDataService) {
    this.filterOptions = [];
  }

  ngOnInit(): void {
    this.getPrograms();
  }

  getPrograms() {
    const getPrograms = JSON.parse(localStorage.getItem('spacex-data'));
    // this.filterOptions = JSON.parse(getPrograms);
    getPrograms.map(x => this.filterOptions.filter(a => a.launch_year == x.launch_year).length > 0 ? null : this.filterOptions.push(x));
  }

}
