import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../shared/candidate.service';
import { DepartmentService } from '../../shared/department.service';
import {  NotificationService } from '../../shared/notification.service';
import {MatDialog,MatDialogRef}  from '@angular/material/dialog';
import {FormControl} from '@angular/forms';



@Component({
  selector: 'app-employee',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  constructor(private service:CandidateService,
    private departmentService:DepartmentService,
    private notificationService:NotificationService,
    public dialogRef:MatDialogRef<CandidateComponent>) { }

  ngOnInit() {
    this.service.getEmployeeList();
  }

  onClear(){
    this.service.form.reset();
    //this.service.in
    this.notificationService.success('::Cleared');
    }
  onSubmit(){
    if(this.service.form.valid){
     this.service.insertEmployee(this.service.form.value);
     this.service.form.reset();
     this.notificationService.success('::Successfull submited');
     this.onClose();
    }
    
  }
  onClose(){
    this.service.form.reset();
    this.dialogRef.close();
  }

}
