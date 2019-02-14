import { Component, OnInit, Input } from '@angular/core';
import { Notice } from '../../../interface/notice';
import { Profile } from '../../../interface/profile';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../../redux/state';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {
  @Input() notice: Notice;
  public profile$: Observable<Profile>;
  public like: boolean;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.profile$ = this.store.select('profile');
  }

  likePost(): void {
    this.like = !this.like;
  }
}
