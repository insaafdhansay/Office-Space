import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable,Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class StaffService {

  nameChange: Subject<string> = new Subject<string>();
  constructor(public firestore: AngularFirestore) {}
  
  staff: Observable<any[]>;
  searchVal:any;
  officeID:string;

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
   this.officeID=officeDocID;

   return this.firestore.collection('/StaffMembers', ref => ref.where('officeID', '==', officeDocID)).snapshotChanges();
  
  }
  searchValSet(searchValue){
    this.searchVal=searchValue;
    this.nameChange.next(this.searchVal);

    
  }

  updateStaffMember(docID, value) {
    return this.firestore.collection('StaffMembers').doc(docID).update(value);
  }
  deleteStaffMember(docID) {
    return this.firestore.collection('StaffMembers').doc(docID).delete();
  }

  searchUsers(searchValue){  
     console.log("searching by name in service"+ searchValue)
    
 return this.firestore.collection('StaffMembers',ref => ref.where('firstName', '>=', searchValue)
      .where('firstName', '<=', searchValue + '\uf8ff').where('officeID', '==', this.officeID))
      .snapshotChanges() 
  

   
  }

 

 
}

