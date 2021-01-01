import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { Staff } from '../model/types';
@Injectable({
  providedIn: 'root',
})
export class StaffService {
  nameChange: Subject<string> = new Subject<string>();
  constructor(public firestore: AngularFirestore) {}

  staff: Observable<Staff[]>;
  searchVal: any;
  officeID: string;

  makeid() {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 24; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  addStaffMember(value: Staff, officeID: string) {
    return this.firestore.collection('StaffMembers').add({
      firstName: value.firstName,
      lastName: value.lastName,
      officeID: officeID,
      id: this.makeid(),
    });
  }
  getStaff(officeDocID: string) {
    this.officeID = officeDocID;

    return this.firestore
      .collection('/StaffMembers', (ref) =>
        ref.where('officeID', '==', officeDocID)
      )
      .snapshotChanges();
  }
  searchValSet(searchValue: string) {
    this.searchVal = searchValue;
    this.nameChange.next(this.searchVal);
  }

  updateStaffMember(docID: string, value: Staff) {
    return this.firestore.collection('StaffMembers').doc(docID).update(value);
  }
  deleteStaffMember(docID: string) {
    return this.firestore.collection('StaffMembers').doc(docID).delete();
  }
}
