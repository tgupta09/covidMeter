import { DataServiceService } from './../data-service.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css']
})
export class DashboradComponent implements OnInit {

  constructor(private dataServiceObj: DataServiceService) { }

  dataObjJSON: CovidData[] = [];
  dataCardJSON = {};
  displayedColumns: string[] = ["country", "confirmed", "active", "recovered", "deaths"];
  dataSource: MatTableDataSource<CovidData> = new MatTableDataSource(this.dataObjJSON);

  loadData(data) {
    let dataJSON = data["data"];
    let len = dataJSON.length;
    let dataObj;
    for (let i = 0; i < len; i++) {
      dataObj = {
        'countrycode': dataJSON[i]["code"],
        'country': dataJSON[i]["name"],
        'confirmed': dataJSON[i]["latest_data"]["confirmed"],
        'active': dataJSON[i]["latest_data"]["critical"],
        'recovered': dataJSON[i]["latest_data"]["recovered"],
        'deaths': dataJSON[i]["latest_data"]["deaths"],
      };
      this.dataObjJSON.push(dataObj);
    }

    this.dataSource = new MatTableDataSource(this.dataObjJSON);
  }

  loadCardData(data) {
    let dataJSON = data["data"][0];
    this.dataCardJSON = {
      'confirmed': dataJSON["confirmed"],
      'active': dataJSON["active"],
      'recovered': dataJSON["recovered"],
      'deaths': dataJSON["deaths"],
    };
  }

  ngOnInit(): void {
    this.dataServiceObj.getDataByCountry().subscribe((data) => this.loadData(data));
    this.dataServiceObj.getDataByTimeline().subscribe((data) => this.loadCardData(data));
  }
}

export interface CovidData {
  countrycode: string;
  country: string;
  confirmed: number;
  recovered: number;
  active: number;
  deaths: number;
}
