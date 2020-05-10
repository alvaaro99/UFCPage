import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../../views/login/login.component';
import { LoginFormComponent } from '../../shared/components/login-form/login-form.component';
import { RegisterFormComponent } from '../../shared/components/register-form/register-form.component';

@NgModule({
  declarations: [LoginComponent, LoginFormComponent, RegisterFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class LoginModule {}
