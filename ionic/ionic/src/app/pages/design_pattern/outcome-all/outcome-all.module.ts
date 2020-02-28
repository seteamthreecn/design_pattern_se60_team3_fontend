import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OutcomeAllPage } from './outcome-all.page';

const routes: Routes = [
  {
    path: '',
    component: OutcomeAllPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OutcomeAllPage]
})
export class OutcomeAllPageModule {}
