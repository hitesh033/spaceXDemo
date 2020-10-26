import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LaunchDataService {

  constructor(private http: HttpClient) { }

  spaceXAPI = 'https://api.spacexdata.com/v3/launches?limit=100';

  getSpaceXData() {
    return this.http.get(this.spaceXAPI);
  }
}
