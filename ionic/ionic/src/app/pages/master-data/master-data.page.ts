import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
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
import { SearchInternalPage } from "../../pages/modal/search-internal/search-internal.page";
import { ImagePage } from "./../modal/image/image.page";
// Call notifications test by Popover and Custom Component.
import { NotificationsComponent } from "./../../components/notifications/notifications.component";
import { EditMasterDataIntervalPage } from "../../pages/modal/edit-master-data/edit-master-data-interval/edit-master-data-interval.page";

//Input Data
import { InputMasterDataInternalPage } from "../../pages/modal/pages/modal/input-master-data-internal/input-master-data-internal.page";

//Edit Data
import { UpdateMasterDataInternalPage } from "../../pages/modal/pages/modal/update-master-data-internal/update-master-data-internal.page";

@Component({
  selector: "app-master-data",
  templateUrl: "./master-data.page.html",
  styleUrls: ["./master-data.page.scss"]
})
export class MasterDataPage {
  async input_data() {
    const modal = await this.modalCtrl.create({
      component: InputMasterDataInternalPage
    });
    return await modal.present();
  }

  async edit_data(department_id: number) {
    const modal = await this.modalCtrl.create({
      component: UpdateMasterDataInternalPage,
      componentProps: {
        department_id: department_id
      }
    });
    return await modal.present();
  }

  private internalDepartmentList: any = [];
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

  ngOnInit() {}

  async delete_data(department_id: number) {
    const alert = await this.alertCtrl.create({
      header: "ยืนยันการลบข้อมูล?",
      message: "ต้องการลบหน่วยงานภายในหรือไม่",
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
            loader.onWillDismiss().then(async () => {
              const toast = await this.toastCtrl.create({
                showCloseButton: true,
                message: "ลบหน่วยงานภายในสำเร็จ",
                duration: 3000,
                position: "bottom"
              });
            });
          }
        }
      ]
    });

    await alert.present();
  }
}
