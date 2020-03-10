import { Input, Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { RetUserService } from "src/app/service/ret-user.service";
import { Guid } from "guid-typescript";

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
  private user_fname: string;
  private user_lname: string;
  private user_username: string;
  private user_email: string;
  public radiusmiles = 1;
  private user_data: any = [];
  private url: string | ArrayBuffer;
  private user_id: number;
  imgURL: any;
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
    this.user_id = +localStorage.getItem("user_id");
    this.RetUserService.get_user_data_by_user_id(this.user_id).subscribe(
      result => {
        console.log(result);
        console.log(result[0].user_guid_img);
        if (
          typeof result[0].user_email === "undefined" ||
          result[0].user_email == "" ||
          result[0].user_email == "null"
        ) {
          result[0].user_email = "-";
        }
        if (
          typeof result[0].user_guid_img === "undefined" ||
          result[0].user_guid_img == "" ||
          result[0].user_guid_img == null
        ) {
          this.imgURL = "default.png";
        } else {
          this.imgURL = result[0].user_guid_img;
        }
        this.user_fname = result[0].user_fname;
        this.user_lname = result[0].user_lname;
        this.user_username = result[0].user_username;
        this.user_email = result[0].user_email;
        this.user_data = result;
      }
    );
  }
}
