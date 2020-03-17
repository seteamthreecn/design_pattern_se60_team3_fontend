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
	 * Insert detail_list data
	 * @input dtl_amount, dtl_date, dtl_type, dtl_dts_id, dtl_description
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
	 * Update detail_list data
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
   * Delete detail_list data by dtl_id
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
   * Return dtl_id, dtl_amount, dtl_day, dtl_year, dtl_dts_id, dtl_description, 
   *        dtl_type, dtl_month, dtl_month_number, dtl_dts_name, dtl_date, 
   *        dtl_type_name
   * @input dtl_id
   * @output dtl_id, dtl_amount, dtl_day, dtl_year, dtl_dts_id, dtl_description, 
   *        dtl_type, dtl_month, dtl_month_number, dtl_dts_name, dtl_date, 
   *        dtl_type_name
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
	 * Return detail_list data latest
	 * @input -
	 * @output dtl_id, dtl_amount, dtl_date, dtl_type, dtl_dts_id, dtl_description, dtl_create_date, dtl_modify_date
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
   * Return month_name, month, type_list, amount by user_id, month, years
   * @input user_id, month, years
   * @output month_name, month, type_list, amount
   * @author Chutipong
   * @Create Date 2563-03-10
   */
  get_static_data_month(user_id, month, year) {
    let data = {
      user_id: user_id,
      month: month,
      year: year
    };  
    return this.http
      .post("http://localhost:83/ret_detail_list_static_month", data)
      .map(res => res.json());
  }

  /*
   * get_static_data_year
   * Return YEAR, type_list, amount by user_id, year
   * @input user_id, year
   * @output YEAR, type_list, amount
   * @author Chutipong
   * @Create Date 2563-03-10
   */
  get_static_data_year(user_id, year) {
    let data = {
      user_id: user_id,
      year: year
    };
    return this.http
      .post("http://localhost:83/ret_detail_list_static_year", data)
      .map(res => res.json());
  }

  /*
   * get_by_list_type
   * Return dtl_id, day, month, year, dtl_amount, dtl_type, dtl_description, dts_name, dtl_date, list_type_name by type_list, month_value, year_value, user_id
   * @input type_list, month_value, year_value, user_id
   * @output dtl_id, day, month, year, dtl_amount, dtl_type, dtl_description, dts_name, dtl_date, list_type_name
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

  
  /*
   * get_distinct_by_list_type
   * Return date_data, day, month, year by type_list, month_value, year_value, user_id
   * @input type_list, month_value, year_value, user_id
   * @output date_data, day, month, year
   * @author Chutipong
   * @Create Date 2563-03-16
   */
  get_distinct_by_list_type(type_list: any, month_value: any, year_value: any, user_id: any) {
    let data = {
      type_list: type_list,
      month_value: month_value,
      year_value: year_value,
      user_id: user_id
    };

    return this.http
      .post("http://localhost:83/distinct_ret_detail_list_by_list_type", data)
      .map(res => res.json());
  }
}
