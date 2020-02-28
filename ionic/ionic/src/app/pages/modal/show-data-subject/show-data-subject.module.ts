import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShowDataSubjectPage } from './show-data-subject.page';

const routes: Routes = [
  {
    path: '',
    component: ShowDataSubjectPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShowDataSubjectPage]
})
export class ShowDataSubjectPageModule {}
