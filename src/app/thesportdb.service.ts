import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ThesportdbService {
  constructor(private http: HttpClient) {}
  pl2024() {
    const url =
      'https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4328&s=2023-2024';
    return this.http.get(url);
  }
  mucity() {
    const url =
      'https://www.thesportsdb.com/api/v1/json/3/searchevents.php?e=Manchester_City_vs_Manchester_United';
    return this.http.get(url);
  }
  jersey() {
    const url =
      'https://www.thesportsdb.com/api/v1/json/3/lookupequipment.php?id=133613';
    return this.http.get(url);
  }
}
