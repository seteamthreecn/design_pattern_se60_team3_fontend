import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  LoadingController
} from '@ionic/angular';

// Service
import { RetDetailListService } from "../../service/ret-detail-list.service";
import { RetWalletService } from "../../service/ret-wallet.service";


@Component({
  selector: 'app-ret-wallet',
  templateUrl: './ret-wallet.page.html',
  styleUrls: ['./ret-wallet.page.scss'],
})
export class RetWalletPage implements OnInit {

  private wall_dtl_id: any;
  private wall_user_id: any;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public RetDetailListService: RetDetailListService,
    public RetWalletService: RetWalletService,
    public route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.wall_user_id = localStorage.getItem('user_id')
  }

  get_last_dtl_id(){
    this.RetDetailListService.get_last().subscribe(result => {
      this.wall_dtl_id =  result[0].dtl_id
    })
  }

  insert(){
    this.RetWalletService.insert(this.wall_user_id, this.wall_dtl_id).subscribe(result => {
      console.log("insert suc")
    })
  }

  

}
