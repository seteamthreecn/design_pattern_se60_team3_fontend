import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ReportListService {

  constructor(private http: Http) { }

  get_all() {
    return this.http.post("http://localhost:83/report_list","").map(res => res.json());
  }
  search_name_report(subject: string) {
    let data = {"subject":subject}
    return this.http.post("http://localhost:83/report_list_search_name/", data).map(res => res.json());
  }
  search_report(subject: string, case_status_id: number) {
    let data = {"subject":subject, "case_status_id" : case_status_id}
    return this.http.post("http://localhost:83/report_list_search/", data).map(res => res.json());
  }
  search_report_2(subject: string, case_status_id: number, case_status_id_2: number) {
    let data = {"subject":subject, "case_status_id" : case_status_id, "case_status_id_2" : case_status_id_2}
    return this.http.post("http://localhost:83/report_list_search_2/", data).map(res => res.json());
  }
  search_report_3(subject: string, case_status_id: number, case_status_id_2: number, case_status_id_3: number) {
    let data = {"subject":subject, "case_status_id" : case_status_id, "case_status_id_2" : case_status_id_2, "case_status_id_3" : case_status_id_3}
    return this.http.post("http://localhost:83/report_list_search_3/", data).map(res => res.json());
  }
  show_detail(case_id: number){
    let data = {'case_id':case_id}
    return this.http.post("http://localhost:83/report_list_detail/", data).map(res => res.json());
  }
  update_report(case_id: number , case_status_id: number){
    let data = {'case_id':case_id, 'case_status_id' : case_status_id}
    return this.http.post("http://localhost:83/update_report_list/", data).map(res => res.json());
  }
}
