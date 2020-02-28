import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InputMasterDataInternalPage } from './input-master-data-internal.page';

const routes: Routes = [
  {
    path: '',
    component: InputMasterDataInternalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InputMasterDataInternalPage]
})
export class InputMasterDataInternalPageModule {}
