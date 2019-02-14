import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../redux/state';
import { Profile } from '../../../interface/profile';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public profile$: Observable<Profile>;
  public dropdownOpen: boolean;

  constructor(
    private store: Store<State>,
    private router: Router
  ) {
    this.dropdownOpen = false;
  }

  ngOnInit(): void {
    this.profile$ = this.store.select('profile');
  }

  goToLogin(): void {
    this.router.navigateByUrl('/login');
  }

  logout(): void {
    window.location.href = 'http://localhost:4200';
  }
  goToProfile(): void {
    this.router.navigateByUrl('/profile');
  }
}
