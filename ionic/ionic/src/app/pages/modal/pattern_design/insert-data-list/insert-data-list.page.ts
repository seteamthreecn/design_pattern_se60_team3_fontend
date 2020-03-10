import { Component, OnInit, Input } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  LoadingController
} from '@ionic/angular';
import { ActivatedRoute } from "@angular/router";

// Service
import { RetDetailSubTypeService } from "../../../../service/ret-detail-sub-type.service";
import { RetDetailListService } from "../../../../service/ret-detail-list.service";
import { RetWalletService } from "../../../../service/ret-wallet.service";

// Import RetWalletPage
import { RetWalletPage } from "../../../ret-wallet/ret-wallet.page";



@Component({
  selector: 'app-insert-data-list',
  templateUrl: './insert-data-list.page.html',
  styleUrls: ['./insert-data-list.page.scss'],
})
export class InsertDataListPage implements OnInit {

  private dts_list: any = []
  private dtl_type_name: any;

  private dtl_amount: any;
  private dtl_date: any;
  private dtl_dts_id: any;
  private dtl_description: any;

  private wall_dtl_id: any;
  private wall_user_id: any;

  @Input() dts_type: any
  @Input() dtl_id: any

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
    public RetDetailSubTypeService: RetDetailSubTypeService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.dts_type == 1) {
      this.dtl_type_name = "รายรับ"
    } else {
      this.dtl_type_name = "รายจ่าย"
    }
    this.dropdown_sub_type()
    this.wall_user_id = localStorage.getItem('user_id')
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  dropdown_sub_type() {
    this.RetDetailSubTypeService.get_detail_sub_type_by_dts_type_id(this.dts_type).subscribe(result => {
      this.dts_list = result
      console.log(this.dts_list)
    })
  }

  async save_data() {

    this.RetDetailListService.insert(this.dtl_amount, this.dtl_date, this.dts_type, this.dtl_dts_id, this.dtl_description).subscribe(result => {
      console.log("insert detail list suc")
      this.RetDetailListService.get_last().subscribe(result => {
        this.wall_dtl_id = result[0].dtl_id
        console.log(this.wall_dtl_id)
        this.RetWalletService.insert(this.wall_user_id, this.wall_dtl_id).subscribe(result => {
          console.log("insert suc")
        })
      })
    })



    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
        showCloseButton: true,
        message: "บันทึกรายรับสำเร็จ",
        duration: 3000,
        position: "bottom"
      });

      this.modalCtrl.dismiss();
      toast.present();
      location.reload();
    });
  }

}
