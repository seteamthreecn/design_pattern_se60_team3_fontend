import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  LoadingController
} from '@ionic/angular';

// Modals
import { SearchChannelPage } from '../../pages/modal/search-channel/search-channel.page';
import { ImagePage } from './../modal/image/image.page';
// Call notifications test by Popover and Custom Component.
import { NotificationsComponent } from './../../components/notifications/notifications.component';
import { EditMasterDataIntervalPage } from '../../pages/modal/edit-master-data/edit-master-data-interval/edit-master-data-interval.page';

//Input Data
import { InputMasterDataChannelPage } from '../../pages/modal/pages/modal/input-master-data-channel/input-master-data-channel.page';

//Edit Data
import { UpdateMasterDataChannelPage } from '../../pages/modal/pages/modal/update-master-data-channel/update-master-data-channel.page';

@Component({
  selector: 'app-master-data-channel',
  templateUrl: './master-data-channel.page.html',
  styleUrls: ['./master-data-channel.page.scss'],
})
export class MasterDataChannelPage implements OnInit {

  async input_data() {
    const modal = await this.modalCtrl.create({
      component: InputMasterDataChannelPage
    });
    return await modal.present();
  }

  async edit_data(channel_id:number) {
    const modal = await this.modalCtrl.create({
      component: UpdateMasterDataChannelPage,
      componentProps: {
        channel_id: channel_id
      }
    });
    return await modal.present();
  }

  private channelList: any = []
  private name: string
  private is_active: boolean = true
  private is_unactive: boolean = true
  private text_search:  string = ""
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }


  async delete_data(channel_id:number) {
    const alert = await this.alertCtrl.create({
      header: "ยืนยันการลบข้อมูล?",
      message: "ต้องการลบช่องทางแหล่งข้อมูลหรือไม่",
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
                  loader.onWillDismiss().then(async l => {
                    const toast = await this.toastCtrl.create({
                      showCloseButton: true,
                      message: "ลบช่องทางแหล่งข้อมูลสำเร็จ",
                      duration: 3000,
                      position: "bottom"
                    });
                    this.modalCtrl.dismiss();
                    toast.present();
                    location.reload();
                  });
          }
        }
      ]
    });

    await alert.present();
  }
}
