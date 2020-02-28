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
import { InsertIncomePage } from '../../pages/modal/pattern_design/insert-income/insert-income.page';
import { InsertOutcomePage } from '../../pages/modal/pattern_design/insert-outcome/insert-outcome.page';

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
      component: InsertIncomePage
    });
    return await modal.present();
  }

  async open_insert_outcome() {
    const modal = await this.modalCtrl.create({
      component: InsertOutcomePage
    });
    return await modal.present();
  }

  // async open_list_subject() {
  //   this.navCtrl.navigateRoot('/about');
  // }

  // async open_department_internal() {
  //   this.navCtrl.navigateRoot('/master-data');
  // }

  // async open_department__external() {
  //   this.navCtrl.navigateRoot('/master-data-external');
  // }

  // async open_department__channel() {
  //   this.navCtrl.navigateRoot('/master-data-channel');
  // }

  // async open_department__category() {
  //   this.navCtrl.navigateRoot('/master-data-category');
  // }

  togglePopupMenu() {
    return this.openMenu = !this.openMenu;
  }

}
