import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../_model/users';
import { UsersService } from '../_service/users.service';
import { Role } from '../_model/Role';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: Users = new Users();
  role:Role = new Role();
  roleName:String;
  constructor(private usersService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveUser() {
    this.role.roleName=this.roleName;
    this.user.role.push(this.role);
    // this.user.role[0].roleName=this.roleName;
    console.log(this.user.role);
    this.usersService.createUser(this.user).subscribe(data => {
      console.log(data);
      this.goToUsersList();
    },
    error => console.log(error));
  }

  goToUsersList() {
    this.router.navigate(['/users']);
  }

  onSubmit() {
    console.log(this.user);
    this.saveUser();
  }

}
