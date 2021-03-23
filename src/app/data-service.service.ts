import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private httpObj: HttpClient) { }

  private URL = "https://corona-api.com/";

  getDataByCountry(countryCode = null) {
    let url;
    if (countryCode != null) {
      url = this.URL + "countries/" + countryCode;
    }
    else {
      url = this.URL + "countries";
    }
    let dataByCountry = this.httpObj.get(url);
    return dataByCountry;
  }

  getDataByTimeline() {
    let url = this.URL + "timeline";
    let dataByTimeline = this.httpObj.get(url);
    return dataByTimeline;
  }
}
