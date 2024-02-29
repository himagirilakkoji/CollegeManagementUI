import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl("", [Validators.required,]),
      password: new FormControl("", [Validators.required])
    });
  }

  navigateToDashBoard() {
    this.adminService.getAdmin(this.loginForm.get('email')?.value,this.loginForm.get('password')?.value).subscribe(response =>{
        console.log("login",response);
        if(response !=null && response != undefined){
          this.router.navigateByUrl('/admindashboard'); 
        }
    });
  }
}
