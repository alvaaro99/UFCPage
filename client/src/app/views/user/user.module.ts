import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../../views/user/user.component';
import { UserCardComponent } from '../../shared/components/user-card/user-card.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserCardComponent, UserComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
