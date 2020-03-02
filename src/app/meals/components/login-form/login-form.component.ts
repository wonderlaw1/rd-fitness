import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {

  user = {
    firstName: '',
    password:  '',
    saveCredentials: true
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.user);
  }
}
