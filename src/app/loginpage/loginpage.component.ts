import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { PatientService } from '../patient.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  
   
  public loginForm: FormGroup  = this.fb.group({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('', [Validators.required])

  })  ;

  constructor(
    public fb: FormBuilder,
    private service: PatientService,
    public toastr: ToastrService
  ) { 
    
  }

  ngOnInit(): void {
  }

  resetForm(form:any) {
    console.log("reset")
    form.reset();
  }  

  async onSubmit() {
   const res:any = await  this.service.loginUser(this.loginForm.value);
   console.log('login');
   // localStorage.setItem ('token', res['token']);
   this.toastr.info('Logged In. Successfully');
   this.resetForm(this.loginForm);
    this.service.saveToken(res['token'].accessToken)
}
}