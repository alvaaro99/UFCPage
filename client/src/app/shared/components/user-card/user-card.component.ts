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
  deletingUser: boolean = false;
  @Output() onModifyUser = new EventEmitter<IModifyUser>();
  @Output() onDeleteUser = new EventEmitter<string>();
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
    const user = { ...this.user };
    user.email = this.formNewEmail.value.newEmail;
    user.password = this.formNewEmail.value.password;
    this.onModifyUser.emit({
      user,
      passwordToCheck: this.formNewEmail.value.password,
    });
    this.formNewEmail.reset();
    this.cancelNewEmail();
  }

  modifyPassword() {
    const user = { ...this.user };
    user.password = this.formNewPassword.value.newPassword;
    this.onModifyUser.emit({
      user,
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

  cancelDeletingUser() {
    this.deletingUser = false;
  }
  deleteUser(password: string) {
    this.onDeleteUser.emit(password);
  }
}
