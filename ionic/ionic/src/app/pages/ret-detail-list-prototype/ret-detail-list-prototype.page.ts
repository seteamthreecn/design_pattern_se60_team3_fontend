import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  LoadingController
} from '@ionic/angular';


// Service
import { RetDetailListService } from "../../service/ret-detail-list.service";
import { RetWalletService } from "../../service/ret-wallet.service";

// Import ret_detail_list
import { RetDetailListPage } from "../ret-detail-list/ret-detail-list.page";
import { createSecureContext } from 'tls';

const monthShortNames = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];

@Component({
  selector: 'app-ret-detail-list-prototype',
  templateUrl: './ret-detail-list-prototype.page.html',
  styleUrls: ['./ret-detail-list-prototype.page.scss'],
})
export class RetDetailListPrototypePage implements OnInit {

  private data_list: any = [];

  private type_name: any;
  private sum_amount: any = 0;

  private date_search: String = new Date().toISOString();
  private month_search: any;
  private year_search: any;
  private path_type_id;
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public RetDetailListService: RetDetailListService,
    public RetWalletService: RetWalletService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.path_type_id = this.route.snapshot.paramMap.get('path_list_type');
    this.year_search = this.date_search.substr(0, 4)
    this.month_search = this.date_search.substr(5, 2)
    this.get_all()
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  // Input Modal
  async input_data(dtl_type_id: any) {
    let detail_obj = new RetDetailListPage(this.navCtrl, this.menuCtrl, this.alertCtrl, this.loadingCtrl, this.modalCtrl, this.toastCtrl, this.RetDetailListService, this.RetWalletService);
    detail_obj.call_modal_by_type("insert_data", dtl_type_id);
  }

  // Delete Modal
  async delete_data(id: any, dtl_type_id) {
    let detail_obj = new RetDetailListPage(this.navCtrl, this.menuCtrl, this.alertCtrl, this.loadingCtrl, this.modalCtrl, this.toastCtrl, this.RetDetailListService, this.RetWalletService);
    detail_obj.dtl_id = id;
    detail_obj.call_modal_by_type("delete_data", dtl_type_id);
  }

  // Edit Modal
  async edit_data(id: any, dtl_type_id: any) {
    let detail_obj = new RetDetailListPage(this.navCtrl, this.menuCtrl, this.alertCtrl, this.loadingCtrl, this.modalCtrl, this.toastCtrl, this.RetDetailListService, this.RetWalletService);
    detail_obj.dtl_id = id;
    detail_obj.call_modal_by_type("edit_data", dtl_type_id);
  }

  // Detail Modal
  async show_data(id: any, dtl_type_id: any) {
    let detail_obj = new RetDetailListPage(this.navCtrl, this.menuCtrl, this.alertCtrl, this.loadingCtrl, this.modalCtrl, this.toastCtrl, this.RetDetailListService, this.RetWalletService);
    detail_obj.dtl_id = id;
    detail_obj.call_modal_by_type("show_data", dtl_type_id);
  }

  get_all() {
    // console.log(detail_obj.dtl_list)
    this.RetDetailListService.get_by_list_type(this.path_type_id, this.month_search, this.year_search, localStorage.getItem('user_id')).subscribe(result => {
      this.data_list = result
      console.log(this.data_list)
      this.sum_amount = 0

      if(this.path_type_id == 0){
        this.type_name = "รายรับ - รายจ่าย"
      }else if(this.path_type_id == 1){
        this.type_name = "รายรับ"
      }else{
        this.type_name = "รายจ่าย"
      }

      if (this.data_list.length > 0) {
        for (let i = 0; i < this.data_list.length; i++) {
          if (this.data_list[i].dtl_type == 1) {
            this.sum_amount += Number(this.data_list[i].dtl_amount)
          } else {
            this.sum_amount -= Number(this.data_list[i].dtl_amount)
          }
        }
      }
    })
  }

  search_list($event: any) {
    this.year_search = $event.detail.value.substr(0, 4)
    this.month_search = $event.detail.value.substr(5, 2)
    this.sum_amount = 0;
    this.data_list = []
    this.get_all()
  }

  // async test_get(){
  //   let detail_obj = new RetDetailListPage(this.navCtrl, this.menuCtrl, this.alertCtrl, this.loadingCtrl, this.modalCtrl, this.toastCtrl, this.RetDetailListService, this.RetWalletService);
  //   detail_obj.get_by_list_type(this.path_type_id, this.month_search, this.year_search, localStorage.getItem('user_id'))
  // }

}
