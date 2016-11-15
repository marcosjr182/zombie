import { Component, AfterContentInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { Survivor } from "./survivor/survivor";
import { SurvivorService } from './survivor/survivor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})

export class AppComponent {
	
  constructor(
  	private survivorService: SurvivorService,
  	public toastyService:ToastyService,

  ) { }

/*  setMySurvivor() : void {
  	let survivor = this.survivorService.getSurvivor(this.code);
  	
  	if (survivor != null) { 
  		survivor.subscribe(
  			(data) =>	{
  				this.my_survivor = data,
  				this.ls.store('my_survivor', this.my_survivor),
          this.toastyService.success("Thanks for letting us know!")
  			},
  			(err) => { 
          this.toastyService.error({
            title: "Thanks for letting us know!",
            msg: "Thanks for letting us know!",
            showClose: true
          })
        });
  	}
  	
  	
  	
  	console.log(this.my_survivor);
  	this.code = '';	
  }
*/
 	
  
}
