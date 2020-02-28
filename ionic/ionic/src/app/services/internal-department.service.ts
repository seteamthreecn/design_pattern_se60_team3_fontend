import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class InternalDepartmentService {

  constructor(private http: Http) { }

  get_all() {
    return this.http.post("http://localhost:83/internal_department","").map(res => res.json());
  }
  search_name_internal_department(name: string) {
    let data = {"name":name}
    return this.http.post("http://localhost:83/internal_department_search_name/", data).map(res => res.json());
  }

  search_internal_department(name: string, is_active : number) {
    let data = {"name":name, "is_active" : is_active}
    return this.http.post("http://localhost:83/internal_department_search/", data).map(res => res.json());
  }

  delete_internal_department(department_id: number){
    let data = department_id
    return this.http.delete("http://localhost:83/internal_department_delete/"+data).map(res => res.json());
  }

  master_data_insert_department({ department_type_id, order_no, name, is_active, create_user_id }: { department_type_id: number; order_no: number; name: string; is_active: number; create_user_id: number; }) {
    let data = {"department_type_id":department_type_id,"order_no":order_no,"name":name,"is_active":is_active,"create_user_id":create_user_id}
    return this.http.post("http://localhost:83/insert_department/", data).map(res => res.json());
  }

  master_data_get_last_department_order_no(department_type_id:number) {
    let data = {"department_type_id":department_type_id}
    return this.http.post("http://localhost:83/get_last_department_order_no/", data).map(res => res.json());
  }

  check_name_internal_department(name: string,department_type_id:number) {
    let data = {"name":name,"department_type_id":department_type_id}
    return this.http.post("http://localhost:83/department_check_name_duplicate/", data).map(res => res.json());
  }

  get_department_data_by_id(department_id: number,department_type_id:number) {
    let data = {"department_id":department_id,"department_type_id":department_type_id}
    return this.http.post("http://localhost:83/get_department_data_by_id/", data).map(res => res.json());
  }

  master_data_update_department({ name, is_active, modify_user_id, department_id }: { name: string; is_active: number; modify_user_id: number; department_id: number; }) {
    let data = {"name":name,"is_active":is_active,"modify_user_id":modify_user_id,"department_id":department_id}
    return this.http.post("http://localhost:83/update_department/", data).map(res => res.json());
  }

}
