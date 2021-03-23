import { DataServiceService } from './../data-service.service';
import { Component, ViewChild, OnInit } from '@angular/core';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { merge, Observable, of as observableOf } from 'rxjs';
// import { catchError, map, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css']
})
export class DashboradComponent implements OnInit {

  constructor(private dataServiceObj: DataServiceService) { }

  dataObjJSON: CovidData[] = [];
  // dataDump2 = [
  //   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  //   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  //   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  //   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  //   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  //   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  //   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  //   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  //   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  //   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  // ];
  dataCardJSON = {};
  displayedColumns: string[] = ["country", "confirmed", "active", "recovered", "deaths"];

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
    console.log(this.dataObjJSON);
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
    console.log("NgInitArr", this.dataObjJSON);
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
