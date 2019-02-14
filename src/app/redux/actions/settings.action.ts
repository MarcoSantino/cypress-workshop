import { Action } from '@ngrx/store';
import { ReduxSettings } from 'src/app/enum/redux-settings.enum';

export class SetLoginError implements Action {
    readonly type: string = ReduxSettings.SET_ERROR_LOGIN;

    constructor(public payload: string) { }
}

export type SettingsActions = SetLoginError;
