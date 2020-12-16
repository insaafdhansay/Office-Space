import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OfficeService {
  offices: Observable<any[]>;
  staffMembers: Observable<any[]>;


  constructor(public firestore: AngularFirestore) {
    this.offices = firestore.collection('Offices').valueChanges();
    this.staffMembers = firestore.collection('StaffMembers').valueChanges();

  }
   makeid() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 24; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
  createUser(value){
    return this.firestore.collection('Offices').add({
      id:this.makeid(),
      name: value.name,
      email: value.email,
      tel: value.tel,
      address: value.address,
      maxOcc: parseInt(value.maxOcc),
      officeColour: value.officeColour,

    });
  }
  

}
