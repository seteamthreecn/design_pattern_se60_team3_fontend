import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-show-data-income',
  templateUrl: './show-data-income.page.html',
  styleUrls: ['./show-data-income.page.scss'],
})
export class ShowDataIncomePage implements OnInit {
  public radiusmiles = 1;
  public minmaxprice = {
    upper: 500,
    lower: 10
  };

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
