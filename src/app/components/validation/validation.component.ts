import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  title ="validation";
  medicalRecordForm = new FormGroup({
    fName : new FormControl('',[Validators.required]),
    lName : new FormControl,
    mrn! : new FormControl,
    dob!: new FormControl,
    ssn! : new FormControl,
    diagnosis : new FormControl
  })
  
  ngOnInit(): void {
  }

  log(msg:any){
    console.log(msg);
  }
  onSubmit(){
    console.log(this.medicalRecordForm.value)
  }
  
  get fName(){
    return this.medicalRecordForm.get('fName')
  }
  get lName(){
    return this.medicalRecordForm.get('lName')
  }
  get mrn(){
    return this.medicalRecordForm.get('mrn')
  }
  get dob(){
    return this.medicalRecordForm.get('dob')
  }
  get ssn(){
    return this.medicalRecordForm.get('ssn')
  }
  get diagnosis(){
    return this.medicalRecordForm.get('diagnosis')
  }
}
