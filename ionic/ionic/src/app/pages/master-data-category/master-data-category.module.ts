import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MasterDataCategoryPage } from './master-data-category.page';

const routes: Routes = [
  {
    path: '',
    component: MasterDataCategoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MasterDataCategoryPage]
})
export class MasterDataCategoryPageModule {}
