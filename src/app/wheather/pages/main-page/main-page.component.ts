import { Component } from '@angular/core';
import { WheatherOpenWeatherMapService } from '../../services/wheather-open-weather-map.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  constructor(private wheatherService:WheatherOpenWeatherMapService) { }


  get weatherInfo(){
    return this.wheatherService.getWeatherInfo;
  }

}
