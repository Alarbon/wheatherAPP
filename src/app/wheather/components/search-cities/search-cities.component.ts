import { Component } from '@angular/core';
import { WheatherOpenWeatherMapService } from '../../services/wheather-open-weather-map.service';

@Component({
  selector: 'app-search-cities',
  templateUrl: './search-cities.component.html',
  styleUrl: './search-cities.component.css',
})
export class SearchCitiesComponent {
  constructor(private wheatherService: WheatherOpenWeatherMapService) {}

  getWeather(cityName: string) {
    this.wheatherService.getWeather(cityName);
  }
}
