import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
import {
  AlertController,
  ToastController,
  LoadingController,
  NavController
} from "@ionic/angular";

@Component({
  selector: 'app-edit-proflie',
  templateUrl: './edit-proflie.page.html',
  styleUrls: ['./edit-proflie.page.scss'],
})
export class EditProfliePage implements OnInit {
  public radiusmiles = 1;
  public minmaxprice = {
    upper: 500,
    lower: 10
  };
  constructor(
    private modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  async edit_profile() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
        showCloseButton: true,
        message: 'ข้อมูลส่วนตัวถูกแก้ไขเรียบร้อย',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
      this.navCtrl.navigateForward('/profile');
    });
  }

}
