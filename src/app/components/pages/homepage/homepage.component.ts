import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../../../interface/profile';
import { State } from '../../../redux/state';
import { Store } from '@ngrx/store';
import { Notice } from '../../../interface/notice';
import { notices } from '../../../utils/init-notices';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public profile$: Observable<Profile>;
  public notices: Notice[];

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.profile$ = this.store.select('profile');
    this.notices = notices;
  }

}
