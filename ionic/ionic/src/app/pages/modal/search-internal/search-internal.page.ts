import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search-internal',
  templateUrl: './search-internal.page.html',
  styleUrls: ['./search-internal.page.scss'],
})
export class SearchInternalPage implements OnInit {
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
