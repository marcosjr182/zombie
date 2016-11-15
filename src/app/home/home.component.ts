import { Component, OnInit } from '@angular/core';
import { LocalStorage, LocalStorageService } from 'ng2-webstorage';
import { Router } from '@angular/router'
import { Survivor } from '../survivor/survivor';
import { SurvivorService } from '../survivor/survivor.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	code : string = '';
  my_survivor : Survivor = new Survivor();
	new_survivor : Survivor = new Survivor();

  person : any = { 
    'name': '',
    'age': '',
    'gender': '',
    'items':''
}
  items : any = {
    'water'     : { 'qty': 0 },
    'food'      : { 'qty': 0 },
    'ammunition': { 'qty': 0 },
    'medication': { 'qty': 0 }
  };

  constructor(
    private survivorService: SurvivorService,
    private ls:LocalStorageService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.my_survivor != undefined)
      this.router.navigate(['/survivors']);
  }

  
  signIn(code: string) {
  	
    this.survivorService.getSurvivor(code)
      .subscribe((data) => {
        this.my_survivor.id = data.id;
        this.my_survivor.name = data.name;
        this.my_survivor.age = data.age;
        this.my_survivor.lonlat = data.lonlat;
        this.my_survivor.gender = data.gender;

        this.survivorService.getProperties(code)
          .subscribe((properties) =>  { 
            this.my_survivor.properties = properties;
            for (let value of properties) {
              this.my_survivor[value.item.name.toLowerCase()].qty = value.quantity;
            }
            this.ls.store('my_survivor', this.my_survivor);
          });
        this.router.navigate(['/survivors']);
      }, (err) => { console.log('cod invalido'); });
  }

  getLocation(){
  }

  signOut(){
    this.my_survivor = null;
    this.ls.store('my_survivor', undefined);
    this.router.navigate(['/home']);
  }

  createSurvivor() {
    this.survivorService.createSurvivor({ 'person': {
      'name': this.new_survivor.name,
      'age': this.new_survivor.age,
      'gender': this.new_survivor.gender
    },
    'items': 'Water:'+this.items.water.qty+';Food:'+this.items.food.qty+';Ammunition:'+this.items.ammunition.qty+';Medication:'+this.items.medication.qty+';'
    }).subscribe((res) => {
      // get id to signIn()
    });
  }


}
