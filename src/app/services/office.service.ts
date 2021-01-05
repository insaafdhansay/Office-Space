import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Office } from '../model/types';

@Injectable({
  providedIn: 'root',
})
export class OfficeService {
  offices: Observable<Office[]>;
  officeID: string;
  name: string;
  email: string;
  tel: string;
  address: string;
  maxOcc: string;
  colour: string;
  docID: string;

  constructor(public firestore: AngularFirestore) {}
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
   * Add Office to the database.
   */
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
  /**
   * Retrieve all offices stored in the database.
   */
  getOffices() {
    return this.firestore.collection('Offices').snapshotChanges();
  }
  /**
   * Update office details in the database.
   */
  updateOffice(docID: string, value: Office) {
    return this.firestore.collection('Offices').doc(docID).update(value);
  }

  /**
   * Remove office from the database.
   */
  deleteOffice(docID: string) {
    return this.firestore.collection('Offices').doc(docID).delete();
  }
  /**
   * Setting office details to variables, to be accessed by the office page component to display relevant details. 
   */
  setOfficeDetails(value: Office, docID: string) {
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
