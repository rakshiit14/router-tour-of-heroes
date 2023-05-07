import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrisesRoutingModule } from './crises-center-routing.module';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { FormsModule } from '@angular/forms';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';

@NgModule({
  declarations: [
    CrisisDetailComponent,
    CrisisListComponent,
    CrisisCenterComponent,
    CrisisCenterHomeComponent,
  ],
  imports: [
    CommonModule,
    CrisesRoutingModule,
    FormsModule,
  ]
})
export class CrisisCenterModule { }
