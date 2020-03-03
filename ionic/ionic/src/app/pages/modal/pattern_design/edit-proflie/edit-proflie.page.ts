import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { UserService } from "src/app/services/user.service";
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
    private UserService: UserService,
    private nativeStorage: NativeStorage,
    private storage: Storage,
    private RetUserService: RetUserService
  ) {}

  ngOnInit() {
    this.get_user_data_by_user_name();
  }

  get_user_data_by_user_name() {
    // Or to get a key/value pair
    this.storage.get("user_username").then(data => {
      this.RetUserService.get_user_data_by_user_username(data).subscribe(
        result => {
          console.log(result);
          this.user_fname = result[0].user_fname;
          this.user_lname = result[0].user_lname;
          this.user_username = result[0].user_username;
          this.user_email = result[0].user_email;
        }
      );
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
      this.navCtrl.navigateForward("/profile");
    });
  }
}
