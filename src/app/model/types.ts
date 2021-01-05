/**
 * Types declared for office and staff
 */

export interface Staff {
  firstName: string;
  lastName: string;
  id: string;
  officeID: string; 
}

export interface Office {
  address: string;
  email: string;
  id: string;
  maxOcc: string;
  name: string;
  officeCol: string;
  tel: string;
}
