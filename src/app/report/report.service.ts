import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ReportService {

  private baseUrl = 'http://zssn-backend-example.herokuapp.com/api/';

  constructor(private http: Http) { }

  getReports() : Observable<any[]> {
  	return this.http.get(this.baseUrl+'report.json').map((res : Response) => res.json()); 	
  }

  getReport(report_url: string) : Observable<any[]> {
    return this.http.get(report_url).map((res : Response) => res.json());  
  }

}
