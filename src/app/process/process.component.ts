import { Component, OnInit, Inject } from '@angular/core';
import { CandidateService } from '../shared/candidate.service';
import { DepartmentService } from '../shared/department.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProcessDialogComponent } from '../process-dialog/process-dialog.component';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {

  constructor(private service: CandidateService,
    private departmentService: DepartmentService,
    public dialog: MatDialog) { }

  public tabs = [];
  tabName: string;



  ngOnInit() {
  }

  addTab() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { tabName: "" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(   typeof result !== "undefined"){
      this.tabName=result;
      this.tabs.push(this.tabName);
      }
      
    });
    
  }



}

@Component({
  selector: '../process-dialog/process-dialog.component',
  templateUrl: '../process-dialog/process-dialog.component.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
export interface DialogData {
  tabName: string;
}