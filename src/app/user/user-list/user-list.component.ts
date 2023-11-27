import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { user } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  users: user | undefined;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.getRepos();
    console.log(this.users, 'user');
  }
  getRepos() {
    this.userService.getUsers().subscribe(
      (response) => {
        this.users = response;
        console.log(this.users, 'user');
      },
      (error) => {
        console.log('error');
      }
    );
  }
  deleteUser(id: any) {
    this.userService.deleteUser(id).
    subscribe((user) => {
      console.log(user, 'user')
    });
    this.getRepos();
  }
}
