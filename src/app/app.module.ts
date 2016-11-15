import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { Ng2PaginationModule } from 'ng2-pagination';
import { InlineSVGModule } from 'ng2-inline-svg';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { Ng2Webstorage } from 'ng2-webstorage';
import { ToastyModule } from 'ng2-toasty';

import { AppComponent } from './app.component';
import { SurvivorComponent } from './survivor/survivor.component';
import { SurvivorListComponent } from './survivor/survivor-list.component';
import { SurvivorService } from './survivor/survivor.service';
import { SurvivorPipe } from './survivor/survivor.pipe';
import { TradeComponent } from './trade/trade.component';
import { ReportListComponent } from './report/report-list.component';
import { ReportService } from './report/report.service';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ReportListComponent,
    SurvivorComponent,
    SurvivorListComponent,
    SurvivorPipe,
    TradeComponent,
    HomeComponent,
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDfqIMTjsF8tQ59lrlfxBYvxn3sjQYuxoU'
    }),
    BrowserModule,
    FormsModule,
    HttpModule,
    InlineSVGModule,
    Ng2PaginationModule,
    Ng2Webstorage,
    ToastyModule.forRoot(),
    RouterModule.forRoot([{
        path: 'survivors',
        component: SurvivorListComponent
      },
      {
        path: 'survivor/:id',
        component: SurvivorComponent
      },
      {
        path: 'reports',
        component: ReportListComponent
      },
      {
        path: 'trade/:id',
        component: TradeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
    ])
  ],
  providers: [
    SurvivorService,
    ReportService
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})

export class AppModule { }
