import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-master-data-interval',
  templateUrl: './edit-master-data-interval.page.html',
  styleUrls: ['./edit-master-data-interval.page.scss'],
})
export class EditMasterDataIntervalPage implements OnInit {

  public radiusmiles = 1;
  public minmaxprice = {
    upper: 500,
    lower: 10
  };
  
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
