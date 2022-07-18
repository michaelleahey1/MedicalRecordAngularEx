import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  constructor() { }
  fName:any;
  lName:any;
  mrn!:number;
  dob!:number;
  ssn!:number;
  diagnosis:any

  ngOnInit(): void {
  }

  log(msg:any){
    console.log(msg);
  }
  
}
