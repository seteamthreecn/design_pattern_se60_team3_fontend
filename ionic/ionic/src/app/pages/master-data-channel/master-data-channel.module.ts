import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MasterDataChannelPage } from './master-data-channel.page';

const routes: Routes = [
  {
    path: '',
    component: MasterDataChannelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MasterDataChannelPage]
})
export class MasterDataChannelPageModule {}
