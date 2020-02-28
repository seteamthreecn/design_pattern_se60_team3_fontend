import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InputMasterDataExternalPage } from './input-master-data-external.page';

const routes: Routes = [
  {
    path: '',
    component: InputMasterDataExternalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InputMasterDataExternalPage]
})
export class InputMasterDataExternalPageModule {}
