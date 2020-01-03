import { Component, OnInit, ViewChild } from '@angular/core';
import { CandidateService } from 'src/app/shared/candidate.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CandidateComponent } from '../candidate/candidate.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {

  listData: MatTableDataSource<any>;
  employeeArry = [];
  displayedColumns: string[] = ['fullName', 'mobile', 'city', 'email' ,'actions'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private employeeService: CandidateService, private dialog: MatDialog) { }

  ngOnInit() {
    this.employeeService.getEmployeeList().subscribe(
      list => {
        let array = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          }
        });
        this.listData = new MatTableDataSource(array);
        this.employeeArry = array;
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      });
  }
  applyFilter(filterValue: string) {
    this.listData.filter = filterValue.trim().toLowerCase();
  }
  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(CandidateComponent, dialogConfig);
  }

  onEdit(row) {
    this.employeeService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(CandidateComponent, dialogConfig);
  }


}
