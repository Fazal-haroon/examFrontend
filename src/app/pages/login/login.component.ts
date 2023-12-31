import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private login: LoginService,
              private router: Router) { // Declare formBuilder as private
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  loginFormSubmit() {
    if (this.loginForm.valid) {
      console.log('Login Btn Clicked');
      //request to server to generate token
      const payload = this.loginForm.value; // Get form values
      this.login.generateToken(payload).subscribe(
          (data: any) => {
            console.log('success')
            console.log(data)
            //login...
            this.login.loginUser(data.token);
            this.login.getCurrentUser().subscribe(
                (user: any) => {
                  this.login.setUser(user);
                  console.log(user);
                  //redirect ...ADMIN: admin-dashboard
                  //redirect ...NORMAL: normal-dashboard
                    if (this.login.getUserRole() == 'ADMIN') {
                        //admin dashboard
                        // window.location.href = '/admin';
                        this.router.navigate(['admin'])
                        this.login.loginStatusSubject.next(true);
                    } else if (this.login.getUserRole() == 'NORMAL') {
                        //normal user dashboard
                        // window.location.href = '/user-dashboard';
                        this.router.navigate(['user-dashboard'])
                        this.login.loginStatusSubject.next(true);
                    } else {
                        this.login.logout();
                        // location.reload();
                    }
                }
            )
          },
          (error) => {
            console.log('error !')
            console.log(error)
          }
      )
      } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Form is invalid!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
  }

  clearForm() {
    this.loginForm.reset();
  }
}
