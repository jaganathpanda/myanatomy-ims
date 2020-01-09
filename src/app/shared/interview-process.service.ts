import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from '@angular/fire/firestore';
import * as _ from 'lodash';
import { ProcessTab } from '../model/process-tab.model';

@Injectable({
  providedIn: 'root'
})
export class InterviewProcessServiceService {

  constructor(private firestore: AngularFirestore, private processtab: ProcessTab) { }
  tabList: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
  });

  getTabList() {
    return this.firestore.collection('process-tab').snapshotChanges();
  }

  createTab(processTab: ProcessTab) {
    var data = JSON.parse(JSON.stringify(processTab));
    return this.firestore.collection('process-tab').add(data); 
  }
  deleteTab(tabId: string) {
    this.firestore.doc('process-tab/' + tabId).delete();
  }


}
