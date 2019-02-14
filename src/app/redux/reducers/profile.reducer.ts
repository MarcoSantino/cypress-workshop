import { Profile } from '../../interface/profile';
import * as profile from '../actions/profile.action';
import { ReduxProfile } from 'src/app/enum/redux-profile.enum';

const initialState: Profile = {
    name: null,
    lastName: null,
    gender: null,
    bornDate: null,
    website: null,
    twitter: null,
    facebook: null,
    img: null,
    mail: null
};

export function ProfileReducer(
    state = initialState,
    action: profile.ProfileActions
) {
    switch (action.type) {
        case ReduxProfile.INSERT_PROFILE:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}
