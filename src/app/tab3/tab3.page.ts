import { HttpClient } from '@angular/common/http';
import { ThesportdbService } from './../thesportdb.service';
import { Component } from '@angular/core';
import { Equipment } from './equipment';
import { Root, Table } from '../tab1/pl';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  selectedTeam: number = 133613;
  public pl2024Data: Table[] | undefined;
  apiUrl: string =
    'https://www.thesportsdb.com/api/v1/json/3/lookupequipment.php?id=';
  public equipmentData: Equipment[] | undefined;
  constructor(
    private theSportsDBService: ThesportdbService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // this.theSportsDBService.jersey().subscribe((result) => {
    //   const data: any = result;
    // this.equipmentData = data.equipment;
    //   console.log(result);
    // });
    this.theSportsDBService.pl2024().subscribe((result: any) => {
      const data: Root = result;
      this.pl2024Data = data.table;
      this.fetchData();
    });
    // this.fetchData();
  }
  fetchData() {
    const url = this.apiUrl + this.selectedTeam;
    this.http.get(url).subscribe((result) => {
      const data: any = result;
      this.equipmentData = data.equipment;
      // console.log(data);
    });
  }
}
