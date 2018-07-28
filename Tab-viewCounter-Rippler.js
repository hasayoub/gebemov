// Simple Tab JQuery Plugin 1 
$(document).ready(function() { 
	(function ($) { 
		$('.tabb ul.tabbs').addClass('active').find('> li:eq(0)').addClass('current');	
		$('.tabb ul.tabbs li a').click(function (g) { 
			var tabb = $(this).closest('.tabb'), 
				index = $(this).closest('li').index();			
			tabb.find('ul.tabbs > li').removeClass('current');
			$(this).closest('li').addClass('current');			
			tabb.find('.tabb_content').find('div.tabbs_item').not('div.tabbs_item:eq(' + index + ')').slideUp();
			tabb.find('.tabb_content').find('div.tabbs_item:eq(' + index + ')').slideDown();			
			g.preventDefault();
		} );
	})(jQuery);
});

// Simple Tab JQuery Plugin 2 
    (function(a) {
        a.fn.simpleTab = function(b) {
            b = jQuery.extend({
                active: 1,
                fx: null,
                showSpeed: 400,
                hideSpeed: 400,
                showEasing: null,
                hideEasing: null,
                show: function() {},
                hide: function() {},
                change: function() {}
            }, b);
            return this.each(function() {
                var e = a(this),
                    c = e.children("[data-tab]"),
                    d = b.active - 1;
                e.addClass("simpleTab").prepend('<ul class="tab-wrapper"></ul>');
                c.addClass("tab-content").each(function() {
                    a(this).hide();
                    e.find(".tab-wrapper").append('<li><a href="#">' + a(this).data("tab") + "</a></li>")
                }).eq(d).show();
                e.find(".tab-wrapper a").on("click", function() {
                    var f = a(this).parent().index();
                    a(this).closest(".tab-wrapper").find(".activeTab").removeClass("activeTab");
                    a(this).addClass("activeTab");
                    if (b.fx == "slide") {
                        if (c.eq(f).is(":hidden")) {
                            c.slideUp(b.hideSpeed, b.hideEasing, function() {
                                b.hide.call(e)
                            }).eq(f).slideDown(b.showSpeed, b.showEasing, function() {
                                b.show.call(e)
                            })
                        }
                    } else {
                        if (b.fx == "fade") {
                            if (c.eq(f).is(":hidden")) {
                                c.hide().eq(f).fadeIn(b.showSpeed, b.showEasing, function() {
                                    b.show.call(e)
                                })
                            }
                        } else {
                            if (b.fx == "fancyslide") {
                                if (c.eq(f).is(":hidden")) {
                                    c.slideUp(b.hideSpeed, b.hideEasing, function() {
                                        b.hide.call(e)
                                    }).eq(f).delay(b.hideSpeed).slideDown(b.showSpeed, b.showEasing, function() {
                                        b.show.call(e)
                                    })
                                }
                            } else {
                                if (c.eq(f).is(":hidden")) {
                                    c.hide().eq(f).show()
                                }
                            }
                        }
                    }
                    b.change.call(e);
                    return false
                }).eq(d).addClass("activeTab")
            })
        }
    })(jQuery);
    (function() {
        var e = document.getElementsByTagName("pre"),
            t = e.length;
        for (var n = 0; n < t; n++) {
            e[n].innerHTML = '<span class="line-number"></span>' + e[n].innerHTML + '<span class="cl"></span>';
            var r = e[n].innerHTML.split(/\n/).length;
            for (var i = 0; i < r; i++) {
                var s = e[n].getElementsByTagName("span")[0];
                s.innerHTML += "<span>" + (i + 1) + "</span>"
            }
        }
    })();
    $(document).ready(function() {
        $("#contact").appendTo(".contact-form");
        $(".contact-form #contact").css("display", "block");
        $(".post-tabs").simpleTab({
            active: 1,
            fx: "fade",
            showSpeed: 400,
            hideSpeed: 400
        })
    });
    
   //views Counter
     $.each($("a[name]"), function (i, e) {
        var elem = $(e).parent().find("#postviews");
        var blogStats = new Firebase("https://storgo-doc.firebaseio.com/pages/id/" + $(e).attr("name"));
        blogStats.once("value", function(snapshot) {
            var data = snapshot.val();
            var isnew = false;
            if (data == null) {
                data = {};
                data.value = 0;
                data.url = window.location.href;
                data.id = $(e).attr("name");
                isnew = true;
            }
            elem.text(data.value);$(".view-" + data.id).text(data.value);
            data.value++;
            if (window.location.pathname != "/") {
                if (isnew)
                    blogStats.set(data);
                else
                    blogStats.child("value").set(data.value);
            }
        });
    });
    
