import { Component, OnInit } from '@angular/core';
import { DataFilterPipe } from '../../filters/data-filter.pipe'; 


@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css'],
  providers: [DataFilterPipe]
})
export class ProgramsComponent implements OnInit {
  programs;
  public data: any;

  constructor(private pipe: DataFilterPipe) { 
    this.programs = [];
  }

  ngOnInit(): void {
    this.getPrograms();
  }

  ngDoCheck() {
    const apiData = localStorage.getItem('spacex-data');
    const selectedCriteria = localStorage.getItem('selectedCriteria');
    if (!selectedCriteria) return;
    this.programs = this.pipe.transform(apiData, selectedCriteria); 
  }

  getPrograms() {
    const getPrograms = JSON.parse(localStorage.getItem('spacex-data'));
    getPrograms.map(x => this.programs.filter(a => a.launch_year == x.launch_year).length > 0 ? null : this.programs.push(x));
  }


}