import { Component, OnInit } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";
import { Router, ActivatedRoute } from "@angular/router";
import {
  AlertController,
  ToastController,
  LoadingController
} from "@ionic/angular";

@Component({
  selector: "app-input-master-data-internal",
  templateUrl: "./input-master-data-internal.page.html",
  styleUrls: ["./input-master-data-internal.page.scss"]
})
export class InputMasterDataInternalPage implements OnInit {
  private department_name: string;
  private organizeby: string;
  private is_active: number;
  private department_type_id: number = 1;
  private order_no: number;
  private create_user_id: number;
  public radiusmiles = 1;
  public minmaxprice = {
    upper: 500,
    lower: 10
  };

  constructor(
    public navCtrl: NavController,
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
        message: "เพิ่มหน่วยงานภายในสำเร็จ",
        duration: 3000,
        position: "bottom"
      });
      this.modalCtrl.dismiss();
      toast.present();
      // location.reload()
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
