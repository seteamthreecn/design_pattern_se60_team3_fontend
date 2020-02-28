import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
import {
  AlertController,
  ToastController,
  LoadingController
} from "@ionic/angular";

@Component({
  selector: 'app-insert-outcome',
  templateUrl: './insert-outcome.page.html',
  styleUrls: ['./insert-outcome.page.scss'],
})
export class InsertOutcomePage implements OnInit {

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
  ) { }

  ngOnInit() {
  }

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
        message: "บันทึกรายจ่ายสำเร็จ",
        duration: 3000,
        position: "bottom"
      });
      this.modalCtrl.dismiss();
      toast.present();
      location.reload();
    });
  }

}
