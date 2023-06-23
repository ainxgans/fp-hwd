import { Component } from '@angular/core';
import { ThesportdbService } from '../thesportdb.service';
import { Root, Event } from './event';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  public mucityData: Event[] | undefined;

  constructor(private theSportsDBService: ThesportdbService) {}

  ngOnInit(): void {
    this.theSportsDBService.mucity().subscribe((result) => {
      const data: any = result;
      this.mucityData = data.event;
      console.log(result);
    });
  }
}
