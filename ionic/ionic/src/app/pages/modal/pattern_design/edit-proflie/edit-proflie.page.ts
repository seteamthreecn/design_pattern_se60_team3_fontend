import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { NativeStorage } from "@ionic-native/native-storage/ngx";
import { Storage } from "@ionic/storage";
import { RetUserService } from "src/app/service/ret-user.service";
import {
  AlertController,
  ToastController,
  LoadingController,
  NavController
} from "@ionic/angular";

@Component({
  selector: "app-edit-proflie",
  templateUrl: "./edit-proflie.page.html",
  styleUrls: ["./edit-proflie.page.scss"]
})
export class EditProfliePage implements OnInit {
  public radiusmiles = 1;
  private user_lname: string;
  private user_fname: string;
  private user_username: string;
  private user_email: string;
  public minmaxprice = {
    upper: 500,
    lower: 10
  };
  constructor(
    private modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    private nativeStorage: NativeStorage,
    private storage: Storage,
    private RetUserService: RetUserService
  ) {}

  ngOnInit() {
    this.get_user_data_by_user_id();
  }

  get_user_data_by_user_id() {
    // Or to get a key/value pair
    this.storage.get("user_id").then(data => {
      this.RetUserService.get_user_data_by_user_id(data).subscribe(result => {
        if (typeof result[0].user_email != "undefined") {
          result[0].user_email = "";
        }
        this.user_fname = result[0].user_fname;
        this.user_lname = result[0].user_lname;
        this.user_username = result[0].user_username;
        this.user_email = result[0].user_email;
      });
    });
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  async edit_profile() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
        showCloseButton: true,
        message: "ข้อมูลส่วนตัวถูกแก้ไขเรียบร้อย",
        duration: 3000,
        position: "bottom"
      });
      toast.present();
      this.closeModal();
      location.reload();
      // this.navCtrl.navigateForward("/profile");
    });
  }

  async empty_alert() {
    const alert = await this.alertCtrl.create({
      message: "กรุณากรอกข้อมูลที่สำคัญให้ครบ",
      buttons: ["ตกลง"]
    });
    await alert.present();
  }

  async name_duplicatealert() {
    const alert = await this.alertCtrl.create({
      message: "ชื่อผู้ใช้นี้มีผู้ใช้งานแล้ว",
      buttons: ["ตกลง"]
    });
    await alert.present();
  }

  update_profile() {
    if (
      this.user_username.trim() == "" ||
      this.user_fname.trim() == "" ||
      this.user_lname.trim() == ""
    ) {
      this.empty_alert();
    } else {
      this.storage.get("user_id").then(user_id => {
        this.RetUserService.get_user_data_by_user_id(user_id).subscribe(
          user_data => {
            if (this.user_username == user_data[0].user_username) {
              this.RetUserService.update_ret_user_by_user_id(
                this.user_username,
                this.user_fname,
                this.user_lname,
                this.user_email,
                user_id
              ).subscribe(result => {
                console.log("update success");
                this.edit_profile();
              });
            } else {
              this.RetUserService.get_user_data_by_user_username(
                this.user_username
              ).subscribe(result => {
                if (result.length != 0) {
                  this.name_duplicatealert();
                } else {
                  this.RetUserService.update_ret_user_by_user_id(
                    this.user_username,
                    this.user_fname,
                    this.user_lname,
                    this.user_email,
                    user_id
                  ).subscribe(success => {
                    console.log("update success");
                    this.storage.set("user_username", this.user_username);
                    this.edit_profile();
                  });
                }
              });
            }
          }
        );
      });
    }
  }
}
