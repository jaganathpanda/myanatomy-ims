import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class InterviewProcessServiceService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', Validators.minLength(8)),
    city: new FormControl(''),
    gender: new FormControl(''),
    depertment: new FormControl(''),
    hireDate: new FormControl(''),
    isPermanet: new FormControl(false)

  });


}
