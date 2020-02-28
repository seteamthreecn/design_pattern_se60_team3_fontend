import { Component, OnInit, Input } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";

import {
  AlertController,
  ToastController,
  LoadingController
} from "@ionic/angular";

@Component({
  selector: "app-update-master-data-internal",
  templateUrl: "./update-master-data-internal.page.html",
  styleUrls: ["./update-master-data-internal.page.scss"]
})
export class UpdateMasterDataInternalPage implements OnInit {
  public check_name: string;
  private department_name: string;
  private department_type_id: number = 1;
  private organizeby: string;
  private is_active: number;
  private modify_user_id: number;
  private internaldata: any = [];
  public radiusmiles = 1;
  public minmaxprice = {
    upper: 500,
    lower: 10
  };
  @Input() department_id: number;

  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
  }

  

  // async delete_data() {
  //   const alert = await this.alertCtrl.create({
  //     header: "ยืนยันการลบข้อมูล?",
  //     message: "ต้องการลบหน่วยงานภายในหรือไม่",
  //     buttons: [
  //       {
  //         text: "ยกเลิก",
  //         role: "cancel",
  //         cssClass: "secondary",
  //         handler: () => {
  //           console.log("Confirm Cancel");
  //         }
  //       },
  //       {
  //         text: "ยืนยัน",
  //         handler: async () => {
  //           const loader = await this.loadingCtrl.create({
  //             duration: 2000
  //           });
  //           this.InternalDepartmentService.delete_internal_department(
  //             this.department_id
  //           ).subscribe(result => {
  //             if (result != "cannot delete") {
  //               loader.present();
  //               loader.onWillDismiss().then(async () => {
  //                 const toast = await this.toastCtrl.create({
  //                   showCloseButton: true,
  //                   message: "ลบหน่วยงานภายในสำเร็จ",
  //                   duration: 3000,
  //                   position: "bottom"
  //                 });
  //                 this.modalCtrl.dismiss();
  //                 toast.present();
  //                 // location.reload();
  //               });
  //             } else {
  //               loader.present();
  //               loader.onWillDismiss().then(async () => {
  //                 const toast = await this.toastCtrl.create({
  //                   showCloseButton: true,
  //                   message: "ไม่สามาถลบหน่วยงานภายในรายการนี้ได้",
  //                   duration: 3000,
  //                   position: "bottom"
  //                 });
  //                 this.modalCtrl.dismiss();
  //                 toast.present();
  //                 // location.reload();
  //               });
  //             }
  //           });
  //         }
  //       }
  //     ]
  //   });

  //   await alert.present();
  // }

  async edit_data() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
        showCloseButton: true,
        message: "แก้ไขหน่วยงานภายในสำเร็จ",
        duration: 3000,
        position: "bottom"
      });
      this.modalCtrl.dismiss();
      toast.present();
      location.reload();
    });
  }

  async empty_alert() {
    const alert = await this.alertCtrl.create({
      message: "กรุณากรอกข้อมูลให้ครบ",
      buttons: ["ตกลง"]
    });
    await alert.present();
  }

  async name_duplicatealert() {
    const alert = await this.alertCtrl.create({
      message: "ชื่อหน่วยงานภายในซ้ำ",
      buttons: ["ตกลง"]
    });
    await alert.present();
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
