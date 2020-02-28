import { Input, Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

import {
  AlertController,
  ToastController,
  LoadingController
} from "@ionic/angular";

@Component({
  selector: "app-update-master-data-external",
  templateUrl: "./update-master-data-external.page.html",
  styleUrls: ["./update-master-data-external.page.scss"]
})
export class UpdateMasterDataExternalPage implements OnInit {
  public check_name: string;
  private department_name: string;
  private department_type_id: number = 2;
  private organizeby: string;
  private is_active: number;
  private modify_user_id: number;
  private externaldata: any = [];
  public radiusmiles = 1;
  public minmaxprice = {
    upper: 500,
    lower: 10
  };
  @Input() department_id: number;

  constructor(
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
  //     message: "ต้องการลบหน่วยงานภายนอกหรือไม่",
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
  //           this.ExternalDepartmentService.delete_external_department(
  //             this.department_id
  //           ).subscribe(result => {
  //             if (result != "cannot delete") {
  //               console.log("delete success");
  //               loader.present();
  //               loader.onWillDismiss().then(async l => {
  //                 const toast = await this.toastCtrl.create({
  //                   showCloseButton: true,
  //                   message: "ลบหน่วยงานภายนอกสำเร็จ",
  //                   duration: 3000,
  //                   position: "bottom"
  //                 });
  //                 this.modalCtrl.dismiss();
  //                 toast.present();
  //                 // location.reload();
  //               });
  //             } else {
  //               loader.present();
  //               loader.onWillDismiss().then(async l => {
  //                 const toast = await this.toastCtrl.create({
  //                   showCloseButton: true,
  //                   message: "ไม่สามารถลบหน่วยงานภายนอกรายการนี้ได้",
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

  closeModal() {
    this.modalCtrl.dismiss();
  }

  async edit_data() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
        showCloseButton: true,
        message: "แก้ไขหน่วยงานภายนอกสำเร็จ",
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
      message: "ชื่อหน่วยงานภายนอกซ้ำ",
      buttons: ["ตกลง"]
    });
    await alert.present();
  }
}
