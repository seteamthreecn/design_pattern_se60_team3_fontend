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
import { SearchFilterPageModule } from "./pages/modal/search-filter/search-filter.module";
import { SearchSubjectPageModule } from "./pages/modal/search-subject/search-subject.module";
import { EditMasterDataIntervalPageModule } from "./pages/modal/edit-master-data/edit-master-data-interval/edit-master-data-interval.module";
import { ShowDataSubjectPageModule } from "./pages/modal/show-data-subject/show-data-subject.module";
import { SearchChannelPageModule } from "./pages/modal/search-channel/search-channel.module";
import { SearchExternalPageModule } from "./pages/modal/search-external/search-external.module";
import { SearchInternalPageModule } from "./pages/modal/search-internal/search-internal.module";

// Components
import { NotificationsComponent } from "./components/notifications/notifications.component";

// Input Master Data
import { InputMasterDataPageModule } from "./pages/modal/pages/modal/input-master-data/input-master-data.module";
import { InputMasterDataChannelPageModule } from "./pages/modal/pages/modal/input-master-data-channel/input-master-data-channel.module";
import { InputMasterDataSubjectPageModule } from "./pages/modal/pages/modal/input-master-data-subject/input-master-data-subject.module";
import { InputMasterDataExternalPageModule } from "./pages/modal/pages/modal/input-master-data-external/input-master-data-external.module";
import { InputMasterDataInternalPageModule } from "./pages/modal/pages/modal/input-master-data-internal/input-master-data-internal.module";
import { InputMasterDataCategoryPageModule } from "./pages/modal/pages/modal/input-master-data-category/input-master-data-category.module";

// Update Master Data
import { UpdateMasterDataCategoryPageModule } from "./pages/modal/pages/modal/update-master-data-category/update-master-data-category.module";
import { UpdateMasterDataChannelPageModule } from "./pages/modal/pages/modal/update-master-data-channel/update-master-data-channel.module";
import { UpdateMasterDataExternalPageModule } from "./pages/modal/pages/modal/update-master-data-external/update-master-data-external.module";
import { UpdateMasterDataInternalPageModule } from "./pages/modal/pages/modal/update-master-data-internal/update-master-data-internal.module";

//Design Pattern
import { IncomeAllPageModule } from "./pages/design_pattern/income-all/income-all.module";
import { OutcomeAllPageModule } from "./pages/design_pattern/outcome-all/outcome-all.module";
import { EditDataIncomePageModule } from "./pages/modal/pattern_design/edit-data-income/edit-data-income.module";
import { EditDataOutcomePageModule } from "./pages/modal/pattern_design/edit-data-outcome/edit-data-outcome.module";
import { InsertIncomePageModule } from "./pages/modal/pattern_design/insert-income/insert-income.module";
import { InsertOutcomePageModule } from "./pages/modal/pattern_design/insert-outcome/insert-outcome.module";
import { ShowDataIncomePageModule } from "./pages/modal/pattern_design/show-data-income/show-data-income.module";
import { ShowDataOutcomePageModule } from "./pages/modal/pattern_design/show-data-outcome/show-data-outcome.module";
import { ProfilePageModule } from "./pages/modal/pattern_design/profile/profile.module";
import { EditProfliePageModule } from "./pages/modal/pattern_design/edit-proflie/edit-proflie.module";
import { NativeStorage } from "@ionic-native/native-storage/ngx";
import { IonicStorageModule } from "@ionic/storage";

@NgModule({
  declarations: [AppComponent, NotificationsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ImagePageModule,
    SearchFilterPageModule,
    SearchSubjectPageModule,
    EditMasterDataIntervalPageModule,
    ShowDataSubjectPageModule,
    FormsModule,
    HttpModule,
    SearchChannelPageModule,
    SearchExternalPageModule,
    SearchInternalPageModule,
    InputMasterDataChannelPageModule,
    InputMasterDataSubjectPageModule,
    InputMasterDataExternalPageModule,
    InputMasterDataInternalPageModule,
    InputMasterDataPageModule,
    InputMasterDataCategoryPageModule,
    UpdateMasterDataCategoryPageModule,
    UpdateMasterDataChannelPageModule,
    UpdateMasterDataExternalPageModule,
    UpdateMasterDataInternalPageModule,
    IncomeAllPageModule,
    OutcomeAllPageModule,
    EditDataIncomePageModule,
    EditDataOutcomePageModule,
    InsertIncomePageModule,
    InsertOutcomePageModule,
    ShowDataIncomePageModule,
    ShowDataOutcomePageModule,
    ProfilePageModule,
    EditProfliePageModule,
    IonicStorageModule.forRoot()
  ],
  entryComponents: [NotificationsComponent],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
