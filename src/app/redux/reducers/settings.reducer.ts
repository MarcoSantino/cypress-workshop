import * as settings from '../actions/settings.action';
import { ReduxSettings } from '../../enum/redux-settings.enum';
import { Settings } from '../../interface/settings';

const initialState: Settings = {
    loginError: null
};

export function SettingsReducer(
    state = initialState,
    action: settings.SettingsActions
) {
    switch (action.type) {
        case ReduxSettings.SET_ERROR_LOGIN:
            return {
                ...state,
                loginError: action.payload
            };
        default:
            return state;
    }
}
