// this reducer stores all the images data of the image store

import _ from 'lodash';

// initial images in the store
const initState = [
    {
        name: "Beach",
        id: _.round(Math.random()*10000000000),
        url: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"
    },
    {
        name: "Railway",
        id: _.round(Math.random()*10000000000),
        url: "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
    },
    {
        name: "Puppy",
        id: _.round(Math.random()*10000000000),
        url: "https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg"
    },
    {
        name: "Hot Air Balloon",
        id: _.round(Math.random()*10000000000),
        url: "https://www.planwallpaper.com/static/images/canberra_hero_image.jpg"
    },
    {
        name: "Birds",
        id: _.round(Math.random()*10000000000),
        url: "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
    },
    {
        name: "Patterns",
        id: _.round(Math.random()*10000000000),
        url: "https://ak.picdn.net/assets/cms/14c40a5a7a7f50788cf9e346071ab49ad1201b12-17d705f0349ed08f5387b39c7644054a59affe52-LOHP_vector_module_shutterstock_307324316-min.jpg"
    }
];

export default function(state=initState, action)
{
    switch (action.type) {

        case "ADD_STORE_IMAGE":

            const new_state = state.concat([{ 
                name: action.payload.name,
                id: _.round(Math.random()*10000000000),
                url: action.payload.url
            }]);

            return new_state;

        case "DELETE_STORE_IMAGE":

            return state.filter( image => {
                return action.payload.id !== image.id
            });
        
        default:
            return state;
    }
}
