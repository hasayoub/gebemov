$(document).ready(function(){$('.transhide').click(function(){$('#headermenu,.transhide').removeClass('shows');});});
$(document).ready(function(){$('.blantersearch').click(function(){$('.abnavbar,.search-block,i.bs1,i.bs2,.right-blanter').toggleClass('aktif');});});
$(document).ready(function(){$('.showmore').click(function(){$('.bnm').toggleClass('shows');});});
$(document).ready(function(){$('#showkomentarmenu').click(function(){$('#komentarmenu').toggleClass('shows');});});
$(document).ready(function(){$('.moreMenu').click(function(){$('#menu-menu-1').slideToggle('normal');});});
$(document).ready(function(){$('.moreMenu1').click(function(){$('#nav ul').slideToggle('normal');});});
$(document).ready(function(){$('#info2').click(function(){$('#nav-menu1').toggleClass('shows');});});
$(document).ready(function(){$('.toggleMenu').click(function(){$('.dropdowns').toggleClass('shows');});});
$(document).ready(function(){$('.shareclose').click(function(){$('.shareitem.share').removeClass('active');});});
$(document).ready(function(){$('.darkshadow,#closedrop').click(function(){$('.dropdowns,.darkshadow').removeClass('shows');});});
$(document).ready(function(){$('.toggleMenu').click(function(){$('.darkshadow').toggleClass('shows');});});
$(document).ready(function(){$('#showsearch,#showsearch2').click(function(){$('#search-box,#navigasi,#header-blanter,.fixed-icon,#outer-blanter,#content-blanter,body,.search-content').toggleClass('shows');});});
$(document).ready(function(){$('#showmenu').click(function(){$('#headermenu,.transhide').toggleClass('shows');});});
$(document).ready(function(){$('.transhide').click(function(){$('#headermenu,.transhide').removeClass('shows');});});
$(document).ready(function(){$('.showmore').click(function(){$('.bnm').toggleClass('shows');});});
$(document).ready(function(){$('#showkomentarmenu').click(function(){$('#komentarmenu').toggleClass('shows');});});
// Slide Menu
$("#cssmenu ul.mdmenu ul li:odd").addClass("odd"),$("#cssmenu ul.mdmenu ul li:even").addClass("even"),$("#cssmenu > ul > li > a").click(function(){$("#cssmenu li").removeClass("active"),$(this).closest("li").addClass("active");var a=$(this).next();return a.is("ul")&&a.is(":visible")&&($(this).closest("li").removeClass("active"),a.slideUp("normal")),a.is("ul")&&!a.is(":visible")&&($("#cssmenu ul.mdmenu ul:visible").slideUp("normal"),a.slideDown("normal")),0==$(this).closest("li").find("ul").children().length});
// Share Button
$("body").on("click",".comment_body .time_showup,.showMoreOptions",function(e){e.preventDefault(),e.stopImmediatePropagation(),$(this).parents(".comment_body").addClass("active")}),$("body").click(function(e){0===$(e.target).closest(".comment_body").length&&$(".comment_body").removeClass("active")});
// Click Button
$("body").on("click",".shareitem.share a.shareindex,.showMoreOptions",function(e){e.preventDefault(),e.stopImmediatePropagation(),$(this).parents(".shareitem.share").addClass("active")}),$("body").click(function(e){0===$(e.target).closest(".shareitem.share").length&&$(".shareitem.share").removeClass("active")});
$("body").on("click",".comment_body .time_showup,.showMoreOptions",function(e){e.preventDefault(),e.stopImmediatePropagation(),$(this).parents(".comment_body").addClass("active")}),$("body").click(function(e){0===$(e.target).closest(".comment_body").length&&$(".comment_body").removeClass("active")});
// Sub Navigation
var Script=function(){jQuery('.nav-menu2 .sub-menu > a').click(function(){var last=jQuery('.sub-menu.open',$('.nav-menu2'));last.removeClass("open");jQuery('.dropdown').addClass("open");jQuery('.dropdown',last).removeClass("open");jQuery('.sub',last).slideUp(300);var sub=jQuery(this).next();if(sub.is(":visible")){jQuery('.dropdown',jQuery(this)).removeClass("open");jQuery(this).parent().removeClass("open");sub.slideUp(300)}else{jQuery('.dropdown',jQuery(this)).addClass("open");jQuery(this).parent().addClass("open");sub.slideDown(300)}var o=($(this).offset());diff=300-o.top;if(diff>0)$(".nav-menu2").scrollTo("-="+Math.abs(diff),500);else $(".nav-menu2").scrollTo("+="+Math.abs(diff),500)})}();
// Tab Menu Sidebar
!function(a){"use strict";var b=function(b,c){var d=this;d.element=b,d.$element=a(b),d.tabs=d.$element.children(),d.options=a.extend({},a.fn.mtabs.defaults,c),d.current_tab=0,d.init()};b.prototype={init:function(){var a=this;a.tabs.length&&(a.build(),a.buildTabMenu())},build:function(){var b=this,c=b.options,d=c.tab_text_el,e=c.container_class;b.tab_names=[],b.$wrapper=b.$element.wrapInner('<div class="'+e+'" />').find("."+e),b.tabs.wrapAll('<div class="'+c.tabs_container_class+'" />'),b.tabs.each(function(c,e){var f,g=a(e),h=d;f=g.find(h).filter(":first").hide().text(),b.tab_names.push(f)}),a.isFunction(c.onReady)&&c.onReady.call(b.element)},buildTabMenu:function(){for(var b,c=this,d=c.options,e=d.tabsmenu_el,f=c.tab_names,g="<"+e+' class="'+d.tabsmenu_class+'">',h=0,i=f.length,j=function(){var a=arguments;return d.tmpl.tabsmenu_tab.replace(/\{[0-9]\}/g,function(b){var c=Number(b.replace(/\D/g,""));return a[c]||""})};i>h;h++)g+=j(h+1,f[h]);g+="</"+e+">",c.$tabs_menu=a(g).prependTo(c.$wrapper),b=c.$tabs_menu.find(":first")[0].nodeName.toLowerCase(),c.$tabs_menu.on("click",b,function(b){var d=a(this),e=d.index();c.show(e),b.preventDefault()}).find(":first").trigger("click")},show:function(b){var c=this,d=c.options,e=d.active_tab_class;c.tabs.hide().filter(":eq("+b+")").show(),c.$tabs_menu.children().removeClass(e).filter(":eq("+b+")").addClass(e),a.isFunction(d.onTabSelect)&&b!==c.current_tab&&d.onTabSelect.call(c.element,b),c.current_tab=b},destroy:function(){var a=this,b=a.options.tab_text_el;a.$tabs_menu.remove(),a.tabs.unwrap().unwrap(),a.tabs.removeAttr("style"),a.tabs.children(b+":first").removeAttr("style"),a.$element.removeData("mtabs")}},a.fn.mtabs=function(c,d){return this.each(function(){var e,f=a(this),g=f.data("mtabs");e="object"==typeof c&&c,g||f.data("mtabs",g=new b(this,e)),"string"==typeof c&&g[c](d)})},a.fn.mtabs.defaults={container_class:"tabs",tabs_container_class:"tabs-content",active_tab_class:"active-tab",tab_text_el:"h1, h2, h3, h4, h5, h6",tabsmenu_class:"tabs-menu",tabsmenu_el:"ul",tmpl:{tabsmenu_tab:'<li class="waves-effect waves-light tab-{0}"><span>{1}</span></li>'},onTabSelect:null}}(window.jQuery,window,document);
// jQuery Navigation
function changeHeader(){var e;e=jQuery(window).scrollTop(),jQuery("#navigasi .ab-navigation").stop()}function resetNavLine(e){jQuery(".nav-line").stop(),jQuery(".nav").children("li").hasClass("current-menu-item")?jQuery(".nav-line").animate({left:jQuery(".current-menu-item").offset().left-jQuery(".ab-navigation .containers .abnavbar").offset().left,width:jQuery(".current-menu-item").width()},e):jQuery(".nav").children("li").hasClass("current-menu-ancestor")?jQuery(".nav-line").animate({left:jQuery(".current-menu-ancestor").offset().left-jQuery(".ab-navigation .containers .abnavbar").offset().left,width:jQuery(".current-menu-ancestor").width()},e):jQuery(".nav-line").animate({width:0})}jQuery(function(){jQuery(window).width()>979?changeHeader():(jQuery("#navigasi .ab-navigation .abnavbar .nav > li > a, #navigasi .searchform a").animate({color:"#777777"},10),jQuery("#navigasi .ab-navigation").animate({backgroundColor:"#FFFFFF"},100));var e=!1;jQuery(window).resize(function(){}),setInterval(function(){e&&(e=!1)},3e3),jQuery(".abnavbar .nav li").mouseover(function(){jQuery(this).addClass("open")}),jQuery(".abnavbar .nav li").mouseout(function(){jQuery(this).removeClass("open")}),resetNavLine(250),jQuery("#navigasi .nav li").mouseover(function(){jQuery(".nav-line").stop(),jQuery(".nav-line").animate({left:jQuery(this).offset().left-jQuery(".ab-navigation .containers .abnavbar").offset().left,width:jQuery(this).width()},250)}),jQuery("#navigasi .nav li").mouseout(function(){resetNavLine(250)})});
// Parser Code
function convert(){var ele1 = document.getElementById("somewhere");var replaced;replaced = ele1.value;replaced = replaced.replace(/&/ig, "&amp;");replaced = replaced.replace(/</ig, "&lt;");replaced = replaced.replace(/>/ig, "&gt;");replaced = replaced.replace(/"/ig, "&quot;");replaced = replaced.replace(/&#177;/ig, "&plusmn;");replaced = replaced.replace(/&#169;/ig, "&copy;");replaced = replaced.replace(/&#174;/ig, "&reg;");replaced = replaced.replace(/ya'll/ig, "ya'll");ele1.value = replaced;};
// Ajax Material Search by Idblanter.com
function findit(){var e=$("#search-text").val(),t=$(".search-item").length+1;if(e.length>=1){$(".search-content").show(),$(".search-filter").attr("data-query",e),$(".search-result span").show().html("Searching ...");var r="/feeds/posts/default?max-results=12&start-index="+t+"&alt=json&q="+e;$.ajax({type:"GET",url:r,async:!0,contentType:"application/json",dataType:"jsonp",success:function(t){$(".more-result").hide(),doSearch(t,e)}})}else $(".search-content").hide()}function doSearch(e,t){if(e.feed.entry){for(var r=0;r<e.feed.entry.length;r++){for(var n=0;n<e.feed.entry[r].link.length;n++)if("alternate"==e.feed.entry[r].link[n].rel){var a=e.feed.entry[r].link[n].href;break}try{var s=e.feed.entry[r].media$thumbnail.url}catch(i){var s="http://4.bp.blogspot.com/-XQARxtj3cwk/VhKQr6dmTBI/AAAAAAAADJc/Tww7zM8jllc/s1600/default.png"}var c=e.feed.entry[r].title.$t,h='<div class="search-item"><img src="'+s+'"/><a href="'+a+'" target="_blank">'+c+"</a></div>";$(".search-result").append(h)}$(".search-result span").hide(function(){$(".queryword").html("Show results for:<b>"+t+"</b>"),$(".more-result").show()})}else $(".search-result span").show().html("No result"),$(".more-result").hide()}$(".searchmein").submit(function(){return $(".search-item").remove(),findit(),!1}),$(".close-search").click(function(){$(".search-content").hide()}),$(".more-result").click(function(){$(".more-result").hide(),findit()});
