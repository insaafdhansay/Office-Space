import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { Staff } from '../model/types';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class StaffService {
  nameChange: Subject<string> = new Subject<string>();
  constructor(public firestore: AngularFirestore) {}

  staff: Observable<Staff[]>; //Observable of type staff (declared in model)
  staffMem: Observable<any[]>;
  searchVal: string;
  officeID: string;

  /**
   * Generate  ID of random string of 24 alphanumeric characters
   * @return Id
   */
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
  /**
   * Add staff member to the database for a particular office.
   */
  addStaffMember(value: Staff, officeID: string) {
    return this.firestore.collection('StaffMembers').add({
      firstName: value.firstName,
      lastName: value.lastName,
      officeID: officeID,
      id: this.makeid(),
    });
  }
  /**
   * Retrieve all staff records from the database, for the chosen office.
   */
  getStaff(officeDocID: string) {
    this.officeID = officeDocID;

    return this.firestore
      .collection('/StaffMembers', (ref) =>
        ref.where('officeID', '==', officeDocID)
      )
      .snapshotChanges();
  }
  /**
   * Update the search value stored.
   */
  searchValSet(searchValue: string) {
    this.searchVal = searchValue;
    this.nameChange.next(this.searchVal);
  }
  /**
   *Updates staff member details in the database when edited.
   */
  updateStaffMember(docID: string, value: Staff) {
    return this.firestore.collection('StaffMembers').doc(docID).update(value);
  }
  /**
   *Remove staff member record from the database.
   */
  deleteStaffMember(docID: string) {
    return this.firestore.collection('StaffMembers').doc(docID).delete();
  }
  /**
   * Removes all staff members belonging to the office being deleted.
   * @param officeID
   */
  deleteOfficeStaff(officeID: string) {
    this.staffMem = this.getStaff(officeID);
    this.staffMem.subscribe(
      (staff: any) => {
        staff.map((s) => {
          return this.firestore
            .collection('StaffMembers')
            .doc(s.payload.doc.id)
            .delete();
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
