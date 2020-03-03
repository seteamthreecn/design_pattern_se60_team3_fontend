import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { UserService } from "src/app/services/user.service";
import { Storage } from "@ionic/storage";
import {
  AlertController,
  ToastController,
  LoadingController
} from "@ionic/angular";

//Edit Data
import { EditProfliePage } from "../edit-proflie/edit-proflie.page";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"]
})
export class ProfilePage implements OnInit {
  public radiusmiles = 1;
  private user_data: any = [];
  public minmaxprice = {
    upper: 500,
    lower: 10
  };
  constructor(
    private modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private UserService: UserService,
    private storage: Storage
  ) {}

  ngOnInit() {
    this.get_user_data_by_user_name();
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  async edit_profile() {
    const modal = await this.modalCtrl.create({
      component: EditProfliePage
    });
    return await modal.present();
  }

  get_user_data_by_user_name() {
    // Or to get a key/value pair
    this.storage.get("user_username").then(data => {
      console.log("Your user_username is", data);
      this.UserService.get_user_data_by_user_username(data).subscribe(
        result => {
          console.log(result);
          this.user_data = result;
          console.log(this.user_data[0].user_fname)
          console.log(result[0].user_fname)
        }
      );
    });
  }
}
