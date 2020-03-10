import { Component, OnInit } from "@angular/core";
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  LoadingController
} from "@ionic/angular";

//Input Data
import { InsertIncomePage } from "../../modal/pattern_design/insert-income/insert-income.page";

//Show Data
import { EditDataIncomePage } from "../../modal/pattern_design/edit-data-income/edit-data-income.page";

//Edit Data
import { ShowDataIncomePage } from "../../modal/pattern_design/show-data-income/show-data-income.page";

import { RetDetailSubTypeService } from "src/app/service/ret-detail-sub-type.service";

@Component({
  selector: "app-income-all",
  templateUrl: "./income-all.page.html",
  styleUrls: ["./income-all.page.scss"]
})
export class IncomeAllPage implements OnInit {
  myDate: String = new Date().toISOString();
  option:any

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public RetDetailSubTypeService: RetDetailSubTypeService
  ) {}

  ngOnInit() {
    this.RetDetailSubTypeService.get_detail_sub_type_by_dts_type_id(1).subscribe(result => {
      this.option = result
    });
  }

  async input_data() {
    const modal = await this.modalCtrl.create({
      component: InsertIncomePage
    });
    return await modal.present();
  }

  async delete_data() {
    const alert = await this.alertCtrl.create({
      header: "ยืนยันการลบรายจ่าย?",
      message: "ต้องการลบรายจ่ายรายการนี้หรือไม่",
      buttons: [
        {
          text: "ยกเลิก",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          }
        },
        {
          text: "ยืนยัน",
          handler: async () => {
            const loader = await this.loadingCtrl.create({
              duration: 2000
            });
            loader.present();
            loader.onWillDismiss().then(async l => {
              const toast = await this.toastCtrl.create({
                showCloseButton: true,
                message: "ไม่สามารถลบประเภทเรื่องร้องเรียนรายการนี้ได้",
                duration: 3000,
                position: "bottom"
              });
              this.modalCtrl.dismiss();
              toast.present();
              location.reload();
            });
          }
        }
      ]
    });

    await alert.present();
  }

  async edit_data_income() {
    const modal = await this.modalCtrl.create({
      component: EditDataIncomePage
    });
    return await modal.present();
  }

  async show_data_income() {
    const modal = await this.modalCtrl.create({
      component: ShowDataIncomePage
    });
    return await modal.present();
  }
}
