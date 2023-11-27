import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { AdvancedDetailsComponent } from './pages/advanced-details/advanced-details.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { SearchCitiesComponent } from './components/search-cities/search-cities.component';



@NgModule({
  declarations: [
    WeatherCardComponent,
    AdvancedDetailsComponent,
    MainPageComponent,
    SearchCitiesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
    MainPageComponent,
    AdvancedDetailsComponent
  ]
})
export class WheatherModule { }
