import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RetDetailListPage } from './ret-detail-list.page';

const routes: Routes = [
  {
    path: '',
    component: RetDetailListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RetDetailListPage]
})
export class RetDetailListPageModule {}
