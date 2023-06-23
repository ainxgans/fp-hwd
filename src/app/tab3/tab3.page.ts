import { ThesportdbService } from './../thesportdb.service';
import { Component } from '@angular/core';
import { Root, Equipment } from './equipment';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  public equipmentData: Equipment[] | undefined;
  constructor(private theSportsDBService: ThesportdbService) {}

  ngOnInit(): void {
    this.theSportsDBService.jersey().subscribe((result) => {
      const data: any = result;
      this.equipmentData = data.equipment;
      console.log(result);
    });
  }
}
