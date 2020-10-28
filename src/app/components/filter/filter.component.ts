import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  filterOptions;
  @Input()
  public data: any

  @Output()
  public onData: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.filterOptions = [];
  }

  ngOnInit(): void {
    this.getPrograms();
  }

  getPrograms() {
    const getPrograms = JSON.parse(localStorage.getItem('spacex-data'));
    getPrograms.map(x => this.filterOptions.filter(a => a.launch_year == x.launch_year).length > 0 ? null : this.filterOptions.push(x));
  }

  applyYearFilter(i, option) {
    const chip = document.querySelectorAll('.filter-chip');
    chip.forEach(element => element.classList.remove('active'));
    option.active = !option.active;
    this.onData.emit(option);
    localStorage.setItem('selectedCriteria', JSON.stringify(option));
  }
}
