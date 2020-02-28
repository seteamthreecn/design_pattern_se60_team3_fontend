import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditDataOutcomePage } from './edit-data-outcome.page';

const routes: Routes = [
  {
    path: '',
    component: EditDataOutcomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditDataOutcomePage]
})
export class EditDataOutcomePageModule {}
