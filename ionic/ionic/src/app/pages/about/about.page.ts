import { Component } from "@angular/core";
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController
} from "@ionic/angular";

// Modals
import { SearchSubjectPage } from "../../pages/modal/search-subject/search-subject.page";
import { ImagePage } from "./../modal/image/image.page";
// Call notifications test by Popover and Custom Component.
import { NotificationsComponent } from "./../../components/notifications/notifications.component";
import { ShowDataSubjectPage } from "../../pages/modal/show-data-subject/show-data-subject.page";

//import insert subject
import { InsertSubjectPage } from "../insert-subject/insert-subject.page";

@Component({
  selector: "app-about",
  templateUrl: "./about.page.html",
  styleUrls: ["./about.page.scss"]
})
export class AboutPage {
  public reportList: any = [];
  private status_doing: boolean = true;
  private status_done: boolean = true;
  private status_draft: boolean = true;
  private status_fail: boolean = true;
  private text_search: string = "";
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController
  ) {}

  ngOnInit() {}

  async input_data() {
    this.navCtrl.navigateRoot("/insert-subject");
  }

  async showSubject(case_id: number) {
    const modal = await this.modalCtrl.create({
      component: ShowDataSubjectPage,
      componentProps: {
        case_id: case_id
      }
    });
    return await modal.present();
  }
}
