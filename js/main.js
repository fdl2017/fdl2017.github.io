var G_OBJ = window.sessionStorage || {
  getItem: function () { return null }, setItem: function () { }, removeItem: function () { }
  , clear: function () { }
};

$(function () {
  //$("#menudiv").load("./sidemenu.html");
  //==============================
  // Login check
  //==============================
  if (!G_OBJ.getItem("userId") && window.location.href.indexOf("login") <= 0) {
    window.location = "login.html";
  }
  G_OBJ.getItem("userId") == "user2" && ($("#langsel").hide(), $("#userMgrli").hide());


  //==============================================================
  // Vue componet
  //==============================================================
  var menuData = {
    items: [
      { id: "menu0", href: "properNoun.html", text: "固有名詞検索" },
      { id: "menu1", href: "productManagement.html", text: "作品管理" },
      { id: "menu2", href: "userManagement.html", text: "ユーザ管理" },
      // { id: "menu3", href: "charactorManagement.html", text: "チャラクタ管理" }
    ]
  };
  // var productionListData = {
  //   ths: productionlist && productionlist["title"] ? productionlist["title"] :[
  //     "作品名正式名称",
  //     "英文名称",
  //     "日本語コピーライト",
  //     "copyright",
  //     "Short copyright",
  //     "製作年",
  //     "カテゴリー","尺/話数"],
  //   trs: productionlist && productionlist["list"] ? productionlist["list"] : [[]]
  // };
  //console.debug(productionListData["trs"]);

  Vue.component('menu-component', {
    template: '<div id="sidebar-wrapper">\
      <ul class="sidebar-nav" id="sidebarNav">\
        <ul id="sidebar_menu" class="sidebar-nav">\
          <li class="sidebar-brand">\
            <a id="menu-toggle" href="#">Menu\
              <span id="main_icon" class="glyphicon glyphicon-align-justify chat"></span>\
            </a>\
          </li>\
        </ul>\
        <ul class="sidebar-nav" id="sidebar">\
          <li v-for="item in items">\
            <a v-bind:href="item.href" tdata-toggle="tooltip" v-bind:title="item.text">{{ item.text }}\
              <span class="sub_icon glyphicon glyphicon-link chat"></span>\
            </a>\
          </li>\
        </ul>\
      </ul>\
  </div>',
    data: function () { return menuData }

  });

  var menuv = new Vue({
    el: '#menuDiv',
    //data: productionListData
  });

  //====================
  // Menu click event
  //====================
  $("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("active");
  });

  $('[data-toggle="tooltip"]').tooltip();


})


//==============================================================
// Public function : Get production infomation
//==============================================================
var G_FUNC = {
  getProductionData: function (list,id) {
    for (var i = 0; i < list.length; i++) {
      if (list[i]["id"] == id) {
        return list[i];
      }
    }
    return {};
  },
  makeUpdateProductionData: function (type) {
    var param = window.location.href.replace(/.*\?/, "");
    //console.debug(param);
    var list = !type || type ==0 ? productionlist : properNounSrchResultList;
    if (! ( param && /^\d+$/.test(param))) {
      param = "1";
    }
    var dataList = [];
    var dataArr = G_FUNC.getProductionData(list["list"], param)["data"]
    for (var i = 0; i < list["title"].length; i++) {
      var data = {};
      data["title"] = list["title"][i];
      data["value"] = dataArr[i];
      dataList.push(data);
    }
    // return { items: dataList };
    return dataList;
  },

};



