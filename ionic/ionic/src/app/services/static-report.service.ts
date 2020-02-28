import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class StaticReportService {

  constructor(private http: Http) { }

  get_static_month() {
    return this.http.post("http://localhost:83/report_static_month","").map(res => res.json());
  }
  
}
