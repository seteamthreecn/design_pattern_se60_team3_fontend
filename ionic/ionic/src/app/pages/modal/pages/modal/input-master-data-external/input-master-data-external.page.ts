import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import {
  AlertController,
  ToastController,
  LoadingController
} from "@ionic/angular";

@Component({
  selector: "app-input-master-data-external",
  templateUrl: "./input-master-data-external.page.html",
  styleUrls: ["./input-master-data-external.page.scss"]
})
export class InputMasterDataExternalPage implements OnInit {
  private department_name: string;
  private organizeby: string;
  private is_active: number;
  private department_type_id: number = 2;
  private order_no: number;
  private create_user_id: number;
  public radiusmiles = 1;
  public minmaxprice = {
    upper: 500,
    lower: 10
  };

  constructor(
    private modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  closeModal() {
    this.modalCtrl.dismiss();
  }

  async save_data() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
        showCloseButton: true,
        message: "เพิ่มหน่วยงานภายนอกสำเร็จ",
        duration: 3000,
        position: "bottom"
      });
      // location.reload();
      this.modalCtrl.dismiss();
      toast.present();
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
      message: "ชื่อหน่วยงานซ้ำ",
      buttons: ["ตกลง"]
    });
    await alert.present();
  }
}
