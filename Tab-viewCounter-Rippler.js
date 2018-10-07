// Simple Tab JQuery Plugin 1 
$(document).ready(function(){!function(t){t(".tabb ul.tabbs").addClass("active").find("> li:eq(0)").addClass("current"),t(".tabb ul.tabbs li a").click(function(i){var e=t(this).closest(".tabb"),s=t(this).closest("li").index();e.find("ul.tabbs > li").removeClass("current"),t(this).closest("li").addClass("current"),e.find(".tabb_content").find("div.tabbs_item").not("div.tabbs_item:eq("+s+")").slideUp(),e.find(".tabb_content").find("div.tabbs_item:eq("+s+")").slideDown(),i.preventDefault()})}(jQuery)});   
//views Counter
$.each($("a[name]"),function(e,a){var t=$(a).parent().find(".postviews"),n=new Firebase("https://storgo-doc.firebaseio.com/pages/id/"+$(a).attr("name"));n.once("value",function(e){var i=e.val(),o=!1;null==i&&((i={}).value=0,i.url=window.location.href,i.id=$(a).attr("name"),o=!0),t.text(i.value),$(".view-"+i.id).text(i.value),i.value++,"/"!=window.location.pathname&&(o?n.set(i):n.child("value").set(i.value))})});
//Rippler    

