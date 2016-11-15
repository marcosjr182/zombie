import { Component, OnInit } from '@angular/core';
import { ReportService } from './report.service';
import { Report } from './report';

@Component({
  selector: 'report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})

export class ReportListComponent implements OnInit {

	reports : Report[] = [];

  stats : any[] = [];

	
  constructor(
  	private reportService: ReportService
  ) { }

  ngOnInit() {
    
    this.reportService.getReport("http://zssn-backend-example.herokuapp.com/api/report/infected")
      .subscribe((data) => { 
        data = data['report'];
        this.stats.push({ 
          'pct': true,
          'description': 'Infected People',
          'stat': +data['average_infected'].toFixed(2)*100
        });
      });
  	
    this.reportService.getReport("http://zssn-backend-example.herokuapp.com/api/report/non_infected")
      .subscribe((data) => { 
        data = data['report'];
        this.stats.push({ 
          'pct': true,
          'description': 'Healthy People',
          'stat': +data['average_healthy'].toFixed(2)*100
        });
      });

    this.reportService.getReport("http://zssn-backend-example.herokuapp.com/api/report/people_inventory")
      .subscribe((data) => { 
        data = data['report'];
        this.stats.push({ 
          'pct': false,
          'description': 'Average of items per person',
          'stat': +data['average_items_quantity_per_person'].toFixed(1)
        });
        this.stats.push({ 
          'pct': false,
          'description': 'Average of items per healthy person',
          'stat': +data['average_items_quantity_per_healthy_person'].toFixed(1)
        });
      });

    this.reportService.getReport("http://zssn-backend-example.herokuapp.com/api/report/infected_points")
      .subscribe((data) => { 
        data = data['report'];
        this.stats.push({ 
          'pct': false,
          'description': 'Points lost by infected people',
          'stat': data['total_points_lost']
        });
      });



  }

  prepareReport(report : any) : void {
    console.log(report);
  }

}
