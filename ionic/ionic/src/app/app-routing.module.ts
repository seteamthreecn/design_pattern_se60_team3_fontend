import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'home-results', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule' },
  { path: 'master-data', loadChildren: './pages/master-data/master-data.module#MasterDataPageModule' },
  { path: 'insert-subject', loadChildren: './pages/insert-subject/insert-subject.module#InsertSubjectPageModule' },
  { path: 'search-subject', loadChildren: './pages/modal/search-subject/search-subject.module#SearchSubjectPageModule' },
  { path: 'edit-master-data-interval', loadChildren: './pages/modal/edit-master-data/edit-master-data-interval/edit-master-data-interval.module#EditMasterDataIntervalPageModule' },
  { path: 'show-data-subject', loadChildren: './pages/modal/show-data-subject/show-data-subject.module#ShowDataSubjectPageModule' },
  { path: 'master-data-external', loadChildren: './pages/master-data-external/master-data-external.module#MasterDataExternalPageModule' },
  { path: 'master-data-channel', loadChildren: './pages/master-data-channel/master-data-channel.module#MasterDataChannelPageModule' },
  { path: 'master-data-category', loadChildren: './pages/master-data-category/master-data-category.module#MasterDataCategoryPageModule' },
  { path: 'search-internal', loadChildren: './pages/modal/search-internal/search-internal.module#SearchInternalPageModule' },
  { path: 'search-external', loadChildren: './pages/modal/search-external/search-external.module#SearchExternalPageModule' },
  { path: 'search-channel', loadChildren: './pages/modal/search-channel/search-channel.module#SearchChannelPageModule' },
  { path: 'input-master-data', loadChildren: './pages/modal/pages/modal/input-master-data/input-master-data.module#InputMasterDataPageModule' },
  { path: 'input-master-data-external', loadChildren: './pages/modal/pages/modal/input-master-data-external/input-master-data-external.module#InputMasterDataExternalPageModule' },
  { path: 'input-master-data-internal', loadChildren: './pages/modal/pages/modal/input-master-data-internal/input-master-data-internal.module#InputMasterDataInternalPageModule' },
  { path: 'input-master-data-channel', loadChildren: './pages/modal/pages/modal/input-master-data-channel/input-master-data-channel.module#InputMasterDataChannelPageModule' },
  { path: 'input-master-data-subject', loadChildren: './pages/modal/pages/modal/input-master-data-subject/input-master-data-subject.module#InputMasterDataSubjectPageModule' },
  { path: 'input-master-data-category', loadChildren: './pages/modal/pages/modal/input-master-data-category/input-master-data-category.module#InputMasterDataCategoryPageModule' },
  { path: 'update-master-data-channel', loadChildren: './pages/modal/pages/modal/update-master-data-channel/update-master-data-channel.module#UpdateMasterDataChannelPageModule' },
  { path: 'update-master-data-category', loadChildren: './pages/modal/pages/modal/update-master-data-category/update-master-data-category.module#UpdateMasterDataCategoryPageModule' },
  { path: 'update-master-data-internal', loadChildren: './pages/modal/pages/modal/update-master-data-internal/update-master-data-internal.module#UpdateMasterDataInternalPageModule' },
  { path: 'update-master-data-external', loadChildren: './pages/modal/pages/modal/update-master-data-external/update-master-data-external.module#UpdateMasterDataExternalPageModule' },
  { path: 'summary', loadChildren: './pages/design_pattern/summary/summary.module#SummaryPageModule' },
  { path: 'income-all', loadChildren: './pages/design_pattern/income-all/income-all.module#IncomeAllPageModule' },
  { path: 'outcome-all', loadChildren: './pages/design_pattern/outcome-all/outcome-all.module#OutcomeAllPageModule' },
  { path: 'register', loadChildren: './pages/modal/pattern_design/register/register.module#RegisterPageModule' },
  { path: 'insert-income', loadChildren: './pages/modal/pattern_design/insert-income/insert-income.module#InsertIncomePageModule' },
  { path: 'insert-outcome', loadChildren: './pages/modal/pattern_design/insert-outcome/insert-outcome.module#InsertOutcomePageModule' },
  { path: 'show-data-income', loadChildren: './pages/modal/pattern_design/show-data-income/show-data-income.module#ShowDataIncomePageModule' },
  { path: 'show-data-outcome', loadChildren: './pages/modal/pattern_design/show-data-outcome/show-data-outcome.module#ShowDataOutcomePageModule' },
  { path: 'edit-data-outcome', loadChildren: './pages/modal/pattern_design/edit-data-outcome/edit-data-outcome.module#EditDataOutcomePageModule' },
  { path: 'edit-data-income', loadChildren: './pages/modal/pattern_design/edit-data-income/edit-data-income.module#EditDataIncomePageModule' },
  { path: 'profile', loadChildren: './pages/modal/pattern_design/profile/profile.module#ProfilePageModule' },
  { path: 'edit-proflie', loadChildren: './pages/modal/pattern_design/edit-proflie/edit-proflie.module#EditProfliePageModule' },
  { path: 'ret-wallet', loadChildren: './pages/ret-wallet/ret-wallet.module#RetWalletPageModule' },
  { path: 'ret-detail-sub-type', loadChildren: './pages/ret-detail-sub-type/ret-detail-sub-type.module#RetDetailSubTypePageModule' },
  { path: 'ret-detail-list', loadChildren: './pages/ret-detail-list/ret-detail-list.module#RetDetailListPageModule' },
  { path: 'ret-detail-list-prototype', loadChildren: './pages/ret-detail-list-prototype/ret-detail-list-prototype.module#RetDetailListPrototypePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule {}
