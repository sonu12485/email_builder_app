const default_data = JSON.stringify(
  [
    {
      "type": "layout",
      "layout_type": 0,
      "id": 4321963122,
      "center": [
        {
          "type": "h1",
          "data": "Heading",
          "styles": {
            "fontSize": 38,
            "color": "#000000",
            "backgroundColor": "#ffffff",
            "fontFamily": "sans-serif",
            "fontWeight": "",
            "fontStyle": "",
            "textDecoration": "",
            "textAlign": "center",
            "paddingTop": 0,
            "paddingBottom": 0,
            "paddingLeft": 0,
            "paddingRight": 0
          },
          "id": 9687834296,
          "layout_id": 4321963122,
          "position": "center"
        },
        {
          "type": "h3",
          "data": "Sub-Heading",
          "styles": {
            "fontSize": 26,
            "color": "#000000",
            "backgroundColor": "#ffffff",
            "fontFamily": "sans-serif",
            "fontWeight": "",
            "fontStyle": "",
            "textDecoration": "",
            "textAlign": "center",
            "paddingTop": 0,
            "paddingBottom": 0,
            "paddingLeft": 0,
            "paddingRight": 0
          },
          "id": 3620904757,
          "layout_id": 4321963122,
          "position": "center"
        },
        {
          "type": "hr",
          "id": 5310028983,
          "styles": [],
          "layout_id": 4321963122,
          "position": "center"
        }
      ],
      "centerHTML": "<div style=\"font-size:38px;color:#000000;background-color:#ffffff;font-family:sans-serif;text-align:center\" class=\"item_h1\">Heading</div><div style=\"font-size:26px;color:#000000;background-color:#ffffff;font-family:sans-serif;text-align:center\" class=\"item_h3\">Sub-Heading</div><div class=\"item_hr\"><hr/></div>",
      "styles": {
        "backgroundColor": "#ffffff",
        "paddingTop": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "paddingRight": 10
      }
    },
    {
      "type": "layout",
      "layout_type": 3,
      "id": 8789815112,
      "left": [
        {
          "type": "p",
          "data": "Ullamco dolore commodo ad do ea\n            mollit fugiat aliquip sit Lorem. Do fugiat in laborum enim \n            duis veniam reprehenderit. Nulla velit quis excepteur proiden\n            t exercitation.",
          "styles": {
            "fontSize": 16,
            "color": "#000000",
            "backgroundColor": "#ffffff",
            "fontFamily": "sans-serif",
            "fontWeight": "",
            "fontStyle": "",
            "textDecoration": "",
            "textAlign": "left",
            "paddingTop": 0,
            "paddingBottom": 0,
            "paddingLeft": 0,
            "paddingRight": 0
          },
          "id": 8406974694,
          "layout_id": 8789815112,
          "position": "left"
        },
        {
          "type": "btn",
          "data": {
            "name": "Button",
            "url": "#",
            "color": "primary",
            "size": "",
            "block": false,
            "alignment": "center",
            "target": "",
            "style": {
              "paddingTop": 10,
              "paddingBottom": 10,
              "paddingLeft": 10,
              "paddingRight": 10
            }
          },
          "id": 454721436,
          "layout_id": 8789815112,
          "position": "left"
        }
      ],
      "right": [
        {
          "type": "img",
          "src": "http://via.placeholder.com/200x200?text=IMAGE",
          "link": "",
          "rotate": 0,
          "styles": {
            "textAlign": "center",
            "paddingTop": 10,
            "paddingBottom": 10,
            "paddingLeft": 10,
            "paddingRight": 10,
            "fullWidth": false
          },
          "id": 3757676750,
          "layout_id": 8789815112,
          "position": "right"
        }
      ],
      "leftHTML": "<div style=\"font-size:16px;color:#000000;background-color:#ffffff;font-family:sans-serif;text-align:left\" class=\"item_p\">Ullamco dolore commodo ad do ea\n            mollit fugiat aliquip sit Lorem. Do fugiat in laborum enim \n            duis veniam reprehenderit. Nulla velit quis excepteur proiden\n            t exercitation.</div><div class=\"item_btn\" style=\"text-align:center;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px\"><a href=\"#\" target=\"\" class=\"btn btn-primary\">Button</a></div>",
      "rightHTML": "<div style=\"margin-top:10px;margin-bottom:10px;width:100%;overflow:hidden;text-align:center;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px;full-width:\" class=\"item_img\"><img src=\"http://via.placeholder.com/200x200?text=IMAGE\" style=\"max-width:100%;height:auto;transform:rotate(0deg)\"/></div>",
      "styles": {
        "backgroundColor": "#ffffff",
        "paddingTop": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "paddingRight": 10
      }
    }
  ]
);

const default_body = '{"width":600,"background":"#ffffff","paddingTop":0,"paddingBottom":0,"paddingLeft":0,"paddingRight":0}';

module.exports = { default_body, default_data };
