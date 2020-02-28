import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditDataIncomePage } from './edit-data-income.page';

const routes: Routes = [
  {
    path: '',
    component: EditDataIncomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditDataIncomePage]
})
export class EditDataIncomePageModule {}
