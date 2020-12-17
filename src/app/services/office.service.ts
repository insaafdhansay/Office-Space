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
  addOffice(value,officeColour){
    console.log("added");
    console.log(value.officeColour);
    return this.firestore.collection('Offices').add({
      id:this.makeid(),
      name: value.name,
      email: value.email,
      tel: value.tel,
      address: value.address,
      maxOcc: parseInt(value.maxOcc),
      officeCol : officeColour
  
      

    });
  
  }
  getOffices(){
    {
      return new Promise<any>((resolve, reject) => {
        this.firestore.collection('/Offices').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots)
        })
      })
    }

  //this.offices = this.firestore.collection('Offices').valueChanges();

   // this.staffMembers = this.firestore.collection('StaffMembers').valueChanges();
  }
  
  

}