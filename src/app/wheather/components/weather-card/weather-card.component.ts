import { Component } from '@angular/core';
import { WheatherOpenWeatherMapService } from '../../services/wheather-open-weather-map.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css',
})
export class WeatherCardComponent {
  constructor(private wheatherService: WheatherOpenWeatherMapService) {}

  get weatherInfo() {
    return this.wheatherService.getWeatherInfo;
  }

  getDate(): string {
    const fecha = new Date();
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const año = fecha.getFullYear().toString();

    return `${dia}/${mes}/${año}`;
  }

  getHours(): string {
    const fecha = new Date();
    const hora = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');

    return `${hora}:${minutos}`;
  }

  getIcon(): string {
    return `http://openweathermap.org/img/wn/${this.weatherInfo?.weather[0].icon}.png`;
  }
}
