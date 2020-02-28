import { Component } from '@angular/core';

import { Platform, NavController,ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Pages } from './interfaces/pages';

import {ProfilePage} from '../app/pages/modal/pattern_design/profile/profile.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public appPages: Array<Pages>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {
    this.appPages = [
      {
        title: 'หน้าแรก',
        url: '/home-results',
        direct: 'root',
        icon: 'home'
      },
      {
        title: 'รายรับทั้งหมด',
        url: '/income-all',
        direct: 'forward',
        icon: 'add-circle'
      },
      {
        title: 'รายจ่ายทั้งหมด',
        url: '/outcome-all',
        direct: 'forward',
        icon: 'remove-circle'
      },
      {
        title: 'กราฟแสดงยอดรายรับ-รายจ่าย',
        url: '/summary',
        direct: 'forward',
        icon: 'stats'
      }

      // {
      //   title: 'บันทึกเรื่องร้องเรียน',
      //   url: '/insert-subject',
      //   direct: 'forward',
      //   icon: 'add-circle'
      // },

      // {
      //   title: 'รายการเรื่องร้องเรียน',
      //   url: '/about',
      //   direct: 'forward',
      //   icon: 'list-box'
      // },

      // {
      //   title: 'รายการหน่วยงานภายใน',
      //   url: '/master-data',
      //   direct: 'forward',
      //   icon: 'logo-buffer'
      // },

      // {
      //   title: 'รายการหน่วยงานภายนอก',
      //   url: '/master-data-external',
      //   direct: 'forward',
      //   icon: 'logo-buffer'
      // },

      // {
      //   title: 'รายการช่องทางแหล่งข้อมูล',
      //   url: '/master-data-channel',
      //   direct: 'forward',
      //   icon: 'logo-buffer'
      // },

      // {
      //   title: 'รายการประเภทเรื่องร้องเรียน',
      //   url: '/master-data-category',
      //   direct: 'forward',
      //   icon: 'logo-buffer'
      // }

      // {
      //   title: 'ตั้งค่า',
      //   url: '/settings',
      //   direct: 'forward',
      //   icon: 'cog'
      // }
    ];

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    }).catch(() => {});
  }

  async show_profile() {
    const modal = await this.modalCtrl.create({
      component: ProfilePage
    });
    return await modal.present();
  }
  // goToEditProgile() {
  //   this.navCtrl.navigateForward('edit-profile');
  // }

  logout() {
    this.navCtrl.navigateRoot('/');
  }
}
