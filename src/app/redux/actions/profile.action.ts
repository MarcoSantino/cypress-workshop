import { Action } from '@ngrx/store';
import { ReduxProfile } from 'src/app/enum/redux-profile.enum';
import { Profile } from 'src/app/interface/profile';

export class InsertProfile implements Action {
    readonly type: string = ReduxProfile.INSERT_PROFILE;

    constructor(public payload: Profile) { }
}

export type ProfileActions = InsertProfile;
