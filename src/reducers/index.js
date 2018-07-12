import { combineReducers } from 'redux';

import Items from './reducer_items';
import Edit_h1 from './reducer_edit_h1';
import Edit_h3 from './reducer_edit_h3';
import Update from './reducer_update';
import Edit_hr from './reducer_edit_hr';
import Edit_p from './reducer_edit_p';
import Edit_img from './reducer_edit_img';
import Body from './reducer_body';
import Edit_layout from './reducer_edit_layout';
import Edit_btn from './reducer_edit_btn';
import Edit_HTML from './reducer_edit_html';
import Edit_icons from './reducer_edit_icons';
import ImageStore from './reducer_image_store';
import Templates from './reducer_templates';
import Edit_video from './reducer_edit_video';

const rootReducer = combineReducers({
    items: Items,
    h1_edit: Edit_h1,
    h3_edit: Edit_h3,
    update: Update,
    hr_edit: Edit_hr,
    p_edit: Edit_p,
    img_edit: Edit_img,
    body: Body,
    layout_edit: Edit_layout,
    btn_edit: Edit_btn,
    html_edit: Edit_HTML,
    icon_edit: Edit_icons,
    image_store: ImageStore,
    templates: Templates,
    video_edit: Edit_video
});

export default rootReducer;