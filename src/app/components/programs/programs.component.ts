import { Component, OnInit } from '@angular/core';
import { LaunchDataService } from '../../services/launch-data.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {

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