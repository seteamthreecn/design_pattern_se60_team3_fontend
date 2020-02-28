import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search-external',
  templateUrl: './search-external.page.html',
  styleUrls: ['./search-external.page.scss'],
})
export class SearchExternalPage implements OnInit {

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
