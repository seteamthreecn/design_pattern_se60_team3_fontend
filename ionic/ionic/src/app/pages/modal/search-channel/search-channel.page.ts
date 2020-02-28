import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search-channel',
  templateUrl: './search-channel.page.html',
  styleUrls: ['./search-channel.page.scss'],
})
export class SearchChannelPage implements OnInit {

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
