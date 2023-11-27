import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseOpenWeatherMap } from '../interfaces/open-weather-map';
import { APPID } from '../../data/config';

@Injectable({
  providedIn: 'root',
})
export class WheatherOpenWeatherMapService {
  private _weather?: ResponseOpenWeatherMap;
  private _url = 'https://api.openweathermap.org/data/2.5/weather?';
  private _units = 'metric';
  private _lang = 'es';


  constructor(private http: HttpClient) {}

  get getWeatherInfo() {
    return this._weather;
  }

  getWeather(cityName: string) {
    this._weather = undefined;
    const queryParams = new HttpParams()
      .set('q', cityName)
      .set('units', this._units)
      .set('lang', this._lang)
      .set('appid', APPID); // APPID is a constant to store the API key

    this.http
      .get<ResponseOpenWeatherMap>(this._url, { params: queryParams })
      .subscribe((res: ResponseOpenWeatherMap) => {
        this._weather = res;
      });
  }
}
