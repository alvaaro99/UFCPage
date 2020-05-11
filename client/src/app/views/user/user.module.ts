import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../../views/user/user.component';
import { UserCardComponent } from '../../shared/components/user-card/user-card.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserCardComponent, UserComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, UserRoutingModule],
})
export class UserModule {}
