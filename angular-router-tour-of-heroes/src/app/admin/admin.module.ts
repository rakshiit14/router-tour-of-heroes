import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerCrisesComponent } from './manager-crises/manager-crises.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminComponent,
    ManagerCrisesComponent,
    ManageHeroesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
