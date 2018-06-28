import { combineReducers } from 'redux';

import Items from './reducer_items';
import Edit_h1 from './reducer_edit_h1';
import Edit_h3 from './reducer_edit_h3';
import Update from './reducer_update';
import Edit_hr from './reducer_edit_hr';
import Edit_p from './reducer_edit_p';
import Edit_img from './reducer_edit_img';
import Body from './reducer_body';

const rootReducer = combineReducers({
    items: Items,
    h1_edit: Edit_h1,
    h3_edit: Edit_h3,
    update: Update,
    hr_edit: Edit_hr,
    p_edit: Edit_p,
    img_edit: Edit_img,
    body: Body
});

export default rootReducer;