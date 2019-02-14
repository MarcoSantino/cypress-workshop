import { Action } from '@ngrx/store';
import { ReduxLogin } from '../../enum/redux-login.enum';

export class SubmitLogin implements Action {
    readonly type: string = ReduxLogin.SUBMIT_LOGIN;

    constructor(public payload: string) { }
}

export class LoginRejected implements Action {
    readonly type: string = ReduxLogin.LOGIN_REJECTED;

    constructor(public payload = null) { }
}

export type LoginActions = SubmitLogin | LoginRejected;
