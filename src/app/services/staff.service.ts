import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class StaffService {
  constructor(public firestore: AngularFirestore) {}
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
  addStaffMember(value, officeID) {
    console.log(officeID);
    return this.firestore.collection('StaffMembers').add({
      firstName: value.firstName,
      lastName: value.lastName,
      officeID: officeID,
      id: this.makeid(),
    });
  }
  getStaff(officeDocID) {
   // return this.firestore.collection('StaffMembers').snapshotChanges();
   return this.firestore.collection('/StaffMembers', ref => ref.where('officeID', '==', officeDocID)).snapshotChanges();

  }

  updateStaffMember(docID, value) {
    return this.firestore.collection('StaffMembers').doc(docID).set(value);
  }
  deleteStaffMember(docID) {
    return this.firestore.collection('StaffMembers').doc(docID).delete();
  }
}
