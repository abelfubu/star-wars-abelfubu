import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: [''],
      lastName: [''],
      email: [''],
      password: [''],
    });
  }

  onSubmit(): void {
    if (this.registerForm.invalid) return;
    this.authService.registerUser(this.registerForm.value);
    this.router.navigateByUrl('/auth/login');
  }
}
