import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RetUserService } from "../../service/ret-user.service";
import { Storage } from "@ionic/storage";
import { AppComponent } from "../../app.component";

import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  LoadingController
} from "@ionic/angular";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  public onLoginForm: FormGroup;
  private username: string;

  private password: String;
  private user_list: any = [];

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private RetUserService: RetUserService,
    private storage: Storage,
    private appcomponent: AppComponent
  ) {}

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.onLoginForm = this.formBuilder.group({
      username: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });
  }

  async forgotPass() {
    const alert = await this.alertCtrl.create({
      header: "ลืมรหัสผ่าน?",
      message: "กรอกเบอร์โทรศัพท์ของท่านเพื่อแจ้งรหัสผ่าน.",
      inputs: [
        {
          name: "tel",
          type: "tel",
          placeholder: "กรุณากรอกเบอร์โทรศัพท์"
        }
      ],
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
                message: "เรียบร้อย! กรุณาตรวจสอบที่ข้อความของคุณ",
                duration: 3000,
                position: "bottom"
              });

              toast.present();
            });
          }
        }
      ]
    });

    await alert.present();
  }

  async contractLogin() {
    this.navCtrl.navigateRoot("/register");
  }

  goToHome() {
    this.navCtrl.navigateRoot("/home-results");
  }

  check_authentication() {
    this.RetUserService.get_all().subscribe(result => {
      this.user_list = result;
      let check_authentication = false;
      for (let i = 0; i < this.user_list.length; i++) {
        if (
          this.user_list[i].user_username == this.username &&
          this.user_list[i].user_password == this.password
        ) {
          localStorage.setItem("user_id",this.user_list[i].user_id)
          this.appcomponent.get_user_data_by_user_id()
          check_authentication = true;
          break;
        }
      }
      if (check_authentication) {
        this.goToHome();
      } else {
        this.login_authentication_fail_alert();
      }
    });
  }

  async login_authentication_fail_alert() {
    const alert = await this.alertCtrl.create({
      header: "ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง กรุณาทำการเข้าสู่ระบบใหม่!",
      buttons: [
        {
          text: "ปิด",
          handler: async () => {}
        }
      ]
    });
    await alert.present();
  }
}
