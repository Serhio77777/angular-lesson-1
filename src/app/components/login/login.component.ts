import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import LoginModel from './login.model';
import LoginForm from './login.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.template.html',
  styleUrls: ['./login.styles.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private model: LoginModel;
  public form: LoginForm;
  public loading: boolean = false;
  public isFormErrorMessage: boolean = false;

  constructor(
    private router: Router
  ) {
    this.model = new LoginModel();
    this.form = new LoginForm(this.model);
  }

  // start form validation (to show what is wrong)
  private invalidForm(): void {
    this.form.validate();
    this.isFormErrorMessage = true;
  }

  // start validation functionality
  public submit(): void {
    this.invalidForm()
  }

  // start login request
  private login(): void {
  }

  // subscribe on validation success/failure
  public subscribe(): void {
  }

  // unsubscribe on validation success/failure
  public unSubscribe(): void {
  }

  // make subscribe on a component initialization
  public ngOnInit(): void {
    this.subscribe();
  }

  // make unsubscribe before destroying component
  public ngOnDestroy(): void {
    this.unSubscribe();
  }
}
