import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShowDataIncomePage } from './show-data-income.page';

const routes: Routes = [
  {
    path: '',
    component: ShowDataIncomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShowDataIncomePage]
})
export class ShowDataIncomePageModule {}
