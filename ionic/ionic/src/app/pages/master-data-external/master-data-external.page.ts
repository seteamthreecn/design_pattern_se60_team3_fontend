import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  LoadingController
} from "@ionic/angular";

// Modals
import { SearchExternalPage } from "../../pages/modal/search-external/search-external.page";
import { ImagePage } from "./../modal/image/image.page";
// Call notifications test by Popover and Custom Component.
import { NotificationsComponent } from "./../../components/notifications/notifications.component";
import { EditMasterDataIntervalPage } from "../../pages/modal/edit-master-data/edit-master-data-interval/edit-master-data-interval.page";

//Input Data
import { InputMasterDataExternalPage } from "../../pages/modal/pages/modal/input-master-data-external/input-master-data-external.page";

//Edit Data
import { UpdateMasterDataExternalPage } from "../../pages/modal/pages/modal/update-master-data-external/update-master-data-external.page";

@Component({
  selector: "app-master-data-external",
  templateUrl: "./master-data-external.page.html",
  styleUrls: ["./master-data-external.page.scss"]
})
export class MasterDataExternalPage implements OnInit {
  async input_data() {
    const modal = await this.modalCtrl.create({
      component: InputMasterDataExternalPage
    });
    return await modal.present();
  }

  async edit_data(department_id: number) {
    const modal = await this.modalCtrl.create({
      component: UpdateMasterDataExternalPage,
      componentProps: {
        department_id: department_id
      }
    });
    return await modal.present();
  }

  private externalDepartmentList: any = [];
  private is_active: boolean = true;
  private is_unactive: boolean = true;
  private text_search: string = "";
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController
  ) {}

  ngOnInit() {
  }


  async delete_data(department_id:number) {
    const alert = await this.alertCtrl.create({
      header: "ยืนยันการลบข้อมูล?",
      message: "ต้องการลบหน่วยงานภายนอกหรือไม่",
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
                message: "ลบหน่วยงานภายนอกสำเร็จ",
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
}
