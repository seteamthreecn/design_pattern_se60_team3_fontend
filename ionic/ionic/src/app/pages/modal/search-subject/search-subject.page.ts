import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search-subject',
  templateUrl: './search-subject.page.html',
  styleUrls: ['./search-subject.page.scss'],
})
export class SearchSubjectPage implements OnInit {

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
