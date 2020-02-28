import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UpdateMasterDataInternalPage } from './update-master-data-internal.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMasterDataInternalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UpdateMasterDataInternalPage]
})
export class UpdateMasterDataInternalPageModule {}
