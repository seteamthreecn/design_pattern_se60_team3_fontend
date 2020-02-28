import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShowDataOutcomePage } from './show-data-outcome.page';

const routes: Routes = [
  {
    path: '',
    component: ShowDataOutcomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShowDataOutcomePage]
})
export class ShowDataOutcomePageModule {}
