import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service'; 

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patientData: any;



  constructor(private service: PatientService) { }

  ngOnInit(): void {
    this.showPatientList();
  }

  async showPatientList(){
    let patientData: any= await this.service.getPatientList();
    this.patientData =patientData['patientData'];
    console.log(this.patientData)
  }

}
