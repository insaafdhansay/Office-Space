import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OfficeService {
  offices: Observable<any[]>;
  staffMembers: Observable<any[]>;
  officeID:string;
  name:string;
  email:string;
  tel:string;
  address:string;
  maxOcc:string;
  colour:string;
  docID:string


  


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
    return this.firestore.collection("Offices").snapshotChanges();

  //this.offices = this.firestore.collection('Offices').valueChanges();

   // this.staffMembers = this.firestore.collection('StaffMembers').valueChanges();
  }
  updateOffice(docID, value){
  
    return this.firestore.collection('Offices').doc(docID).set(value);
  }
  deleteOffice(docID){
    return this.firestore.collection('Offices').doc(docID).delete();


  }
  setOfficeDetails(value,docID){
    this.docID= docID;
    this.name= value.name;
    this.email=value.email;
    this.address=value.address;
    this.tel=value.tel;
    this.maxOcc=value.maxOcc;
    this.colour=value.officeCol;
    this.officeID=value.id;
    console.log(this.docID,this.name,this.email,this.address,this.tel,this.maxOcc,this.colour,this.officeID)
  }
  

}
