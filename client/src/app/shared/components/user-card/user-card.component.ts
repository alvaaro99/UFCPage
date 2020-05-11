import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IUser, IModifyUser } from '../../models/user.model';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent {
  @Input() user: IUser;
  changingEmail: boolean = false;
  changingPass: boolean = false;
  @Output() onModifyUser = new EventEmitter<IModifyUser>();
  formNewEmail = new FormGroup({
    newEmail: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    password: new FormControl('', Validators.required),
  });
  formNewPassword = new FormGroup({
    newPassword: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(3)])
    ),
    password: new FormControl('', Validators.required),
  });

  modifyEmail() {
    this.user.email = this.formNewEmail.value.newEmail;
    this.onModifyUser.emit({
      user: this.user,
      passwordToCheck: this.formNewEmail.value.password,
    });
    this.formNewEmail.reset();
    this.cancelNewEmail();
  }

  modifyPassword() {
    this.user.password = this.formNewPassword.value.newPassword;
    this.onModifyUser.emit({
      user: this.user,
      passwordToCheck: this.formNewPassword.value.password,
    });
    this.formNewPassword.reset();
    this.cancelNewPassword();
  }

  cancelNewEmail() {
    this.changingEmail = false;
  }

  cancelNewPassword() {
    this.changingPass = false;
  }

  changeEmail() {
    this.changingEmail = true;
  }

  changePass() {
    this.changingPass = true;
  }
}
