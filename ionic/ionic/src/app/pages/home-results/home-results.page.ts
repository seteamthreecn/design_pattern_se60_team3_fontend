import { Component, ViewChild } from "@angular/core";
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  LoadingController
} from "@ionic/angular";

//Input Data
import { InsertIncomePage } from "../modal/pattern_design/insert-income/insert-income.page";
import { InsertOutcomePage } from "../modal/pattern_design/insert-outcome/insert-outcome.page";

//Show Data
import { EditDataListPage } from '../modal/pattern_design/edit-data-list/edit-data-list.page';

//Edit Data
import { ShowDataListPage } from '../modal/pattern_design/show-data-list/show-data-list.page';
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-home-results",
  templateUrl: "./home-results.page.html",
  styleUrls: ["./home-results.page.scss"]
})
export class HomeResultsPage {
  searchKey = "";
  yourLocation = "123 Test Street";
  themeCover = "assets/img/ionic4-Start-Theme-cover.jpg";

  @ViewChild("barChart", { static: true }) barChart;

  bars: any;
  colorArray: any;
  private staticMonth: any = [];

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private storage: Storage
  ) {}

  async logout_page() {
    this.navCtrl.navigateRoot("/login");
  }

  //Function Of Chart
  ngOnInit() {
    
  }


  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  settings() {
    this.navCtrl.navigateForward("settings");
  }

  async alertLocation() {
    const changeLocation = await this.alertCtrl.create({
      header: "Change Location",
      message: "Type your Address.",
      inputs: [
        {
          name: "location",
          placeholder: "Enter your new Location",
          type: "text"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Change",
          handler: async data => {
            console.log("Change clicked", data);
            this.yourLocation = data.location;
            const toast = await this.toastCtrl.create({
              message: "Location was change successfully",
              duration: 3000,
              position: "top",
              closeButtonText: "OK",
              showCloseButton: true
            });

            toast.present();
          }
        }
      ]
    });
    changeLocation.present();
  }

  async show_data_income() {
    const modal = await this.modalCtrl.create({
      component: EditDataListPage
    });
    return await modal.present();
  }

  async show_data_outcome() {
    const modal = await this.modalCtrl.create({
      component: ShowDataListPage
    });
    return await modal.present();
  }

  async edit_data_income() {
    const modal = await this.modalCtrl.create({
      component: EditDataListPage
    });
    return await modal.present();
  }

  async edit_data_outcome() {
    const modal = await this.modalCtrl.create({
      component: ShowDataListPage
    });
    return await modal.present();
  }

  async delete_data() {
    const alert = await this.alertCtrl.create({
      header: "ยืนยันการลบข้อมูล?",
      message: "ต้องการลบข้อมูลรายการนี้หรือไม่",
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
                message: "ลบข้อมูลสำเร็จ",
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
}
