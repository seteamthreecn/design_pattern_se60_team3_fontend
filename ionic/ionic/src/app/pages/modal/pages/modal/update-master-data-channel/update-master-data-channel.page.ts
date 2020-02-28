import { Input, Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import {
  AlertController,
  ToastController,
  LoadingController
} from "@ionic/angular";

@Component({
  selector: "app-update-master-data-channel",
  templateUrl: "./update-master-data-channel.page.html",
  styleUrls: ["./update-master-data-channel.page.scss"]
})
export class UpdateMasterDataChannelPage implements OnInit {
  private channel_name: string;
  private organizeby: string;
  private is_active: number;
  private modify_user_id: number;
  private channeldata: any = [];
  public radiusmiles = 1;
  public minmaxprice = {
    upper: 500,
    lower: 10
  };
  @Input() channel_id: number;

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
  //     message: "ต้องการลบช่องทางแหล่งข้อมูลหรือไม่",
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
  //           this.ChannelService.delete_channel(this.channel_id).subscribe(
  //             result => {
  //               if (result != "cannot delete") {
  //                 console.log("delete success");
  //                 loader.present();
  //                 loader.onWillDismiss().then(async l => {
  //                   const toast = await this.toastCtrl.create({
  //                     showCloseButton: true,
  //                     message: "ลบช่องทางแหล่งข้อมูลสำเร็จ",
  //                     duration: 3000,
  //                     position: "bottom"
  //                   });
  //                   this.modalCtrl.dismiss();
  //                   toast.present();
  //                   // location.reload();
  //                 });
  //               } else {
  //                 loader.present();
  //                 loader.onWillDismiss().then(async l => {
  //                   const toast = await this.toastCtrl.create({
  //                     showCloseButton: true,
  //                     message: "ไม่สามรถลบช่องทางแหล่งข้อมูลรายการนี้ได้",
  //                     duration: 3000,
  //                     position: "bottom"
  //                   });
  //                   this.modalCtrl.dismiss();
  //                   toast.present();
  //                   // location.reload();
  //                 });
  //               }
  //             }
  //           );
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
        message: "แก้ไขช่องทางแหล่งข้อมูลสำเร็จ",
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
      message: "ชื่อช่องทางแหล่งข้อมูลซ้ำ",
      buttons: ["ตกลง"]
    });
    await alert.present();
  }
}
