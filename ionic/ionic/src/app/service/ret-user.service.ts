import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class RetUserService {

  constructor(private http: Http) {}

  get_all() {
    return this.http.post("http://localhost:83/ret_user","").map(res => res.json());
  }

 insert_user(user_username: string, user_password: string, user_fname: string, user_lname: string, user_phone_no: string, user_email: string, user_guid_img: string) {
    let data = {"user_username":user_username,"user_password":user_password,
                "user_fname":user_fname,"user_lname":user_lname,
                "user_phone_no":user_phone_no,"user_email":user_email,"user_guid_img":user_guid_img}
    return this.http.post("http://localhost:83/insert_user/", data).map(res => res.json());
  }

}
