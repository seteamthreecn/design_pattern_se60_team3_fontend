import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditMasterDataIntervalPage } from './edit-master-data-interval.page';

const routes: Routes = [
  {
    path: '',
    component: EditMasterDataIntervalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditMasterDataIntervalPage]
})
export class EditMasterDataIntervalPageModule {}
