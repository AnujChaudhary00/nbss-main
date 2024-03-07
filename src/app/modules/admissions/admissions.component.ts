import { Component } from '@angular/core';

@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.scss']
})
export class AdmissionsComponent {


  fees = [
    { class: 'Nursery', admissionFee: 1000, tuitionFee: 5000, annualFee: 1000 },
    { class: 'LKG', admissionFee: 1000, tuitionFee: 5000, annualFee: 1000 },
    { class: 'UKG', admissionFee: 1000, tuitionFee: 5000, annualFee: 1000 },
    { class: 'I', admissionFee: 1000, tuitionFee: 5000, annualFee: 1000 },
    { class: 'II', admissionFee: 1000, tuitionFee: 5000, annualFee: 1000 },
    { class: 'III', admissionFee: 1000, tuitionFee: 5000, annualFee: 1000 },
    { class: 'IV', admissionFee: 1000, tuitionFee: 5000, annualFee: 1000 },
    { class: 'V', admissionFee: 1000, tuitionFee: 5000, annualFee: 1000 }
    // Add more objects as needed
  ];

  documentRequired =[
    {
      class:'Nursury',documents:'AADHAR Card, Birth Certificate, 2 Passport Size Photos'
    },
    {
      class:'LKG',documents:'AADHAR Card, Birth Certificate, 2 Passport Size Photos'
    },
    {
      class:'UKG',documents:'AADHAR Card, Birth Certificate, 2 Passport Size Photos'
    },
    {
      class:'I',documents:'AADHAR Card, Birth Certificate, 2 Passport Size Photos, Previous year Marksheet, Transfer Certificate'
    },
    {
      class:'II',documents:'AADHAR Card, Birth Certificate, 2 Passport Size Photos, Previous year Marksheet, Transfer Certificate'
    },
    {
      class:'III',documents:'AADHAR Card, Birth Certificate, 2 Passport Size Photos, Previous year Marksheet, Transfer Certificate'
    },
    {
      class:'IV',documents:'AADHAR Card, Birth Certificate, 2 Passport Size Photos, Previous year Marksheet, Transfer Certificate'
    },
    {
      class:'V',documents:'AADHAR Card, Birth Certificate, 2 Passport Size Photos, Previous year Marksheet, Transfer Certificate'
    }
  ]

}
