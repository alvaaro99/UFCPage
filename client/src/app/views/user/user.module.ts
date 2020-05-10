import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../../views/user/user.component';
import { UserCardComponent } from '../../shared/components/user-card/user-card.component';

@NgModule({
  declarations: [UserCardComponent, UserComponent],
  imports: [CommonModule],
})
export class UserModule {}
