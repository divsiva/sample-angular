import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { user } from '../user';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent {
  user: user | undefined;
  id: any;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log(typeof(params.get('id')), 'params');
      this.id = params.get('id')
    });
    this.getUserDetails(this.id);
    // console.log(this.users, 'user');
    // this.activatedRoute.queryParams.subscribe(params => {
    //   console.log(params)
    //   });  }
  }
  getUserDetails(id: string) {
    this.userService.getUserDetails(id).subscribe(
      (response) => {
        this.user = response;
        console.log(this.user, 'user');
      },
      (error) => {
        console.log('error');
      }
    );
  }
}
