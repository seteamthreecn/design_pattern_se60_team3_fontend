import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class RetUserService {
  constructor(private http: Http) {}

  /*
   * get_all
   * ..
   * @input -
   * @output -
   * @author Chutipong
   * @Create Date 2563-03-09
   */
  get_all() {
    return this.http
      .post("http://localhost:83/ret_user", "")
      .map(res => res.json());
  }

  /*
   * insert
   * ..
   * @input user_username, user_password, user_fname, user_lname, user_phone_no, user_email, user_guid_img
   * @output -
   * @author Chutipong
   * @Create Date 2563-03-09
   */
  insert(
    user_username: string,
    user_password: string,
    user_fname: string,
    user_lname: string,
    user_phone_no: string,
    user_email: string,
    user_guid_img: string
  ) {
    let data = {
      user_username: user_username,
      user_password: user_password,
      user_fname: user_fname,
      user_lname: user_lname,
      user_phone_no: user_phone_no,
      user_email: user_email,
      user_guid_img: user_guid_img
    };
    return this.http
      .post("http://localhost:83/insert_user/", data)
      .map(res => res.json());
  }

  /*
   * get_user_data_by_user_username
   * ..
   * @input user_username
   * @output -
   * @author Chutipong
   * @Create Date 2563-03-09
   */
  get_user_data_by_user_username(user_username: string) {
    let data = { user_username: user_username };
    return this.http
      .post("http://localhost:83/ret_user_by_user_username/", data)
      .map(res => res.json());
  }

  /*
   * get_user_data_by_user_id
   * ..
   * @input user_id
   * @output -
   * @author Chalongchai
   * @Create Date 2563-03-09
   */
  get_user_data_by_user_id(user_id: number) {
    let data = { user_id: user_id };
    return this.http
      .post("http://localhost:83/ret_user_by_user_id/", data)
      .map(res => res.json());
  }

  /*
   * update_ret_user_by_user_id
   * ..
   * @input user_username, user_fname, user_lname, user_email, user_id
   * @output -
   * @author Chalongchai
   * @Modify Date 2563-03-09
   */
  update_ret_user_by_user_id(
    user_username: string,
    user_fname: string,
    user_lname: string,
    user_email: string,
    user_id: number
  ) {
    let data = {
      user_username: user_username,
      user_fname: user_fname,
      user_lname: user_lname,
      user_email: user_email,
      user_id: user_id
    };
    return this.http
      .post("http://localhost:83/update_ret_user/", data)
      .map(res => res.json());
  }

  /*
   * uploadimage
   * ..
   * @input formData
   * @output -
   * @author Chalongchai
   * @Modify Date 2563-03-09
   */
  uploadimage(formData) {
    // let data = {formData};
    console.log(formData);
    this.http.post("http://localhost:83/upload", formData).subscribe(response => {
      console.log("response received is ", response);
    });
  }

  /*
   * get_img_profile
   * ..
   * @input guid
   * @output -
   * @author Chalongchai
   * @Modify Date 2563-03-09
   */
  get_img_profile(guid) {
    return this.http.get("http://localhost:83/" + guid);
  }
}
