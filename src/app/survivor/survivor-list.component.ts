import { Component, OnInit, AfterContentInit } from '@angular/core';
import { LocalStorage, LocalStorageService } from 'ng2-webstorage';
import { ToastyService } from 'ng2-toasty';
import { Survivor } from './survivor';
import { SurvivorService } from './survivor.service';
import { SurvivorPipe } from './survivor.pipe';

@Component({
  selector: 'survivor-list',
  templateUrl: './survivor-list.component.html',
  styleUrls: ['./survivor.component.css']
})

export class SurvivorListComponent implements OnInit, AfterContentInit {
  my_survivor : Survivor = null;
	survivors   : Survivor[] = [];
  registered  : boolean;

  constructor(
    private survivorService: SurvivorService,
    private toastyService:ToastyService,
    private ls:LocalStorageService
  ) { }

  ngOnInit(): void {
    this.registered = ((this.ls.retrieve('my_survivor') != undefined ) ? true : false ); 
    this.survivorService.getSurvivors()
      .subscribe(
        (data) =>  {
          this.survivors = data;
        },
        (err) => { 
          this.toastyService.error({
            title: "Thanks for letting us know!",
            msg: "Thanks for letting us know!",
            showClose: true
          });
        }
      );
  }
  
  ngAfterContentInit(): void {
    this.my_survivor = this.ls.retrieve('my_survivor');
  }


  onReport(id : string): void {
    if (this.my_survivor != undefined){ 
      this.survivorService.reportSurvivor(id, this.my_survivor.id).subscribe((res) => {
        if(res.ok) {
          // pops notification
        }

      });
    } else {
      // only for registered survivors
    }
  }

  
  signOut(){
    this.my_survivor = null;
    this.ls.store('my_survivor', undefined);
  }

}
