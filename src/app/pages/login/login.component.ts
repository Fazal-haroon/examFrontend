import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { // Declare formBuilder as private
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  formSubmit() {
    if (this.loginForm.valid) {
        // alert('submitted');
       /* const payload = this.signupForm.value; // Get form values
        this.userService.addUser(payload).subscribe(
            data => {
              // Handle success
              console.log('User added successfully:', data);
              // alert('success')
              // this.snack.open('successfully created', 'ok', {
              //     duration: 3000
              // })
              Swal.fire('Success',
                  'user is registered ' + data.id,
                  'success');
            },
            error => {
              // Handle error
              console.error('Error adding user:', error);
              // alert('something went wrong')
              // this.snack.open('something went wrong', 'ok', {
              //     duration: 3000
              // })
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
            }
        );
      } else {
        // alert('form is invalid');
        // this.snack.open("Form is invalid!!", 'ok', {
        //     duration: 3000,
        // })
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Form is invalid!',
          footer: '<a href="">Why do I have this issue?</a>'
        })*/
      }
  }
}
