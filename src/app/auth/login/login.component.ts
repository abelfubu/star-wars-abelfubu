import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponse } from 'src/app/models';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) return;
    const loginResponse: LoginResponse = this.authService.loginUser(
      this.loginForm.value
    );
    if (loginResponse.isLoggedIn) {
      this.router.navigateByUrl('/home/ships');
      return;
    }
    this.loginForm.setErrors({ invalidCredentials: true });
  }
}
