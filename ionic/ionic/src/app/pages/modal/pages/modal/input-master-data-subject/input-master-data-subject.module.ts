import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InputMasterDataSubjectPage } from './input-master-data-subject.page';

const routes: Routes = [
  {
    path: '',
    component: InputMasterDataSubjectPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InputMasterDataSubjectPage]
})
export class InputMasterDataSubjectPageModule {}
