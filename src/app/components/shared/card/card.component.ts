import { Component, OnInit, Input } from '@angular/core';
import { Profile } from 'src/app/interface/profile';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() profile: Profile;

  constructor() { }

  ngOnInit(): void {
  }

}
