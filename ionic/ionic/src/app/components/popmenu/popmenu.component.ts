import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController
} from '@ionic/angular';

//Input Data
import { InsertDataListPage } from '../../pages/modal/pattern_design/insert-data-list/insert-data-list.page';

@Component({
  selector: 'popmenu',
  templateUrl: './popmenu.component.html',
  styleUrls: ['./popmenu.component.scss']
})
export class PopmenuComponent implements OnInit {
  openMenu: Boolean = false;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    ) { }

  ngOnInit() {
  }

  async open_insert_income() {
    const modal = await this.modalCtrl.create({
      component: InsertDataListPage,
      componentProps: {
        dts_type: 1
      }
    });
    return await modal.present();
  }

  async open_insert_outcome() {
    const modal = await this.modalCtrl.create({
      component: InsertDataListPage,
      componentProps: {
        dts_type: 2
      }
    });
    return await modal.present();
  }

  togglePopupMenu() {
    return this.openMenu = !this.openMenu;
  }

}
