import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../redux/state';
import { Observable } from 'rxjs';
import { Profile } from '../../../interface/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public profile$: Observable<Profile>;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.profile$ = this.store.select('profile');
  }

}
