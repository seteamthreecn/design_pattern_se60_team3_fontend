import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {
  AlertController,
  ToastController,
  LoadingController
} from '@ionic/angular';

@Component({
  selector: 'app-insert-subject',
  templateUrl: './insert-subject.page.html',
  styleUrls: ['./insert-subject.page.scss'],
})
export class InsertSubjectPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }

  async save_data() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
        showCloseButton: true,
        message: 'เพิ่มรายการเรื่องร้องเรียนสำเร็จ',
        duration: 3000,
        position: 'bottom'
      });
      this.modalCtrl.dismiss();
      toast.present();
    });
}

}
