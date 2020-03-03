import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: Http) {}
  get_all() {
    return this.http
      .get("http://localhost:83/ret_user", "")
      .map(res => res.json());
  }

  get_user_data_by_user_username(user_username: string) {
    let data = { user_username: user_username };
    return this.http
      .post("http://localhost:83/ret_user_by_user_username/", data)
      .map(res => res.json());
  }
}
