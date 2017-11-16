$(function(){
  //$("#menudiv").load("./sidemenu.html");

})


$(function() {
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
  });
