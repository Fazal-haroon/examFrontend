import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from "../../services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private userService: UserService,
                private snack: MatSnackBar) { // Declare formBuilder as private
        this.signupForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', Validators.required]
        });
    }

    ngOnInit(): void {
    }

    formSubmit() {
        if (this.signupForm.valid) {
            alert('submitted');
            const payload = this.signupForm.value; // Get form values
            this.userService.addUser(payload).subscribe(
                data => {
                    // Handle success
                    console.log('User added successfully:', data);
                    // alert('success')
                    this.snack.open('successfully created', 'ok', {
                        duration: 3000
                    })
                },
                error => {
                    // Handle error
                    console.error('Error adding user:', error);
                    // alert('something went wrong')
                    this.snack.open('something went wrong', 'ok', {
                        duration: 3000
                    })
                }
            );
        } else {
            // alert('form is invalid');
            this.snack.open("Form is invalid!!", 'ok', {
                duration: 3000,
            })
        }
    }
}
