import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from '../../../redux/state';
import { SubmitLogin } from '../../../redux/actions/login.action';
import { Observable } from 'rxjs';
import { Settings } from '../../../interface/settings';
import { first } from 'rxjs/operators';
import { Profile } from 'src/app/interface/profile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public settings$: Observable<Settings>;

  constructor(
    private store: Store<State>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();

    this.settings$ = this.store.select('settings');
    this.store.select('profile').pipe(first((profile: Profile) => !!profile.name)).subscribe(() => {
      this.router.navigateByUrl('profile');
    });
  }

  login(): void {
    this.store.dispatch(new SubmitLogin(this.loginForm.controls.email.value));
  }

  private initForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required
      ])
    });
  }
}
