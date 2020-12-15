import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Office-Space';
  offices: Observable<any[]>;
  staffMembers: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.offices = firestore.collection('Offices').valueChanges();
    this.staffMembers = firestore.collection('StaffMembers').valueChanges();

  }
}

