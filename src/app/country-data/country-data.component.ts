import { DataServiceService } from './../data-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-country-data',
  templateUrl: './country-data.component.html',
  styleUrls: ['./country-data.component.css']
})
export class CountryDataComponent implements OnInit {

  constructor(private activatedRouteObj: ActivatedRoute, private dataServiceObj: DataServiceService) { }

  latestData = {};
  todayData = {};

  xCordDates = [];
  yCordConfirmendCases = [];
  yCordRecoveredCases = [];
  yCordActiveCases = [];
  yCordDeathCases = [];
  yCordNewConfirmedCases = [];
  yCordNewRecoveredCases = [];
  yCordNewDeathCases = [];

  loadData(data) {
    console.log(data);
    let dataJSON = data["data"];
    this.latestData = {
      'name': dataJSON["name"],
      'confirmed': dataJSON["timeline"][0]["confirmed"],
      'active': dataJSON["timeline"][0]["active"],
      'recovered': dataJSON["timeline"][0]["recovered"],
      'deaths': dataJSON["timeline"][0]["deaths"]
    };

    this.todayData = {
      'confirmed': dataJSON["timeline"][0]["new_confirmed"],
      'recovered': dataJSON["timeline"][0]["new_recovered"],
      'deaths': dataJSON["timeline"][0]["new_deaths"]
    }

    // Calculation for Graphs
    let timelineJSON = dataJSON["timeline"];
    let len = timelineJSON.length;
    for (let i = 0; i < len; i += 3) {
      this.xCordDates.push(timelineJSON[i]["date"]);
      this.yCordConfirmendCases.push(timelineJSON[i]["confirmed"]);
      this.yCordRecoveredCases.push(timelineJSON[i]["recovered"]);
      this.yCordActiveCases.push(timelineJSON[i]["active"]);
      this.yCordDeathCases.push(timelineJSON[i]["deaths"]);
      this.yCordNewConfirmedCases.push(timelineJSON[i]["new_confirmed"]);
      this.yCordNewRecoveredCases.push(timelineJSON[i]["new_recovered"]);
      this.yCordNewDeathCases.push(timelineJSON[i]["new_deaths"]);
    }
    this.xCordDates.reverse();
    this.yCordConfirmendCases.reverse();
    this.yCordRecoveredCases.reverse();
    this.yCordActiveCases.reverse();
    this.yCordDeathCases.reverse();
    this.yCordNewConfirmedCases.reverse();
    this.yCordNewRecoveredCases.reverse();
    this.yCordNewDeathCases.reverse();
  }

  ngOnInit(): void {
    this.dataServiceObj.getDataByCountry(this.activatedRouteObj.params["value"]["id"]).subscribe((data) => this.loadData(data));
  }



  // Plotting Chart for Confirmend Cases
  public lineChartDataConfirmedCases: ChartDataSets[] = [
    { data: this.yCordConfirmendCases, label: 'Confirmed Cases' },
  ];
  public lineChartLabelsConfirmedCases: Label[] = this.xCordDates;
  public lineChartOptionsConfirmedCases: (any & { annotation: any }) = {
    responsive: true,
  };
  public lineChartColorsConfirmedCases: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: ' #0275d8 ',
    },
  ];
  public lineChartLegendConfirmedCases = true;
  public lineChartTypeConfirmedCases = 'line';
  public lineChartPluginsConfirmedCases = [];


  // Plotting Chart for Recovered Cases
  public lineChartDataRecoveredCases: ChartDataSets[] = [
    { data: this.yCordRecoveredCases, label: 'Recovered Cases' },
  ];
  public lineChartLabelsRecoveredCases: Label[] = this.xCordDates;
  public lineChartOptionsRecoveredCases: (any & { annotation: any }) = {
    responsive: true,
  };
  public lineChartColorsRecoveredCases: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: ' #5cb85c ',
    },
  ];
  public lineChartLegendRecoveredCases = true;
  public lineChartTypeRecoveredCases = 'line';
  public lineChartPluginsRecoveredCases = [];


  // Plotting Chart for Active Cases
  public lineChartDataActiveCases: ChartDataSets[] = [
    { data: this.yCordActiveCases, label: 'Active Cases' },
  ];
  public lineChartLabelsActiveCases: Label[] = this.xCordDates;
  public lineChartOptionsActiveCases: (any & { annotation: any }) = {
    responsive: true,
  };
  public lineChartColorsActiveCases: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: ' #f0ad4e ',
    },
  ];
  public lineChartLegendActiveCases = true;
  public lineChartTypeActiveCases = 'line';
  public lineChartPluginsActiveCases = [];


  // Plotting Chart for Death Cases
  public lineChartDataDeathCases: ChartDataSets[] = [
    { data: this.yCordDeathCases, label: 'Death Cases' },
  ];
  public lineChartLabelsDeathCases: Label[] = this.xCordDates;
  public lineChartOptionsDeathCases: (any & { annotation: any }) = {
    responsive: true,
  };
  public lineChartColorsDeathCases: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: '#d9534f',
    },
  ];
  public lineChartLegendDeathCases = true;
  public lineChartTypeDeathCases = 'line';
  public lineChartPluginsDeathCases = [];


  // Plotting Chart for NewConfirmed Cases
  public lineChartDataNewConfirmedCases: ChartDataSets[] = [
    { data: this.yCordNewConfirmedCases, label: 'Daily\'s Confirmed Cases' },
  ];
  public lineChartLabelsNewConfirmedCases: Label[] = this.xCordDates;
  public lineChartOptionsNewConfirmedCases: (any & { annotation: any }) = {
    responsive: true,
  };
  public lineChartColorsNewConfirmedCases: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: '#0275d8',
    },
  ];
  public lineChartLegendNewConfirmedCases = true;
  public lineChartTypeNewConfirmedCases = 'line';
  public lineChartPluginsNewConfirmedCases = [];


  // Plotting Chart for NewRecovered Cases
  public lineChartDataNewRecoveredCases: ChartDataSets[] = [
    { data: this.yCordNewRecoveredCases, label: 'Daily\'s Recovered Cases' },
  ];
  public lineChartLabelsNewRecoveredCases: Label[] = this.xCordDates;
  public lineChartOptionsNewRecoveredCases: (any & { annotation: any }) = {
    responsive: true,
  };
  public lineChartColorsNewRecoveredCases: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: ' #5cb85c',
    },
  ];
  public lineChartLegendNewRecoveredCases = true;
  public lineChartTypeNewRecoveredCases = 'line';
  public lineChartPluginsNewRecoveredCases = [];


  // Plotting Chart for NewDeath Cases
  public lineChartDataNewDeathCases: ChartDataSets[] = [
    { data: this.yCordNewDeathCases, label: 'Daily\'s Death Cases' },
  ];
  public lineChartLabelsNewDeathCases: Label[] = this.xCordDates;
  public lineChartOptionsNewDeathCases: (any & { annotation: any }) = {
    responsive: true,
  };
  public lineChartColorsNewDeathCases: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: '#d9534f',
    },
  ];
  public lineChartLegendNewDeathCases = true;
  public lineChartTypeNewDeathCases = 'line';
  public lineChartPluginsNewDeathCases = [];
}

