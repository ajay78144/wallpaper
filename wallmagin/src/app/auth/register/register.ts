import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/services/auth';




@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  registerForm: FormGroup;
  submitted = false;
  error; 
  loading = false;
  

  constructor(private fb: FormBuilder,    
    private authService: Auth,
    private router: Router
    
) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$')
      ]],
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
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
      this.authService.register(this.registerForm.value as any)
      .subscribe({
        next: () => {
          this.loading = false;
          this.successMessage = 'Registration successful!';
          setTimeout(() => {
            this.router.navigate(['/auth/login']);
          }, 1500);
        },
        error: (err) => {
          this.loading = false;
          this.errorMessage = err.error?.message || 'Registration failed';
        }
      });

    console.log('Register Data:', this.registerForm.value);
  }
}