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
import { RetUserService } from "../../service/ret-user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public onRegisterForm: FormGroup;

  private fname: string;
  private lname: string;
  private username: string;
  private password: string;
  private password2: string;
  private phone_no: string;
  private email: string;
  private guid_img: string;
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
    private RetUserService: RetUserService
  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.onRegisterForm = this.formBuilder.group({
      'firstName': [null, Validators.compose([
        Validators.required
      ])],
      'lastName': [null, Validators.compose([
        Validators.required
      ])],
      'username': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])],
      'password2': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  async reload_login() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(() => {
      this.navCtrl.navigateRoot('/');
    });
  }

  goToLogin() {
    this.navCtrl.navigateRoot('/');
  }

  sign_up() {
    this.RetUserService.get_all().subscribe(result => {
      this.user_list = result;
      let check_authentication = true
      for (let i = 0; i < this.user_list.length; i++) {
        if (this.user_list[i].user_username == this.username) {
          check_authentication = false
          break
        }
      }
      if (check_authentication) {
        if (this.password != this.password2) {
          this.check_password()
        } else {
          this.reload_login()
          this.insert_user()          
        }
      } else {
        this.sign_up_fail_alert()
      }
    });
  }

  async sign_up_success_alert() {
    const alert = await this.alertCtrl.create({
      header: 'สร้างบัญชีสำเร็จ',
      buttons: [{
        text: 'ปิด',
        handler: async () => {
          this.goToLogin()
        }
      }
      ]
    });
    await alert.present();
  }

  async check_password() {
    const alert = await this.alertCtrl.create({
      header: 'กรุณากรอกรหัสผ่านให้ตรงกัน',
      buttons: [{
        text: 'ปิด',
        handler: async () => {
        }
      }
      ]
    });
    await alert.present();
  }

  async sign_up_fail_alert() {
    const alert = await this.alertCtrl.create({
      header: 'ไม่สามารถสร้างรหัสผ่านได้ เนื่องจากมีชื่อผู้ใช้งานอยู่ระบบแล้ว!',
      buttons: [{
        text: 'ปิด',
        handler: async () => {
        }
      }
      ]
    });
    await alert.present();
  }


  insert_user() {
    this.RetUserService.insert(this.username, this.password, this.fname, this.lname, this.phone_no, this.email, this.guid_img).subscribe(result => {
    });
  }
}
