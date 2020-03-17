import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";


@Injectable({
  providedIn: 'root'
})
export class RetWalletService {

  constructor(private http: Http) { }

  /*
	 * get_wallet_list
	 * Return wall_dtl_id, user_id
	 * @input dtl_month, dtl_year, dtl_type, dtl_dts_id, wall_user_id
	 * @output wall_dtl_id, user_id
	 * @author Chutipong
	 * @Create Date 2563-03-09
	 */
  get_wallet_list(dtl_month: any, dtl_year: any, dtl_type: any, dtl_dts_id: any, wall_user_id: any) {
    let data = {
      'dtl_month': dtl_month,
      'dtl_year': dtl_year,
      'dtl_type': dtl_type,
      'dtl_dts_id': dtl_dts_id,
      'wall_user_id': wall_user_id
    }

    return this.http
      .post("http://localhost:83/ret_wallet_full_option", data)
      .map(res => res.json());

  }

  /*
	 * insert
	 * Insert wallet'data by wall_user_id, wall_dtl_id
	 * @input wall_user_id, wall_dtl_id
	 * @output -
	 * @author Chutipong
	 * @Create Date 2563-03-09
	 */
  insert(wall_user_id: any, wall_dtl_id: any) {
    let data = {
      'wall_user_id': wall_user_id,
      'wall_dtl_id': wall_dtl_id
    }
    return this.http
      .post("http://localhost:83/insert_ret_wallet", data)
      .map(res => res.json());
  }

  /*
	 * delete
	 * Delete wallet's data by wall_dtl_id
	 * @input wall_dtl_id
	 * @output -
	 * @author Chutipong
	 * @Create Date 2563-03-09
	 */
  delete(wall_dtl_id: any) {
    let data = {
      'wall_dtl_id': wall_dtl_id
    }
    return this.http
      .post("http://localhost:83/delete_ret_wallet", data)
      .map(res => res.json());
  }
}
