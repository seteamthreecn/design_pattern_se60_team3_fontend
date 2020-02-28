import { Component, OnInit, Input } from '@angular/core';
import { ReportListService } from '../../../services/report-list.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController
} from '@ionic/angular';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.page.html',
  styleUrls: ['./search-filter.page.scss'],
})
export class SearchFilterPage implements OnInit {
  public radiusmiles = 1;
  public minmaxprice = {
    upper: 500,
    lower: 10
  };

  @Input() case_id: number;
  @Input() case_status_id: number;
  private is_self: boolean = true;

  constructor(private ReportListService: ReportListService,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController) { }

  ngOnInit() {
    console.log(this.case_id + " " + this.case_status_id)
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'ยืนยันการเปลี่ยนแปลงสถานะ',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'ยืนยัน',
          handler: () => {
            this.closeModal()
            this.ReportListService.update_report(this.case_id, this.case_status_id).subscribe(result => {
              console.log("update success")
            })
            window.location.reload();
          }
        }
      ]
    });

    await alert.present();
  }

  check_draft(result: any) {
    this.case_status_id = 1
    this.presentAlertConfirm()
  }

  check_doing(result: any) {
    this.case_status_id = 2
    this.presentAlertConfirm()
  }

  check_done(result: any) {
    this.case_status_id = 3
    this.presentAlertConfirm()
  }

  check_fail(result: any) {
    this.case_status_id = 4
    this.presentAlertConfirm()
  }
}
