import {combineReducers} from 'redux';
import themeReducer from './reduxTheme/themeReducer';

const rootReducer = combineReducers({
  themeReducer,
});

export type AplicationState = ReturnType<typeof rootReducer>;

export {rootReducer};
