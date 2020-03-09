import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RetDetailListPage } from "../ret-detail-list/ret-detail-list.page";
import { Storage } from "@ionic/storage";

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
  selector: 'app-ret-detail-list-prototype',
  templateUrl: './ret-detail-list-prototype.page.html',
  styleUrls: ['./ret-detail-list-prototype.page.scss'],
})
export class RetDetailListPrototypePage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private storage: Storage
  ) { }

  ngOnInit() {}

  public component: object;
  public circularReference: RetDetailListPage;

  public clone(): this {
    const clone = Object.create(this);

    clone.component = Object.create(this.component);

    clone.circularReference = {
      ...this.circularReference,
      prototype: { ...this },
    };

    return clone;
  }

}
