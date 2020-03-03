import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  LoadingController
} from "@ionic/angular";
import { UserService } from "src/app/services/user.service";
import { RegisterPage } from "../../pages/register/register.page";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  public onLoginForm: FormGroup;
  private username: string;
  private userpassword: string;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private storage: Storage,
    private UserService: UserService
  ) {}

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.onLoginForm = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required])],
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

  // // //
  async contractLogin() {
    this.navCtrl.navigateRoot("/register");
  }

  goToHome() {
    this.UserService.get_all().subscribe(result => {
      result.forEach(element => {
        if (
          this.username == element.user_username &&
          this.userpassword == element.user_password
        ) {
          this.storage.set("user_username", this.username);
          this.storage.set("user_password", this.userpassword);
          this.navCtrl.navigateRoot("/home-results");
        }
      });
    });
  }
}
