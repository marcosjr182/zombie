import { Component, OnInit } from '@angular/core';
import { Router,   ActivatedRoute }   from '@angular/router';
import { LocalStorage, LocalStorageService } from 'ng2-webstorage';
import { Survivor } from '../survivor/survivor';
import { SurvivorService } from '../survivor/survivor.service';

@Component({
  selector: 'trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']	
})
export class TradeComponent implements OnInit {

	my_survivor : Survivor;
	recipient : Survivor = new Survivor();

  constructor(
  	private ls:LocalStorageService,
    private route: ActivatedRoute,
    private survivorService: SurvivorService) { }

  test() {
    console.log(this.recipient);
  }

  ngOnInit() {
    this.my_survivor = this.ls.retrieve('my_survivor');
    this.survivorService.getSurvivor(this.route.snapshot.params['id'])
      .subscribe((data) => {
        this.recipient.id = data.id;
        this.recipient.name = data.name;
        this.recipient.age = data.age;
        this.recipient.lonlat = data.lonlat;
        this.recipient.gender = data.gender;

        this.survivorService.getProperties(this.route.snapshot.params['id'])
          .subscribe((properties) =>  { 
            this.recipient.properties = properties;
            for (let value of properties) {
              this.recipient[value.item.name.toLowerCase()].qty = value.quantity;
            }
          });

      });


  }


}
