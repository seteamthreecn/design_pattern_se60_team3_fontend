import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-show-data-outcome',
  templateUrl: './show-data-outcome.page.html',
  styleUrls: ['./show-data-outcome.page.scss'],
})
export class ShowDataOutcomePage implements OnInit {
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
