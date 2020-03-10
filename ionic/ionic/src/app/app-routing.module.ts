import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'home-results', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule' },
  { path: 'summary', loadChildren: './pages/design_pattern/summary/summary.module#SummaryPageModule' },
  { path: 'register', loadChildren: './pages/modal/pattern_design/register/register.module#RegisterPageModule' },
  { path: 'insert-income', loadChildren: './pages/modal/pattern_design/insert-income/insert-income.module#InsertIncomePageModule' },
  { path: 'insert-outcome', loadChildren: './pages/modal/pattern_design/insert-outcome/insert-outcome.module#InsertOutcomePageModule' },
  { path: 'profile', loadChildren: './pages/modal/pattern_design/profile/profile.module#ProfilePageModule' },
  { path: 'edit-proflie', loadChildren: './pages/modal/pattern_design/edit-proflie/edit-proflie.module#EditProfliePageModule' },
  { path: 'ret-wallet', loadChildren: './pages/ret-wallet/ret-wallet.module#RetWalletPageModule' },
  { path: 'ret-detail-list', loadChildren: './pages/ret-detail-list/ret-detail-list.module#RetDetailListPageModule' },
  { path: 'ret-detail-list-prototype/:path_list_type', loadChildren: './pages/ret-detail-list-prototype/ret-detail-list-prototype.module#RetDetailListPrototypePageModule' },
  { path: 'show-data-list', loadChildren: './pages/modal/pattern_design/show-data-list/show-data-list.module#ShowDataListPageModule' },
  { path: 'edit-data-list', loadChildren: './pages/modal/pattern_design/edit-data-list/edit-data-list.module#EditDataListPageModule' },
  { path: 'insert-data-list', loadChildren: './pages/modal/pattern_design/insert-data-list/insert-data-list.module#InsertDataListPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule {}
