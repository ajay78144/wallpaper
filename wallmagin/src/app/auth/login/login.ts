import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/services/auth';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginForm: FormGroup;
  submitted = false;
  

  constructor(private fb: FormBuilder,
     private authService: Auth,
    private router: Router

  ) {
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
      this.authService.login(this.loginForm.value as any)
      .subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/wallpapers']);
        },
        error: (err) => {
          this.loading = false;
          this.errorMessage = err.error?.message || 'Invalid email or password';
        }
      });

    console.log('Login Data:', this.loginForm.value);
  }
}