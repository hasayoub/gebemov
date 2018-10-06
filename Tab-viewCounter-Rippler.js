// Simple Tab JQuery Plugin 1 
$(document).ready(function(){!function(t){t(".tabb ul.tabbs").addClass("active").find("> li:eq(0)").addClass("current"),t(".tabb ul.tabbs li a").click(function(i){var e=t(this).closest(".tabb"),s=t(this).closest("li").index();e.find("ul.tabbs > li").removeClass("current"),t(this).closest("li").addClass("current"),e.find(".tabb_content").find("div.tabbs_item").not("div.tabbs_item:eq("+s+")").slideUp(),e.find(".tabb_content").find("div.tabbs_item:eq("+s+")").slideDown(),i.preventDefault()})}(jQuery)});   
//views Counter
$.each($("a[name]"),function(e,a){var t=$(a).parent().find(".postviews"),n=new Firebase("https://storgo-doc.firebaseio.com/pages/id/"+$(a).attr("name"));n.once("value",function(e){var i=e.val(),o=!1;null==i&&((i={}).value=0,i.url=window.location.href,i.id=$(a).attr("name"),o=!0),t.text(i.value),$(".view-"+i.id).text(i.value),i.value++,"/"!=window.location.pathname&&(o?n.set(i):n.child("value").set(i.value))})});
//Rippler    
(function($, window, undefined) {
"use strict"
$.fn.rippler = function(arg = {}) { var rippler = null;
// Initialize the plugin if not allready initiallized
this.each(function() { destroyRipper(this); rippler = new $.Rippler(this, arg); $.data(this, rippler); })
// If Selector is provided in the Argss Object;
if (this.length == 0 && arg instanceof Object && arg.selector != undefined) {$(arg.selector).each(function(){destroyRipper(this)}); return new $.Rippler(this, arg);}
// if some method is provided call the method
if (typeof arg == 'string') {  this.each(function() { if ($.data(this)[arg]) { if (arg == 'destroy') destroyRipper(this)
else $.data(this)[arg](); } else  throw new Error('method ' + arg + ' not defined on rippler '); })}return this;}
// Constructor
$.Rippler=function(i,t){this.elm=$(i),this.opts=t,this.init()};
// Defaults
$.Rippler.defaults={selector:"",color:"",duration:1e3,classes:{ripplerContainer:"rippler-container",ripple:"ripple"}};
// Plugin Methods
$.extend($.Rippler.prototype,{rippler:"1.0",init:function(){var e=$.extend({},$.Rippler.defaults,this.opts),i=this;return this.elm.length&&(this.elm.off("click.rippler"),this.elm.on("click.rippler",this.makeRipple.bind(this))),e.selector&&($(document.body).undelegate(e.selector,"click.rippler"),$(document.body).delegate(e.selector,"click.rippler",function(e){i.elm=$(this),i.makeRipple.call(i,e)})),this},makeRipple:function(e){var i=$.extend({},$.Rippler.defaults,this.opts),t=this.elm,o="",l=i.classes;o=i.color?i.color:getColor(t),-1==" absolute relative fixed".indexOf(t.css("position"))&&t.css({position:"relative",overflow:"hidden"}),0==t.children("."+l.ripplerContainer).length&&t.append("<div class=' "+l.ripplerContainer+" '></div>");var p=1.4*t.outerWidth(),r=t.children("."+l.ripplerContainer),s=$("<div class=' "+l.ripple+" '></div>").css({top:e.clientY-t.offset().top+$(window).scrollTop()+"px",left:e.clientX-t.offset().left+"px","box-shadow":"0px 0px 0px 0px "+o,"background-color":o,transition:" all "+i.duration/2.3+"ms ease-in , opacity "+i.duration/3.1+"ms "+i.duration/1.4+"ms ease-in"});return r.show().append(s),setTimeout(function(){s.css({"box-shadow":"0px 0px 0px "+p+"px "+o,opacity:0}),setTimeout(function(){s.remove(),0==r.find("."+l.ripple).length&&r.hide()},i.duration)},20),this},destroy:function(){return this.elm.length&&this.elm.off("click.rippler"),this.opts.selector&&$(document.body).undelegate(this.opts.selector,"click.rippler"),this}});
// Utility Methods
function getColor(r){if(r.css("color")){var t=r.css("color");return t=t.substr(4),t=t.substr(0,t.length-1),"rgba("+(t=t.split(","))[0]+" ,"+t[1]+" ,"+t[2]+" , 0.15 )"}return"rgba(235,235,235 , .15 )"}function destroyRipper(r){rippler=$.data(r),rippler.init&&(rippler.destroy(),$.removeData(r))}
}(jQuery, window));
