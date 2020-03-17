import { Component, OnInit, Input } from "@angular/core";
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  LoadingController
} from "@ionic/angular";

// Service
import { RetDetailSubTypeService } from "../../../../service/ret-detail-sub-type.service";
import { RetDetailListService } from "../../../../service/ret-detail-list.service";
import { RetWalletService } from "../../../../service/ret-wallet.service";

// Import ret_detail_list
import { RetDetailListPage } from "../../../ret-detail-list/ret-detail-list.page";

@Component({
  selector: "app-edit-data-list",
  templateUrl: "./edit-data-list.page.html",
  styleUrls: ["./edit-data-list.page.scss"]
})
export class EditDataListPage implements OnInit {
  private dts_list: any = [];
  private dtl_list: any = [];
  private class_date = true;
  private class_number = true;
  private disabled = false;
  @Input() dts_type: any;
  @Input() dtl_id: any;

  public radiusmiles = 1;
  public minmaxprice = {
    upper: 500,
    lower: 10
  };

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
    public RetDetailSubTypeService: RetDetailSubTypeService

  ) { }

  ngOnInit() {
    this.dropdown_sub_type();
    this.edit_data();
    if (
      this.dtl_list.dtl_description == null ||
      this.dtl_list.dtl_description == ""
    ) {
      this.dtl_list.dtl_description = "";
    }
    console.log(this.dtl_list.dtl_amount);
  }

  button_disable() {
    if (
      this.dtl_list.dtl_amount == 0 ||
      typeof this.dtl_list.dtl_dts_id === "undefined" ||
      typeof this.dtl_list.dtl_amount === "undefined" ||
      this.dtl_list.dtl_date == ""
    ) {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
  }

  validate_number($event: any) {
    var value = $event.target.value;
    if (value == 0 || typeof value === "undefined") {
      this.class_number = false;
    } else {
      this.class_number = true;
    }
    this.button_disable();
  }

  validate_date($event: any) {
    var value = $event.target.value;
    if (value == "") {
      this.class_date = false;
    } else {
      this.class_date = true;
    }
    this.button_disable();
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  async update_data() {
    if (this.dtl_list.dtl_description == undefined) {
      this.dtl_list.dtl_description = ""
    }

    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
        showCloseButton: true,
        message: "แก้ไขข้อมูลรายรับสำเร็จ",
        duration: 3000,
        position: "bottom"
      });
      const date = new Date(this.dtl_list.dtl_date);
      date.setDate(date.getDate() + 1);
      const formatedDate = date.toISOString()
      this.dtl_list.dtl_date = formatedDate

      this.RetDetailListService.update(this.dtl_list.dtl_id, Math.round(parseFloat(this.dtl_list.dtl_amount)), this.dtl_list.dtl_date, this.dtl_list.dtl_type, this.dtl_list.dtl_dts_id, this.dtl_list.dtl_description).subscribe(result => {
        console.log("update suc")
      })
      this.modalCtrl.dismiss();
      toast.present();
      location.reload();
    });
  }

  dropdown_sub_type() {
    this.RetDetailSubTypeService.get_detail_sub_type_by_dts_type_id(
      this.dts_type
    ).subscribe(result => {
      this.dts_list = result;
      console.log(this.dts_list);
    });
  }

  edit_data() {
    this.RetDetailListService.get_by_key(this.dtl_id).subscribe(result => {
      this.dtl_list = result[0];
      console.log(this.dtl_list);
      console.log(this.dtl_list.dtl_amount);
      if (
        this.dtl_list.dtl_amount == 0 ||
        typeof this.dtl_list.dtl_amount === "undefined"
      ) {
        this.class_number = false;
        this.button_disable();
      }
      if (this.dtl_list.dtl_date == "") {
        this.class_date = false;
        this.button_disable();
      }
    });
  }
}
