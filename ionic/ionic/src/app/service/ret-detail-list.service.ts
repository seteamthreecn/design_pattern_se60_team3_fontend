import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class RetDetailListService {
  constructor(private http: Http) {}

  /*
	 * insert
	 * ..
	 * @input dtl_amount, dtl_date, dtl_type, dtl_dts_id
	 * @output -
	 * @author Chutipong
	 * @Create Date 2563-03-09
	 */
  insert(dtl_amount: any, dtl_date: any, dtl_type: any, dtl_dts_id: any, dtl_description: any) {
    let data = {
      'dtl_amount': dtl_amount,
      'dtl_date': dtl_date,
      'dtl_type': dtl_type,
      'dtl_dts_id': dtl_dts_id,
      'dtl_description' : dtl_description
    }
    console.log(data)

    return this.http
      .post("http://localhost:83/insert_ret_detail_list", data)
      .map(res => res.json());
  }

  /*
	 * update
	 * ..
	 * @input dtl_id, dtl_amount, dtl_date, dtl_type, dtl_dts_id
	 * @output -
	 * @author Chutipong
	 * @Create Date 2563-03-09
	 */
  update(dtl_id: any, dtl_amount: any, dtl_date: any, dtl_type: any, dtl_dts_id: any, dtl_description: any) {
    let data = {
      'dtl_id': dtl_id,
      'dtl_amount': dtl_amount,
      'dtl_date': dtl_date,
      'dtl_type': dtl_type,
      'dtl_dts_id': dtl_dts_id,
      'dtl_description' : dtl_description
    }

    return this.http
      .post("http://localhost:83/update_ret_detail_list", data)
      .map(res => res.json());
  }

  /*
   * delete
   * ..
   * @input dtl_id
   * @output -
   * @author Chutipong
   * @Create Date 2563-03-09
   */
  delete(dtl_id: any) {
    let data = {
      dtl_id: dtl_id
    };

    return this.http
      .post("http://localhost:83/delete_ret_detail_list", data)
      .map(res => res.json());
  }

  /*
   * get_by_key
   * ..
   * @input dtl_id
   * @output -
   * @author Chutipong
   * @Create Date 2563-03-09
   */
  get_by_key(dtl_id: any) {
    let data = {
      dtl_id: dtl_id
    };

    return this.http
      .post("http://localhost:83/ret_detail_list_by_dtl_id", data)
      .map(res => res.json());

  }

  /*
	 * get_last
	 * ..
	 * @input -
	 * @output -
	 * @author Chutipong
	 * @Create Date 2563-03-09
	 */
  get_last() {
    return this.http
      .post("http://localhost:83/get_last_ret_detail_list", "")
      .map(res => res.json());
  }

  /*
   * get_static_data_month
   * ..
   * @input -
   * @output -
   * @author Chutipong
   * @Create Date 2563-03-10
   */
  get_static_data_month(user_id) {
    let data = {
      user_id: user_id
    };  
    return this.http
      .post("http://localhost:83/ret_detail_list_static_month", data)
      .map(res => res.json());
  }

  /*
   * get_static_data_yaer
   * ..
   * @input -
   * @output -
   * @author Chutipong
   * @Create Date 2563-03-10
   */
  get_static_data_yaer(user_id) {
    let data = {
      user_id: user_id
    };
    return this.http
      .post("http://localhost:83/ret_detail_list_static_year", data)
      .map(res => res.json());
  }

  /*
   * get_by_list_type
   * ..
   * @input type_list, month_value, year_value, user_id
   * @output -
   * @author Chutipong
   * @Create Date 2563-03-16
   */
  get_by_list_type(type_list: any, month_value: any, year_value: any, user_id: any) {
    let data = {
      type_list: type_list,
      month_value: month_value,
      year_value: year_value,
      user_id: user_id
    };

    return this.http
      .post("http://localhost:83/ret_detail_list_by_list_type", data)
      .map(res => res.json());
  }
}
