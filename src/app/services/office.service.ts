import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Office } from '../model/types';

@Injectable({
  providedIn: 'root',
})
export class OfficeService {
  offices: Observable<any[]>;
  officeID: string;
  name: string;
  email: string;
  tel: string;
  address: string;
  maxOcc: string;
  colour: string;
  docID: string;

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
  addOffice(value: Office, officeColour: string) {
    return this.firestore.collection('Offices').add({
      id: this.makeid(),
      name: value.name,
      email: value.email,
      tel: value.tel,
      address: value.address,
      maxOcc: parseInt(value.maxOcc),
      officeCol: officeColour,
    });
  }
  getOffices() {
    return this.firestore.collection('Offices').snapshotChanges();
  }

  updateOffice(docID: string, value: Office) {
    return this.firestore.collection('Offices').doc(docID).update(value);
  }

  deleteOffice(docID: string) {
    return this.firestore.collection('Offices').doc(docID).delete();
  }
  setOfficeDetails(value: Office, docID: string) {
    //setting data from home page for the office selected, passing to service for office page to access
    this.docID = docID;
    this.name = value.name;
    this.email = value.email;
    this.address = value.address;
    this.tel = value.tel;
    this.maxOcc = value.maxOcc;
    this.colour = value.officeCol;
    this.officeID = value.id;
  }
}
