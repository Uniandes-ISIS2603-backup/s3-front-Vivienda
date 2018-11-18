import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { UserService } from './user.service';

import { User } from './user';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private authService: UserService,
        private toastrService: ToastrService,) { }
        
  user: User;

  roles: String[];

    /**
    * Logs the user in with the selected role
    */
    login(): void {
        this.authService.login(this.user.role);
        this.toastrService.success('Logged in')
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.user = new User();
        this.roles = ['Administrador', 'Estudiante', 'Arrendador'];
    }

}
