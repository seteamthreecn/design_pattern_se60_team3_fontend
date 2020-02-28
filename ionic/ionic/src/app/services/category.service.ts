import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: Http) { }

  get_all() {
    return this.http.post("http://localhost:83/category","").map(res => res.json());
  }
  search_name_category(name: string) {
    let data = {"name":name}
    return this.http.post("http://localhost:83/category_search_name/", data).map(res => res.json());
  }
  search_category(name: string,is_active: number) {
    let data = {"name":name, "is_active":is_active}
    return this.http.post("http://localhost:83/category_search/", data).map(res => res.json());
  }

  delete_category(category_id: number){
    let data = category_id
    return this.http.delete("http://localhost:83/category_delete/"+data).map(res => res.json());
  }

  master_data_insert_category({ order_no, name, is_active, create_user_id }: { order_no: number; name: string; is_active: number; create_user_id: number; }) {
    let data = {"order_no":order_no,"name":name,"is_active":is_active,"create_user_id":create_user_id}
    return this.http.post("http://localhost:83/insert_category/", data).map(res => res.json());
  }

  master_data_get_last_category_order_no() {
    return this.http.post("http://localhost:83/get_last_category_order_no/", "").map(res => res.json());
  }

  check_name_category(name: string) {
    let data = {"name":name}
    return this.http.post("http://localhost:83/category_check_name_duplicate/", data).map(res => res.json());
  }

  get_category_data_by_id(category_id: number) {
    let data = {"category_id":category_id}
    return this.http.post("http://localhost:83/get_category_data_by_id/", data).map(res => res.json());
  }

  master_data_update_category({ name, is_active, modify_user_id, category_id }: { name: string; is_active: number; modify_user_id: number; category_id: number; }) {
    let data = {"name":name,"is_active":is_active,"modify_user_id":modify_user_id,"category_id":category_id}
    return this.http.post("http://localhost:83/update_category/", data).map(res => res.json());
  }
}
