import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InputMasterDataPage } from './input-master-data.page';

const routes: Routes = [
  {
    path: '',
    component: InputMasterDataPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InputMasterDataPage]
})
export class InputMasterDataPageModule {}
