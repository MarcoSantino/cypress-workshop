import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ReduxLogin } from '../../enum/redux-login.enum';
import { map } from 'rxjs/operators';
import { LoginActions, LoginRejected } from '../actions/login.action';
import { InsertProfile } from '../actions/profile.action';
import { Profiles } from '../../utils/init-state';
import { Profile } from '../../interface/profile';
import { SetLoginError } from '../actions/settings.action';
import { LoginError } from '../../enum/login-error.enum';

@Injectable()
export class LoginEffect {

    constructor(
        private actions$: Actions
    ) { }

    @Effect()
    login$ = this.actions$.pipe(
        ofType(ReduxLogin.SUBMIT_LOGIN),
        map((action: LoginActions) => {
            const searchProfile = (prof: Profile) => prof.mail === action.payload;
            if (Profiles.some(searchProfile)) {
                const profile = Profiles.find(searchProfile);
                return new InsertProfile(profile);
            } else {
                return new LoginRejected();
            }
        })
    );

    @Effect()
    LoginRejected$ = this.actions$.pipe(
        ofType(ReduxLogin.LOGIN_REJECTED),
        map(() => new SetLoginError(LoginError.REJECTED))
    );
}
