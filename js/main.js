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
  G_OBJ.getItem("userId") == "user2" && ($("#langsel").hide(), $("#menu_user").hide());


  //==============================================================
  // Vue componet
  //==============================================================
  var menuData = {
    items: [
      { id: "menu_index", href: "index.html", text: "変更履歴一覧" },
      { id: "menu_propernoun", href: "properNoun.html", text: "固有名詞検索" },
      { id: "menu_transtbl", href: "properNounTranslist.html", text: "固有名詞対照表" },
      { id: "menu_production", href: "productManagement.html", text: "作品管理" },
      { id: "menu_user", href: "userManagement.html", text: "ユーザ管理" }
    ]
  };
  if (G_OBJ.getItem("userId") == "user2") {
    menuData["items"].splice(3,1);
  }

  Vue.component('menu-component', {
    template: '<div id="sidebar-wrapper">\
      <ul class="sidebar-nav" id="sidebarNav">\
        <ul id="sidebar_menu" class="sidebar-nav">\
          <li class="sidebar-brand">\
            <a id="menu-toggle" href="#">メニュー\
              <span id="main_icon" class="glyphicon glyphicon-align-justify chat" tdata-toggle="tooltip" title="メニュー"></span>\
            </a>\
          </li>\
        </ul>\
        <ul class="sidebar-nav" id="sidebar">\
          <li v-for="item in items" :id="item.id">\
            <a v-bind:href="item.href"  tdata-toggle="tooltip" v-bind:title="item.text">{{ item.text }}\
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
  $("#wrapper").removeClass("active")
  if (G_OBJ.getItem("class") === "active") {
    $("#wrapper").addClass("active");
  }
  $("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("active");
    if ($("#wrapper").hasClass("active")) {
      G_OBJ.setItem("class", "active");
    } else {
      G_OBJ.setItem("class", "");
    }
  });

  $('[data-toggle="tooltip"]').tooltip();


})


//==============================================================
// Public function : Get production infomation
//==============================================================
var G_FUNC = {
  getProductionData: function (list, id) {
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
    var list = !type || type == 0 ? productionlist : properNounSrchResultList;
    if (!(param && /^\d+$/.test(param))) {
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



