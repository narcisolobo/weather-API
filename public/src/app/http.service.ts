import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { weather } from '../../../environments/apiKey';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) {}
  
  private _key: string = weather['key'];
  private _burbank: string = '?id=5331835';
  private _chicago: string = '?id=4887398';
  private _dallas: string = '?id=4190598';
  private _sanjose: string = '?id=5392171';
  private _seattle: string = '?id=5809844';
  private _washington: string = '?id=4138106';
  private _imperial: string = '&units=imperial'
  private _apiRoot: string = 'http://api.openweathermap.org/data/2.5/weather';

  burbank() {
    return this._http.get(this._apiRoot + this._burbank + this._imperial + this._key);
  }
  
  chicago() {
    return this._http.get(this._apiRoot + this._chicago + this._imperial + this._key);
  }
  
  dallas() {
    return this._http.get(this._apiRoot + this._dallas + this._imperial + this._key);
  }
  
  sanjose() {
    return this._http.get(this._apiRoot + this._sanjose + this._imperial + this._key);
  }
  
  seattle() {
    return this._http.get(this._apiRoot + this._seattle + this._imperial + this._key);
  }
  
  washington() {
    return this._http.get(this._apiRoot + this._washington + this._imperial + this._key);
  }
}