import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from "../../services/user.service";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private userService: UserService) { // Declare formBuilder as private
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
                    alert('success')
                },
                error => {
                    // Handle error
                    console.error('Error adding user:', error);
                    alert('something went wrong')
                }
            );
        } else {
            alert('form is invalid');
        }
    }
}
