import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Survivor } from './survivor';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SurvivorService {

  private baseUrl = 'http://zssn-backend-example.herokuapp.com/api/';

  constructor(private http: Http) { }

  getSurvivors() : Observable<Survivor[]> {
  	return this.http.get(this.baseUrl+'people.json').map((res : Response) => res.json()); 	
  }

  getSurvivor(id: string) : Observable<Survivor> {
  	return this.http.get(this.baseUrl+'people/'+id)
  		.map((res : Response) => res.json())
  		.catch((error : any) => Observable.throw(error.json().error || 'Server Not Available'));
  }

  getProperties(id: string) : Observable<any> {
    return this.http.get(this.baseUrl+'people/'+ id + '/properties.json')
      .map((res : Response) => res.json())
      .catch((error : any) => Observable.throw(error.json().error || 'Server Not Available'));
  }

  createSurvivor(data: any) : Observable<Response> {
    return this.http.post(this.baseUrl+'people.json', data);
  }

  reportSurvivor(id: string, my_id: string) : Observable<Response> {
    return this.http.post(this.baseUrl+'people/'+id+'/report_infection', {
      'infected': id,
      'id': my_id
    });
  }

}
