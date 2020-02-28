import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private http: Http) { }

  get_all() {
    return this.http.post("http://localhost:83/channel","").map(res => res.json());
  }
  search_name_channel(name: string) {
    let data = {"name":name}
    return this.http.post("http://localhost:83/channel_search_name/", data).map(res => res.json());
  }
  search_channel(name: string,is_active: number) {
    let data = {"name":name, "is_active":is_active}
    return this.http.post("http://localhost:83/channel_search/", data).map(res => res.json());
  }
  delete_channel(channel_id: number){
    let data = channel_id
    return this.http.delete("http://localhost:83/channel_delete/"+data).map(res => res.json());
  }

  master_data_insert_channel({ order_no, name, is_active, create_user_id }: { order_no: number; name: string; is_active: number; create_user_id: number; }) {
    let data = {"order_no":order_no,"name":name,"is_active":is_active,"create_user_id":create_user_id}
    return this.http.post("http://localhost:83/insert_channel/", data).map(res => res.json());
  }

  master_data_get_last_channel_order_no() {
    return this.http.post("http://localhost:83/get_last_channel_order_no/", "").map(res => res.json());
  }

  check_name_channel(name: string) {
    let data = {"name":name}
    return this.http.post("http://localhost:83/channel_check_name_duplicate/", data).map(res => res.json());
  }

  get_channel_data_by_id(channel_id: number) {
    let data = {"channel_id":channel_id}
    return this.http.post("http://localhost:83/get_channel_data_by_id/", data).map(res => res.json());
  }

  master_data_update_channel({ name, is_active, modify_user_id, channel_id }: { name: string; is_active: number; modify_user_id: number; channel_id: number; }) {
    let data = {"name":name,"is_active":is_active,"modify_user_id":modify_user_id,"channel_id":channel_id}
    return this.http.post("http://localhost:83/update_channel/", data).map(res => res.json());
  }
}
