import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { StaffListComponent } from './components/staff-list/staff-list.component';
import { AddStaffComponent } from './components/add-staff/add-staff.component';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    LayoutComponent,
    StaffListComponent,
    AddStaffComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatTableModule,
    MatDialogModule,
    FlexLayoutModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
