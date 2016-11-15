import { Component, AfterContentInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Survivor } from './survivor';
import { SurvivorService } from './survivor.service';
import { SurvivorPipe } from './survivor.pipe';

@Component({
  selector: 'survivor',
  templateUrl: './survivor.component.html',
  styleUrls: ['./survivor.component.css']
})

export class SurvivorComponent implements AfterContentInit {

  @Input() survivor : Survivor;
	@Input() registered : boolean;
  @Output() report: EventEmitter<string> = new EventEmitter<string>();

	constructor( 
		private route: ActivatedRoute,
		private router: Router,
    private survivorService: SurvivorService
	) { }

  ngAfterContentInit(): void {
  	this.survivor.reported = false;
  	if (this.survivor.lonlat != null) {
	  	let point = this.survivor.lonlat.slice(7,-1).split(' ');	
	  	this.survivor.lat = +point[0];
	  	this.survivor.lng = +point[1];  		
  	} 

    this.survivor.water = { 'qty':0, 'pts': 4 };
    this.survivor.food = { 'qty':0, 'pts': 3 };
    this.survivor.medication = { 'qty':0, 'pts': 2 };
    this.survivor.ammunition = { 'qty':0, 'pts': 1 }

	  this.survivor.id = this.survivor.location.split('/').pop();
    this.survivorService.getProperties(this.survivor.location.split('/').pop())
      .subscribe((data) =>  { 
        this.survivor.properties = data;
        data.forEach((value) => {
          this.survivor[value.item.name.toLowerCase()].qty = value.quantity;
        });
      });

  }

  onReport(): void {
    if (!this.survivor.reported) {
      this.report.emit(this.survivor.id);
    	this.survivor.reported = true;      
    }
  }

}
