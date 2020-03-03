import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class RetUserService {

  constructor(private http: Http) { }

  get_all() {
    return this.http.post("http://localhost:83/ret_user","").map(res => res.json());
  }

}
