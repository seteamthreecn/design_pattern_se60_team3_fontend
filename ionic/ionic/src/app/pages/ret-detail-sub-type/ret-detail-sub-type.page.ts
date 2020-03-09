import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RetDetailSubTypeService } from "../../service/ret-detail-sub-type.service";
import { Storage } from "@ionic/storage";

import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  LoadingController
} from "@ionic/angular";

@Component({
  selector: 'app-ret-detail-sub-type',
  templateUrl: './ret-detail-sub-type.page.html',
  styleUrls: ['./ret-detail-sub-type.page.scss'],
})
export class RetDetailSubTypePage implements OnInit {

  private dts_id: any;
  private dts_name: String;
  private dts_type_id: any;
  private dts_list: any = []

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private RetDetailSubTypeService: RetDetailSubTypeService,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  /*
	 * insert
	 * ..
	 * @input dts_name, dts_type_id
	 * @output -
	 * @author Chutipong
	 * @Create Date 2563-03-09
	 */
  insert() {
    this.RetDetailSubTypeService.insert(this.dts_name, this.dts_type_id).subscribe(result => {
    })
  }

  /*
	 * get_by_key
	 * ..
	 * @input dts_id
	 * @output -
	 * @author Chutipong
	 * @Create Date 2563-03-09
	 */
  get_by_key() {
    this.RetDetailSubTypeService.get_by_key(this.dts_id).subscribe(result => {
      this.dts_list = result;
    })
  }

  /*
	 * get_all
	 * ..
	 * @input -
	 * @output -
	 * @author Chutipong
	 * @Create Date 2563-03-09
	 */
  get_all() {
    this.RetDetailSubTypeService.get_all().subscribe(result => {
      this.dts_list = result;
    })
  }

  /*
	 * get_detail_sub_type_by_dts_type_id
	 * ..
	 * @input dts_type_id
	 * @output -
	 * @author Chutipong
	 * @Create Date 2563-03-09
	 */
  get_detail_sub_type_by_dts_type_id() {
    this.RetDetailSubTypeService.get_detail_sub_type_by_dts_type_id(this.dts_type_id).subscribe(result => {
      this.dts_list = result;
    })
  }

}
