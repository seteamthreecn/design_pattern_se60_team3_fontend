import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RetDetailListPrototypePage } from './ret-detail-list-prototype.page';

const routes: Routes = [
  {
    path: '',
    component: RetDetailListPrototypePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RetDetailListPrototypePage]
})
export class RetDetailListPrototypePageModule {}
