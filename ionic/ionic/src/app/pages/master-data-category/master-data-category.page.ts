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
import { SearchFilterPage } from '../../pages/modal/search-filter/search-filter.page';
import { ImagePage } from './../modal/image/image.page';
// Call notifications test by Popover and Custom Component.
import { NotificationsComponent } from './../../components/notifications/notifications.component';
import { EditMasterDataIntervalPage } from '../../pages/modal/edit-master-data/edit-master-data-interval/edit-master-data-interval.page';

//Input Data
import { InputMasterDataCategoryPage } from '../../pages/modal/pages/modal/input-master-data-category/input-master-data-category.page';

//Edit Data
import { UpdateMasterDataCategoryPage } from '../../pages/modal/pages/modal/update-master-data-category/update-master-data-category.page';

@Component({
  selector: 'app-master-data-category',
  templateUrl: './master-data-category.page.html',
  styleUrls: ['./master-data-category.page.scss'],
})
export class MasterDataCategoryPage implements OnInit {
  
  async input_data() {
    const modal = await this.modalCtrl.create({
      component: InputMasterDataCategoryPage
    });
    return await modal.present();
  }

  async edit_data(category_id:number) {
    const modal = await this.modalCtrl.create({
      component: UpdateMasterDataCategoryPage,
      componentProps: {
        category_id: category_id
      }
    });
    return await modal.present();
  }

  private categoryList: any = []
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
    public toastCtrl: ToastController,
  ) { }

  ngOnInit() {
  }


  async delete_data(category_id : number) {
    const alert = await this.alertCtrl.create({
      header: "ยืนยันการลบข้อมูล?",
      message: "ต้องการลบประเภทเรื่องร้องเรียนหรือไม่",
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
                      message: "ไม่สามารถลบประเภทเรื่องร้องเรียนรายการนี้ได้",
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
