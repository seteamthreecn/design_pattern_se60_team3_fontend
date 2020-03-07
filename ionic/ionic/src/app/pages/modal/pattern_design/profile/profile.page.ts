import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { UserService } from "src/app/services/user.service";
import { Storage } from "@ionic/storage";
import { RetUserService } from "src/app/service/ret-user.service";

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
    private RetUserService: RetUserService,
    private storage: Storage
  ) {}

  ngOnInit() {
    console.log("eiei")
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
    console.log("00000")
    this.storage.get("user_username").then(data => {
      this.RetUserService.get_user_data_by_user_username(data).subscribe(
        result => {
          console.log(result);
          this.user_data = result;
        }
      );
    });
  }
}
