import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchFilterPage } from '../search-filter/search-filter.page';
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
  selector: 'app-show-data-subject',
  templateUrl: './show-data-subject.page.html',
  styleUrls: ['./show-data-subject.page.scss'],
})
export class ShowDataSubjectPage implements OnInit {
  public radiusmiles = 1;
  public minmaxprice = {
    upper: 500,
    lower: 10
  };
  private report_list: any = []
  private check_box1: boolean = false
  private check_box2: boolean = false
  private check_box3: boolean = false
  private check_box4: boolean = false
  @Input() case_id: number;

  constructor(
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController) { }

  ngOnInit() {
   
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  async delete_subject() {
    const alert = await this.alertCtrl.create({
      header: 'ยืนยันการลบเรื่องร้องเรียน?',
      message: 'ต้องการลบเรื่องร้องเรียนหรือไม่',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'ยืนยัน',
          handler: async () => {
            const loader = await this.loadingCtrl.create({
              duration: 2000
            });

            loader.present();
            loader.onWillDismiss().then(async l => {
              const toast = await this.toastCtrl.create({
                showCloseButton: true,
                message: 'ลบเรื่องร้องเรียนสำเร็จ',
                duration: 3000,
                position: 'bottom'
              });
              this.modalCtrl.dismiss();
              toast.present();
            });
          }
        }
      ]
    });

    await alert.present();
  }

  async edit_status() {
    if (this.report_list[0].case_status_id == 1) {
      this.check_box1 = true
    } else if (this.report_list[0].case_status_id == 2) {
      this.check_box2 = true
    } else if (this.report_list[0].case_status_id == 3) {
      this.check_box3 = true
    } else {
      this.check_box4 = true
    }
    const alert = await this.alertCtrl.create({
      header: 'เลือกสถานะที่ต้องการเปลี่ยนแปลง',
      inputs: [
        {
          name: 'check_box',
          type: 'radio',
          value: '1',
          label: "ฉบับร่าง",
          checked: this.check_box1
        },
        {
          name: 'check_box',
          type: 'radio',
          value: '2',
          label: "กำลังดำเนินการ",
          checked: this.check_box2
        },
        {
          name: 'check_box',
          type: 'radio',
          value: '3',
          label: "ดำเนินการเสร็จสิ้น",
          checked: this.check_box3
        },
        {
          name: 'check_box',
          type: 'radio',
          value: '4',
          label: "ไม่สามารถดำเนินการได้",
          checked: this.check_box4
        }
      ],
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'ยืนยัน',
          handler: (data:number) => {
            
          }
        }
      ]
    });
    await alert.present();
  }
}
