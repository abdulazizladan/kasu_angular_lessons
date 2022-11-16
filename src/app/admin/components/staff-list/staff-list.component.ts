import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStaffComponent } from '../add-staff/add-staff.component';

export interface Staff {
  firstName: string;
  lastName: string;
  id: string;
}

const STUDENTS: Staff[] = [
  {firstName: "aliyu", lastName: "mustapha", id: "kasu/stf/1234"},

];

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName'];
  dataSource = STUDENTS;

  constructor( private addStaffDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddStaffDialog() {
    this.addStaffDialog.open(AddStaffComponent)
  }

}
