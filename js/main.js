var G_OBJ = window.sessionStorage || {getItem:function(){return null},setItem:function(){},removeItem:function(){}
,clear:function(){}
};

$(function(){
  //$("#menudiv").load("./sidemenu.html");
    if ( !G_OBJ.getItem("userId") && window.location.href.indexOf("login") <=0) {
         window.location = "login.html";
    }











    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
      });
    // $(function() {
    //     $("#menu-toggle").click(function(e) {
    //         e.preventDefault();
    //         $("#wrapper").toggleClass("toggled");
    //     });
    //   });
})
