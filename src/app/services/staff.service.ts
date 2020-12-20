import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class StaffService {
  constructor(public firestore: AngularFirestore) {}
  addStaffMember(value, officeID) {
    return this.firestore.collection('StaffMembers').add({
      firstName: value.firstName,
      lastName: value.lastName,
      id: officeID,
    });
  }
  getStaff(){
    return this.firestore.collection("StaffMembers").snapshotChanges();

  //this.offices = this.firestore.collection('Offices').valueChanges();

   // this.staffMembers = this.firestore.collection('StaffMembers').valueChanges();
  }
}
