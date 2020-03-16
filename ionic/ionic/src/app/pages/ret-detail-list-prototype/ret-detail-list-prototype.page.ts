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

const monthShortNames = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];

@Component({
  selector: 'app-ret-detail-list-prototype',
  templateUrl: './ret-detail-list-prototype.page.html',
  styleUrls: ['./ret-detail-list-prototype.page.scss'],
})
export class RetDetailListPrototypePage implements OnInit {  

  private data_list: any = [];
  private month_name: any;
  private type_name: any;
  private amount_list: any;
  private sub_type_list: any;
  private name_list: any;
  private day_list: any;
  private month_list: any;
  private year_list: any;
  private id_list: any;
  private type_list: any;

  private dtl_type_id: any;
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

  this.RetWalletService.get_wallet_list(this.month_search, this.year_search, this.path_type_id, null, localStorage.getItem('user_id')).subscribe(result => {
    this.sum_amount = 0
    this.type_name = result[0].type_list

    if (this.type_name == 'รายรับ') {
      this.dtl_type_id = 1
    } else if (this.type_name == 'รายจ่าย') {
      this.dtl_type_id = 2
    }

    if (result[0].amount_list != null) {
      if (result[0].name_list != null) {
        this.name_list = result[0].name_list.split(',');
      } else {
        this.name_list = result[0].sub_type_list.split(',');
      }

      this.amount_list = result[0].amount_list.split(',');
      this.sub_type_list = result[0].sub_type_list.split(',');

      this.id_list = result[0].id_list.split(',');


      this.day_list = result[0].day_list.split(',');
      this.month_list = result[0].month_list.split(',');
      this.year_list = result[0].year_list.split(',');

      this.type_list = result[0].dtl_type_list.split(',');
      this.month_name = result[0].month_name

      this.dtl_type_id = result[0].dtl_type_id;

      for (let i = 0; i < this.amount_list.length; i++) {

        let prototype_obj = {} as RetDetailListPage;
        prototype_obj.dtl_id = this.id_list[i]
        prototype_obj.dtl_amount = this.amount_list[i]
        prototype_obj.dtl_date = this.day_list[i] + " " + this.month_list[i] + " " + this.year_list[i]
        prototype_obj.dtl_type = this.type_list[i]
        prototype_obj.dtl_description = this.name_list[i]
        prototype_obj.dtl_dts_name = this.sub_type_list[i]

        if (this.type_name != 'รายรับ - รายจ่าย') {
          this.sum_amount += Number(this.amount_list[i])
        } else {
          if (this.type_list[i] == 1) {
            this.sum_amount += Number(this.amount_list[i])
          } else {
            this.sum_amount -= Number(this.amount_list[i])
          }
        }
        this.data_list[i] = prototype_obj
      }
    }
  })
}

search_list($event: any){
  this.year_search = $event.detail.value.substr(0, 4)
  this.month_search = $event.detail.value.substr(5, 2)
  this.sum_amount = 0;
  this.data_list = []
  this.get_all()
}

}
