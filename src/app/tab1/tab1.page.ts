import { Component } from '@angular/core';
import { ThesportdbService } from '../thesportdb.service';
import { Root, Table } from './pl';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  public pl2024Data: Table[] | undefined;

  constructor(private theSportsDBService: ThesportdbService) {}

  ngOnInit(): void {
    this.theSportsDBService.pl2024().subscribe((result: any) => {
      const data: Root = result;
      this.pl2024Data = data.table;
      console.log(result);
    });
  }
}
