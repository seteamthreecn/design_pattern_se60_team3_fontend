import { Component, OnInit } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  ModalController,
  LoadingController
} from '@ionic/angular';

//Input Data
import { InsertDataListPage } from '../modal/pattern_design/insert-data-list/insert-data-list.page';

//Show Data
import { EditDataListPage } from '../modal/pattern_design/edit-data-list/edit-data-list.page';

//Edit Data
import { ShowDataListPage } from '../modal/pattern_design/show-data-list/show-data-list.page';

// Service
import { RetDetailListService } from "../../service/ret-detail-list.service";
import { RetWalletService } from "../../service/ret-wallet.service";


@Component({
  selector: 'app-ret-detail-list',
  templateUrl: './ret-detail-list.page.html',
  styleUrls: ['./ret-detail-list.page.scss']
})
export class RetDetailListPage implements OnInit {

  public dtl_id: any;
  public dtl_amount: any;
  public dtl_date: any;
  public dtl_type: any;
  public dtl_dts_id: any;
  public dtl_dts_name: any;
  public dtl_description: any;

  private dtl_list: any = [];

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public RetDetailListService: RetDetailListService,
    public RetWalletService:RetWalletService
  ) { }

  ngOnInit() {
  }


  /*
	 * insert
	 * ..
	 * @input dtl_amount, dtl_date, dtl_type, dtl_dts_id
	 * @output -
	 * @author Chutipong
	 * @Create Date 2563-03-09
	 */
  public insert() {
    this.RetDetailListService.insert(this.dtl_amount, this.dtl_date, this.dtl_type, this.dtl_dts_id, this.dtl_description).subscribe(result => {
      console.log("insert suc")
    })
  }

  /*
	 * update
	 * ..
	 * @input dtl_id, dtl_amount, dtl_date, dtl_type, dtl_dts_id
	 * @output -
	 * @author Chutipong
	 * @Create Date 2563-03-09
	 */
  public update() {
    this.RetDetailListService.update(this.dtl_id, this.dtl_amount, this.dtl_date, this.dtl_type, this.dtl_dts_id, this.dtl_description).subscribe(result => {
      console.log("update suc")
    })
  }

  /*
	 * delete
	 * ..
	 * @input dtl_id
	 * @output -
	 * @author Chutipong
	 * @Create Date 2563-03-09
	 */
  public delete() {
    this.RetDetailListService.delete(this.dtl_id).subscribe(result => {
      console.log("delete suc")
    })
  }

  /*
	 * get_by_key
	 * ..
	 * @input dtl_id
	 * @output -
	 * @author Chutipong
	 * @Create Date 2563-03-09
	 */
  public get_by_key() {
    this.RetDetailListService.get_by_key(this.dtl_id).subscribe(result => {
      this.dtl_list = result
    })
  }

  // Input Modal
  async input_data(dts_type: any) {
    console.log(dts_type)
    const modal = await this.modalCtrl.create({
      component: InsertDataListPage,
      componentProps: {
        dts_type: dts_type
      }
    });
    return await modal.present();
  }

  // Delete Modal
  async delete_data() {
    

    this.RetWalletService.delete(this.dtl_id).subscribe(result => {
      console.log("delete wallet suc")
      this.delete()
    })
    const alert = await this.alertCtrl.create({
      header: "ยืนยันการลบรายจ่าย?",
      message: "ต้องการลบรายจ่ายรายการนี้หรือไม่",
      buttons: [
        {
          text: "ยกเลิก",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          }
        },
        {
          text: "ยืนยัน",
          handler: async () => {
            const loader = await this.loadingCtrl.create({
              duration: 2000
            });
            loader.present();
            loader.onWillDismiss().then(async l => {
              const toast = await this.toastCtrl.create({
                showCloseButton: true,
                message: "ไม่สามารถลบประเภทเรื่องร้องเรียนรายการนี้ได้",
                duration: 3000,
                position: "bottom"
              });
              this.modalCtrl.dismiss();
              toast.present();
              location.reload();
            });
          }
        }
      ]
    });

    await alert.present();
  }

  // Edit Modal
  async edit_data(dts_type: any) {
    const modal = await this.modalCtrl.create({
      component: EditDataListPage,
      componentProps: {
        dts_type: dts_type,
        dtl_id: this.dtl_id
      }
    });
    return await modal.present();
  }

  // Detail Modal
  async show_data() {
    const modal = await this.modalCtrl.create({
      component: ShowDataListPage,
      componentProps: {
        dtl_id: this.dtl_list[0].dtl_id ,
        dtl_amount: this.dtl_list[0].dtl_amount ,
        dtl_day: this.dtl_list[0].dtl_day ,
        dtl_year: this.dtl_list[0].dtl_year ,
        dtl_dts_id: this.dtl_list[0].dtl_dts_id ,
        dtl_description: this.dtl_list[0].dtl_description ,
        dtl_month: this.dtl_list[0].dtl_month ,
        dtl_dts_name: this.dtl_list[0].dtl_dts_name ,
        dtl_type_name: this.dtl_list[0].dtl_type_name
      }
    });
    return await modal.present();
  }

  /*
	 * call_modal_by_type
	 * ..
	 * @input type_modal
	 * @output -
	 * @author Chutipong
	 * @Create Date 2563-03-09
	 */
  public call_modal_by_type(type_modal: any, type_id: any) {
    this.RetDetailListService.get_by_key(this.dtl_id).subscribe(result => {
      this.dtl_list = result
      if(type_modal == "show_data"){
        this.show_data()
      }else if(type_modal == "edit_data"){
        this.edit_data(type_id)
      } else if(type_modal ==  "delete_data"){
        this.delete_data()
      }else{
        this.input_data(type_id)
      }
    })
  }




}
