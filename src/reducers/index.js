import { combineReducers } from 'redux';

import Items from './reducer_items';
import Edit_h1 from './reducer_edit_h1';
import Edit_h3 from './reducer_edit_h3';
import Update from './reducer_update';

const rootReducer = combineReducers({
    items: Items,
    h1_edit: Edit_h1,
    h3_edit: Edit_h3,
    update: Update
});

export default rootReducer;