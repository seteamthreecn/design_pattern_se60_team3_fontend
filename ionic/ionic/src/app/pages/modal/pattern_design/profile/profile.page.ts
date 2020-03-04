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
    this.get_user_data_by_user_id();
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

  get_user_data_by_user_id() {
    // Or to get a key/value pair
    this.storage.get("user_id").then(data => {
      this.RetUserService.get_user_data_by_user_id(data).subscribe(result => {
        if (typeof result[0].user_email != "undefined") {
          result[0].user_email = "-";
        }
        this.user_data = result;
      });
    });
  }
}
