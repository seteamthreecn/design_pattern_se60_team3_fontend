import { Component } from "@angular/core";

import { Platform, NavController, ModalController } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { Pages } from "./interfaces/pages";

import { ProfilePage } from "../app/pages/modal/pattern_design/profile/profile.page";
import { Storage } from "@ionic/storage";
import { RetUserService } from "src/app/service/ret-user.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public appPages: Array<Pages>;
  private fname: string = "";
  private lname: string = "";
  public url = "";
  imgURL: any;
  user_id: number;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private RetUserService: RetUserService,
    private storage: Storage
  ) {
    this.appPages = [
      {
        title: "หน้าแรก",
        url: "/home-results",
        direct: "root",
        icon: "home"
      },
      {
        title: "รายรับทั้งหมด",
        url: "/income-all",
        direct: "forward",
        icon: "add-circle"
      },
      {
        title: "รายจ่ายทั้งหมด",
        url: "/outcome-all",
        direct: "forward",
        icon: "remove-circle"
      },
      {
        title: "กราฟแสดงยอดรายรับ-รายจ่าย",
        url: "/summary",
        direct: "forward",
        icon: "stats"
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
    this.get_user_data_by_user_id();
  }

  initializeApp() {
    this.platform
      .ready()
      .then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      })
      .catch(() => {});
  }

  get_user_data_by_user_id() {
    this.user_id = +localStorage.getItem("user_id");
    // this.storage.get("user_id").then(data => {
    this.RetUserService.get_user_data_by_user_id(this.user_id).subscribe(
      result => {
        if (
          typeof result[0].user_guid_img === "undefined" ||
          result[0].user_guid_img == "" ||
          result[0].user_guid_img == null
        ) {
          this.imgURL = "default.png";
        } else {
          this.imgURL = result[0].user_guid_img;
        }
        this.fname = result[0].user_fname;
        this.lname = result[0].user_lname;
      }
    );
    // });
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
    this.navCtrl.navigateRoot("/");
  }
}
