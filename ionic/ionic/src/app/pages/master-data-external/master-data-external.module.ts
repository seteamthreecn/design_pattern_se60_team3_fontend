import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MasterDataExternalPage } from './master-data-external.page';

const routes: Routes = [
  {
    path: '',
    component: MasterDataExternalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MasterDataExternalPage]
})
export class MasterDataExternalPageModule {}
