var express = require('express');
var router = express.Router();
var db = require("../config/db");

var widegts = {
  "top": 0, 
  "zoom": 100, 
  "previewstatus": false, 
  "type": "page", 
  "index": -1, 
  "uuid": -1, 
  "counter": 0, 
  "originX": 36, 
  "originY": 32, 
  "startX": 1105, 
  "startY": 493, 
  "moving": false, 
  "animation": [ ], 
  "playState": false, 
  "activeElement": {
      "page": true, 
      "title": "测试页面", 
      "height": 800, 
      "width": 1280, 
      "endTime": "2020-04-03T07:18:44.542Z", 
      "backgroundColor": "#f0f3f4", 
      "dataSetType": "1", 
      "apiAdrr": "http://localhost:3000/users", 
      "left": 0, 
      "top": 36, 
      "offsetTop": 68, 
      "offsetLeft": 0
  }, 
  "page": {
      "page": true, 
      "title": "测试页面", 
      "height": 800, 
      "width": 1280, 
      "endTime": "2020-04-03T07:18:44.542Z", 
      "backgroundColor": "#f0f3f4", 
      "dataSetType": "1", 
      "apiAdrr": "http://localhost:3000/users", 
      "left": 0, 
      "top": 36, 
      "offsetTop": 68, 
      "offsetLeft": 0
  }, 
  "widgets": [
      {
          "type": "braid-container", 
          "isContainer": true, 
          "hasGuide": true, 
          "isUpload": false, 
          "isChild": false, 
          "draggable": true, 
          "resizable": true, 
          "name": "1e66f094fa", 
          "width": 1237, 
          "height": 777, 
          "left": 36, 
          "offsetLeft": 36, 
          "offsetTop": 32, 
          "top": 32, 
          "z": 0, 
          "display": "flex", 
          "bgColor": "#fff", 
          "backPic": "", 
          "backPicUrl": "", 
          "radius": 0, 
          "borderColor": "", 
          "borderWidth": 0, 
          "dir": "row", 
          "justify": "flex-start", 
          "align": "flex-start", 
          "belong": "page", 
          "animationName": "", 
          "uuid": "1e66f094fa"
      }, 
      {
          "type": "echarts-line", 
          "isContainer": false, 
          "isUpload": false, 
          "hasGuide": true, 
          "isChild": true, 
          "draggable": true, 
          "resizable": true, 
          "name": "折线图", 
          "width": 564, 
          "height": 260, 
          "left": 34, 
          "top": 87, 
          "z": 0, 
          "bgColor": "#fff", 
          "backPic": "", 
          "backPicUrl": "", 
          "color": "", 
          "text": "折线图", 
          "belong": "1e66f094fa", 
          "animationName": "", 
          "option": {
              "tooltip": {
                  "trigger": "axis", 
                  "axisPointer": {
                      "type": "cross", 
                      "label": {
                          "backgroundColor": "#6a7985"
                      }
                  }
              }, 
              "grid": {
                  "top": "3%", 
                  "left": "1.2%", 
                  "right": "1%", 
                  "bottom": "3%", 
                  "containLabel": true
              }, 
              "xAxis": [
                  {
                      "type": "category", 
                      "boundaryGap": false, 
                      "data": [
                          "周一", 
                          "周二", 
                          "周三", 
                          "周四", 
                          "周五", 
                          "周六", 
                          "周日"
                      ]
                  }
              ], 
              "yAxis": [
                  {
                      "type": "value"
                  }
              ], 
              "series": [
                  {
                      "name": "运营商/网络服务", 
                      "type": "line", 
                      "stack": "总量", 
                      "areaStyle": {
                          "normal": {
                              "color": "#2d8cf0"
                          }
                      }, 
                      "data": [
                          120, 
                          132, 
                          101, 
                          134, 
                          90, 
                          230, 
                          210
                      ]
                  }, 
                  {
                      "name": "银行/证券", 
                      "type": "line", 
                      "stack": "总量", 
                      "areaStyle": {
                          "normal": {
                              "color": "#10A6FF"
                          }
                      }, 
                      "data": [
                          257, 
                          358, 
                          278, 
                          234, 
                          290, 
                          330, 
                          310
                      ]
                  }, 
                  {
                      "name": "游戏/视频", 
                      "type": "line", 
                      "stack": "总量", 
                      "areaStyle": {
                          "normal": {
                              "color": "#0C17A6"
                          }
                      }, 
                      "data": [
                          379, 
                          268, 
                          354, 
                          269, 
                          310, 
                          478, 
                          358
                      ]
                  }, 
                  {
                      "name": "餐饮/外卖", 
                      "type": "line", 
                      "stack": "总量", 
                      "areaStyle": {
                          "normal": {
                              "color": "#4608A6"
                          }
                      }, 
                      "data": [
                          320, 
                          332, 
                          301, 
                          334, 
                          390, 
                          330, 
                          320
                      ]
                  }, 
                  {
                      "name": "快递/电商", 
                      "type": "line", 
                      "stack": "总量", 
                      "label": {
                          "normal": {
                              "show": true, 
                              "position": "top"
                          }
                      }, 
                      "areaStyle": {
                          "normal": {
                              "color": "#398DBF"
                          }
                      }, 
                      "data": [
                          820, 
                          645, 
                          546, 
                          745, 
                          872, 
                          624, 
                          258
                      ]
                  }
              ]
          }, 
          "isEcharts": true, 
          "offsetTop": 116, 
          "offsetLeft": 67, 
          "uuid": "折线图e231c72cc8"
      }, 
      {
          "type": "echarts-bar", 
          "isContainer": false, 
          "isUpload": false, 
          "hasGuide": true, 
          "isChild": true, 
          "draggable": true, 
          "resizable": true, 
          "name": "柱状图", 
          "width": 524, 
          "height": 242, 
          "left": 667, 
          "top": 82, 
          "z": 0, 
          "bgColor": "#fff", 
          "backPic": "", 
          "backPicUrl": "", 
          "color": "", 
          "text": "柱状图", 
          "belong": "1e66f094fa", 
          "animationName": "", 
          "option": {
              "color": [
                  "#3398DB"
              ], 
              "tooltip": {
                  "trigger": "axis", 
                  "axisPointer": {
                      "type": "shadow"
                  }
              }, 
              "grid": {
                  "left": "3%", 
                  "right": "4%", 
                  "bottom": "3%", 
                  "containLabel": true
              }, 
              "xAxis": [
                  {
                      "type": "category", 
                      "data": [
                          "Mon", 
                          "Tue", 
                          "Wed", 
                          "Thu", 
                          "Fri", 
                          "Sat", 
                          "Sun"
                      ], 
                      "axisTick": {
                          "alignWithLabel": true
                      }
                  }
              ], 
              "yAxis": [
                  {
                      "type": "value"
                  }
              ], 
              "series": [
                  {
                      "name": "直接访问", 
                      "type": "bar", 
                      "barWidth": "60%", 
                      "data": [
                          10, 
                          52, 
                          200, 
                          334, 
                          390, 
                          330, 
                          220
                      ]
                  }
              ]
          }, 
          "isEcharts": true, 
          "offsetTop": 110, 
          "offsetLeft": 693, 
          "uuid": "柱状图723bb45ca5"
      }, 
      {
          "type": "braid-txt", 
          "isContainer": false, 
          "isUpload": false, 
          "hasGuide": true, 
          "isChild": true, 
          "draggable": true, 
          "resizable": true, 
          "width": 446, 
          "bgColor": "", 
          "height": 55, 
          "name": "文本", 
          "left": 65, 
          "top": 6, 
          "z": 0, 
          "lineHeight": 1.6, 
          "fontSize": 1.2, 
          "fontWeight": false, 
          "color": "#000000", 
          "textAlign": "left", 
          "text": "折线图", 
          "href": "", 
          "belong": "1e66f094fa", 
          "animationName": "", 
          "offsetTop": 39, 
          "offsetLeft": 166, 
          "uuid": "文本a6de5c089b"
      }, 
      {
          "type": "braid-txt", 
          "isContainer": false, 
          "isUpload": false, 
          "hasGuide": true, 
          "isChild": true, 
          "draggable": true, 
          "resizable": true, 
          "width": 507, 
          "bgColor": "", 
          "height": 100, 
          "name": "文本", 
          "left": 690, 
          "top": 7, 
          "z": 0, 
          "lineHeight": 1.6, 
          "fontSize": 1.2, 
          "fontWeight": false, 
          "color": "#000000", 
          "textAlign": "left", 
          "text": "柱状图", 
          "href": "", 
          "belong": "1e66f094fa", 
          "animationName": "", 
          "offsetTop": 39, 
          "offsetLeft": 726, 
          "uuid": "文本ecad57c1f8"
      }, 
      {
          "type": "braid-table", 
          "isContainer": false, 
          "isUpload": false, 
          "hasGuide": true, 
          "isChild": true, 
          "draggable": true, 
          "resizable": true, 
          "name": "表格", 
          "width": 1127, 
          "height": 250, 
          "left": 45, 
          "top": 449, 
          "z": 0, 
          "bgColor": "#fff", 
          "backPic": "", 
          "backPicUrl": "", 
          "color": "", 
          "text": "表格", 
          "belong": "1e66f094fa", 
          "animationName": "", 
          "columns": "[{\"title\":\"Name\",\"key\":\"name\"},{\"title\":\"Age\",\"key\":\"age\"},{\"title\":\"Address\",\"key\":\"address\"}]", 
          "data": "[{\"name\":\"John Brown\",\"age\":18,\"address\":\"New York No. 1 Lake Park\",\"date\":\"2016-10-03\"},{\"name\":\"Jim Green\",\"age\":24,\"address\":\"London No. 1 Lake Park\",\"date\":\"2016-10-01\"},{\"name\":\"Joe Black\",\"age\":30,\"address\":\"Sydney No. 1 Lake Park\",\"date\":\"2016-10-02\"},{\"name\":\"Jon Snow\",\"age\":26,\"address\":\"Ottawa No. 2 Lake Park\",\"date\":\"2016-10-04\"}]", 
          "offsetTop": 481, 
          "offsetLeft": 81, 
          "uuid": "表格4703101d61"
      }, 
      {
          "type": "braid-txt", 
          "isContainer": false, 
          "isUpload": false, 
          "hasGuide": true, 
          "isChild": true, 
          "draggable": true, 
          "resizable": true, 
          "width": 278, 
          "bgColor": "", 
          "height": 55, 
          "name": "文本", 
          "left": 458, 
          "top": 364, 
          "z": 0, 
          "lineHeight": 1.6, 
          "fontSize": 1.2, 
          "fontWeight": false, 
          "color": "#00ff00", 
          "textAlign": "left", 
          "text": "我的表格", 
          "href": "", 
          "belong": "1e66f094fa", 
          "animationName": "", 
          "offsetTop": 396, 
          "offsetLeft": 494, 
          "uuid": "文本afb37b2446"
      }
  ], 
  "originOffsetX": 36, 
  "originOffsetY": 32
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 新增组件
router.post('/saveWidgets', function (req, res) {
  var pageid = req.body.pageid;
  var pagename = req.body.pagename;
  var url = req.body.url;
  var widgets = req.body.widgets;
  db.query("insert into page(pageid,pagename,url,widgets) values('" + pageid + "','" + pagename 
    + "','" + url + "','" + widgets + "')", function (err, rows) {
      if (err) {
          res.end('新增失败：' + err);
      } else {
        res.end('新增成功');
      }
  })
});



/* GET users listing. */
router.get('/getWidgets', function(req, res, next) {
  res.send(JSON.stringify(widegts));
});

module.exports = router;
