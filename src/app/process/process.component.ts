import { Component, OnInit, Inject } from '@angular/core';
import { CandidateService } from '../shared/candidate.service';
import { DepartmentService } from '../shared/department.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { InterviewProcessServiceService } from '../shared/interview-process.service';
import { ProcessTab } from '../model/process-tab.model';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {

  public processTabModel: ProcessTab;
   processTab: ProcessTab[];
   tabName: string;

  constructor(private service: CandidateService,
    private processService: InterviewProcessServiceService,
    private departmentService: DepartmentService,
    public dialog: MatDialog) {
    this.processTabModel = new ProcessTab();
  }






  ngOnInit() {
    this.processService.getTabList().subscribe(data => {
      this.processTab = data.map(e => {
        return {
          id: e.payload.doc.id,
           tabName:e.payload.doc.get('tabName')
        } as ProcessTab;
      })
    });

  }

  addTab() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { tabName: "" }
    });



    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (typeof result !== "undefined") {
        this.processTabModel.tabName=result;
        this.processService.createTab(this.processTabModel);
      }

    });

  }
  deleteTab(tabId) {
    this.processService.deleteTab(tabId);
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