import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: 'root'
})
export class RetDetailSubTypeService {

  constructor(private http: Http) { }

  /*
	 * insert
	 * ..
	 * @input -
	 * @output -
	 * @author Chutipong
	 * @Create Date 2563-03-09
	 */
  insert(dts_name: String, dts_type_id: any) {
    let data = {
      'dts_name': dts_name,
      'dts_type_id': dts_type_id
    }
    return this.http
      .post("http://localhost:83/insert_detail_sub_type", data)
      .map(res => res.json());
  }

  /*
	 * get_by_key
	 * ..
	 * @input dts_id
	 * @output -
	 * @author Chutipong
	 * @Create Date 2563-03-09
	 */
  get_by_key(dts_id: any) {
    let data = {"dts_id" : dts_id};
    return this.http
      .post("http://localhost:83/ret_detail_sub_type_by_dts_id", data)
      .map(res => res.json());
  }

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
      .post("http://localhost:83/ret_detail_sub_type", "")
      .map(res => res.json());
  }

  /*
  * get_detail_sub_type_by_dts_type_id
  * ..
  * @input dts_type_id
  * @output -
  * @author Chutipong
  * @Create Date 2563-03-09
  */
 get_detail_sub_type_by_dts_type_id(dts_type_id: any) {
   let data = {'dts_type_id' : dts_type_id}
  return this.http
    .post("http://localhost:83/ret_detail_sub_type_by_dts_type_id", data)
    .map(res => res.json());
}

}
