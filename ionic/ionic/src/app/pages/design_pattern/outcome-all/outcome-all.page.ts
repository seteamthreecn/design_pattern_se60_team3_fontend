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
import { InsertOutcomePage } from "../../modal/pattern_design/insert-outcome/insert-outcome.page";

//Show Data
import { EditDataOutcomePage } from "../../modal/pattern_design/edit-data-outcome/edit-data-outcome.page";

//Edit Data
import { ShowDataOutcomePage } from "../../modal/pattern_design/show-data-outcome/show-data-outcome.page";

import { RetDetailSubTypeService } from "src/app/service/ret-detail-sub-type.service";

@Component({
  selector: "app-outcome-all",
  templateUrl: "./outcome-all.page.html",
  styleUrls: ["./outcome-all.page.scss"]
})
export class OutcomeAllPage implements OnInit {
  myDate: String = new Date().toISOString();
  option: any;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public RetDetailSubTypeService: RetDetailSubTypeService
  ) {}

  ngOnInit() {
    this.RetDetailSubTypeService.get_detail_sub_type_by_dts_type_id(2).subscribe(result => {
      this.option = result;
    });
  }

  async input_data() {
    const modal = await this.modalCtrl.create({
      component: InsertOutcomePage
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
                message: "ลบรายจ่ายสำเร็จ",
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

  async edit_data_outcome() {
    const modal = await this.modalCtrl.create({
      component: EditDataOutcomePage
    });
    return await modal.present();
  }

  async show_data_outcome() {
    const modal = await this.modalCtrl.create({
      component: ShowDataOutcomePage
    });
    return await modal.present();
  }
}
