import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import {
  AlertController,
  ToastController,
  LoadingController
} from "@ionic/angular";

@Component({
  selector: "app-input-master-data-category",
  templateUrl: "./input-master-data-category.page.html",
  styleUrls: ["./input-master-data-category.page.scss"]
})
export class InputMasterDataCategoryPage implements OnInit {
  private category_name: string;
  private organizeby: string;
  private is_active: number;
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
    // location.reload();
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
        showCloseButton: true,
        message: "เพิ่มประเภทเรื่องร้องเรียนสำเร็จ",
        duration: 3000,
        position: "bottom"
      });
      this.modalCtrl.dismiss();
      toast.present();
      // location.reload();
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
      message: "ชื่อประเภทเรื่องร้องเรียนซ้ำ",
      buttons: ["ตกลง"]
    });
    await alert.present();
  }
}
