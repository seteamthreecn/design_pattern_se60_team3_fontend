import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

// Modal Pages
import { ImagePageModule } from "./pages/modal/image/image.module";

// Components
import { NotificationsComponent } from "./components/notifications/notifications.component";


//Design Pattern
import { InsertIncomePageModule } from "./pages/modal/pattern_design/insert-income/insert-income.module";
import { InsertOutcomePageModule } from "./pages/modal/pattern_design/insert-outcome/insert-outcome.module";
import { InsertDataListPageModule } from "./pages/modal/pattern_design/insert-data-list/insert-data-list.module";
import { ShowDataListPageModule } from "./pages/modal/pattern_design/show-data-list/show-data-list.module";
import { ProfilePageModule } from "./pages/modal/pattern_design/profile/profile.module";
import { EditProfliePageModule } from "./pages/modal/pattern_design/edit-proflie/edit-proflie.module";
import { EditDataListPageModule } from "./pages/modal/pattern_design/edit-data-list/edit-data-list.module";
import { NativeStorage } from "@ionic-native/native-storage/ngx";
import { IonicStorageModule } from "@ionic/storage";

// Import ret_detail_list
import { RetDetailListPage } from "./pages/ret-detail-list/ret-detail-list.page";

@NgModule({
  declarations: [AppComponent, NotificationsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ImagePageModule,
    FormsModule,
    HttpModule,
    InsertIncomePageModule,
    InsertOutcomePageModule,
    ProfilePageModule,
    EditDataListPageModule,
    EditProfliePageModule,
    ShowDataListPageModule,
    InsertDataListPageModule,
    IonicStorageModule.forRoot()
  ],
  entryComponents: [NotificationsComponent],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    RetDetailListPage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
