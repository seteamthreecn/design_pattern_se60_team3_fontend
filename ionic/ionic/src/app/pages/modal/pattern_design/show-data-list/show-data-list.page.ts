import { Component, OnInit, Input } from '@angular/core';
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

@Component({
  selector: 'app-show-data-list',
  templateUrl: './show-data-list.page.html',
  styleUrls: ['./show-data-list.page.scss'],
})
export class ShowDataListPage implements OnInit {

  @Input() dtl_id:any
  @Input() dtl_amount:any
  @Input() dtl_day:any
  @Input() dtl_year:any
  @Input() dtl_dts_id:any
  @Input() dtl_description:any
  @Input() dtl_month:any
  @Input() dtl_dts_name:any
  @Input() dtl_type_name:any

  public radiusmiles = 1;
  public minmaxprice = {
    upper: 500,
    lower: 10
  };

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    if(this.dtl_description == null){
      this.dtl_description = "-"
    }
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
  
}
