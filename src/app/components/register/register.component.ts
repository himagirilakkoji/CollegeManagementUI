import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  registerForm!: FormGroup;
  userTypeList: Array<any> = [];

  constructor(private formBuilder: FormBuilder,private router: Router) {
    this.userTypeList = [
      { code: 1, name: "Admin" },
      { code: 2, name: "Faculty" },
      { code: 3, name: "Student" }
    ]
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.registerForm = this.formBuilder.group({
      firstName: new FormControl("", [Validators.required,]),
      lastName: new FormControl("", [Validators.required]),
      roles: new FormControl("", [Validators.required,]),
      password: new FormControl("", [Validators.required,])
    });
  }

  navigateToLogin(){
    this.router.navigateByUrl('/login');
  }

  onUserTypeSelection(type: any){
    
  }

}
