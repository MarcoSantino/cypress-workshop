import { Profile } from '../interface/profile';
import { Settings } from '../interface/settings';
import { ProfileReducer } from './reducers/profile.reducer';
import { SettingsReducer } from './reducers/settings.reducer';


export interface State {
    profile: Profile;
    settings: Settings;
}

export const reducers = {
    profile: ProfileReducer,
    settings: SettingsReducer
};
