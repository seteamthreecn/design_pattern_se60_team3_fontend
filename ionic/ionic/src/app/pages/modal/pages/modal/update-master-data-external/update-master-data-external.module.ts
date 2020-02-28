import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UpdateMasterDataExternalPage } from './update-master-data-external.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMasterDataExternalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UpdateMasterDataExternalPage]
})
export class UpdateMasterDataExternalPageModule {}
