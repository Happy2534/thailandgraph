import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";


// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighchartsChartModule } from 'highcharts-angular';

import * as Highcharts from 'highcharts';
import HC_map from 'highcharts/modules/map';
import { ThailandmapChartComponent } from './thailandmap-chart/thailandmap-chart.component';
HC_map(Highcharts);
// AppRoutingModule,
@NgModule({
  declarations: [
    AppComponent,
    ThailandmapChartComponent
  ],
  imports: [HttpClientModule,
    BrowserModule,FormsModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