//Rippler    
(function($ , window , undefined){
    "use strict"

    $.fn.rippler = function(arg = {}){

        var rippler = null;

        // Initialize the plugin if not allready initiallized
        this.each(function(){
           destroyRipper(this);

            rippler = new $.Rippler(this , arg);
            $.data(this , rippler );
        })


        // If Selector is provided in the Argss Object;
         if(this.length == 0 && arg instanceof Object && arg.selector != undefined  )
         {
             $(arg.selector).each(function(){
                 destroyRipper(this)
             });
             return new $.Rippler(this , arg);
         }


        // if some method is provided call the method
        if(typeof arg == 'string')
        {
            this.each(function(){
                if($.data(this)[arg]){
                    if(arg == 'destroy' )
                        destroyRipper(this)
                    else
                        $.data(this)[arg]();
                }
                else
                    throw new Error('method ' + arg +' not defined on rippler ');
            })
        }


        return this;
    }


    // Constructor
    $.Rippler = function(elm , options){
        this.elm = $(elm) ;
        this.opts = options;

        this.init();
    }


    // Defaults
    $.Rippler.defaults = {
        selector :  ''  ,
        color    :  ''  ,
        duration : 1000 ,
        classes  : { ripplerContainer : "rippler-container" , ripple : "ripple"  }
    }



    // Plugin Methods

    $.extend($.Rippler.prototype , {
        rippler : '1.0',

        init : function()
        {

            var opt = $.extend({}  , $.Rippler.defaults ,  this.opts);
            var self = this;
            if(this.elm.length )
            {
                this.elm.off("click.rippler")
                this.elm.on("click.rippler", this.makeRipple.bind(this));
            }

            if(opt.selector)
            {
                $(document.body).undelegate( opt.selector , "click.rippler" );
                $(document.body).delegate( opt.selector , "click.rippler" , function(e){
                    self.elm = $(this);
                    self.makeRipple.call(self , e);
                });
            }

            return this;
        },

        makeRipple: function(e)
        {
            var opt = $.extend({} , $.Rippler.defaults , this.opts);
            var $this = this.elm;

            var color = '';
            var classes = opt.classes;

            if(opt.color)
                color = opt.color
            else
                color = getColor($this)

            if( " absolute relative fixed".indexOf(  $this.css("position") )  == -1 )
                $this.css({"position" : "relative"  , "overflow" : "hidden"});

            if($this.children("."+classes.ripplerContainer).length == 0 )
                $this.append("<div class=' "+classes.ripplerContainer+" '></div>");

            var size =  $this.outerWidth() * 1.4  ,

                $ripplerContainer = $this.children("."+classes.ripplerContainer) ,

                $ripple = $("<div class=' " + classes.ripple + " '></div>").css({
                        "top" : ( (e.clientY-$this.offset().top)+$(window).scrollTop()) +"px" ,
                        "left": (e.clientX-$this.offset().left) + "px" ,
                        "box-shadow" : "0px 0px 0px 0px "+ color,
                        "background-color" : color,
                        'transition' : ' all ' + opt.duration/2.3 + 'ms ease-in , opacity ' + opt.duration/3.1 + 'ms ' + opt.duration/1.4 + 'ms ease-in'
                    });

            $ripplerContainer.show().append($ripple);

            setTimeout(function(){
                $ripple.css({
                    "box-shadow" : "0px 0px 0px "+ size+"px "+ color,
                    opacity  : 0
                });
                setTimeout(function(){
                    $ripple.remove();
                    if($ripplerContainer.find('.'+classes.ripple).length == 0 )
                        $ripplerContainer.hide();
                } , opt.duration);
            } , 20);

            return this;
        },


        destroy: function()
        {
            if(this.elm.length )
                this.elm.off("click.rippler");

            if(this.opts.selector)
                $(document.body).undelegate( this.opts.selector , "click.rippler" );
            return this;
        }

    });



    // Utility Methods
    function getColor($elm)
    {
        if($elm.css("color")){
            var temp = $elm.css("color");
                temp = temp.substr(4);
                temp = temp.substr(0 , temp.length-1);
                temp = temp.split(",");
            return  "rgba("+temp[0]+" ,"+temp[1]+" ,"+temp[2]+" , 0.15 )";
        }

        return "rgba(235,235,235 , .15 )";
    }

    function destroyRipper(elm)
    {
        rippler = $.data(elm);
        if(rippler.init)
        {
            rippler.destroy();
            $.removeData(elm);
        }
    }


}(jQuery , window));
 
