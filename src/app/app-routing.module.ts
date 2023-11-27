import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { CreateUserComponent } from './user/create-user/create-user.component';

const routes: Routes = [
  { path: 'list', component: UserListComponent },
  { path: '', component: UserListComponent },
  { path: 'user-detail/:id', component: UserDetailComponent },
  { path: 'create-user', component: CreateUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
