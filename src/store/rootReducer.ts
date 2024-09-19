import { combineReducers } from '@reduxjs/toolkit';
import courseSectionsReducer from './slices/courseSectionsSlice';
import faqReducer from './slices/faqSlice';

const rootReducer = combineReducers({
  courseSections: courseSectionsReducer,
  faq: faqReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;