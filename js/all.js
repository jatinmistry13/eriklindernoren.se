function showWork(){$("#contact").hide();var o="."+$(this).children(".workButton").children("a").data("target");$("#popDownWrapper").css({height:$(".ericsson").outerHeight()+180+"px"}),isShowing&&o!=lastUsed?($(lastUsed).css({opacity:"0","z-index":"-1"}),$(lastUsed).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideOutRight")}).addClass("slideOutRight"),$(o).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideInFromLeft")}).addClass("slideInFromLeft"),$(o).css({opacity:"1","z-index":"3"})):isShowing?($(lastUsed).css({opacity:"0","z-index":"-1"}),$(lastUsed).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideUp")}).addClass("slideUp"),$("#popDownWrapper").delay(100).queue(function(o){$(this).css("height","0"),$(".experience").css({"box-shadow":"none"}),$(".bigButton > div").css({"box-shadow":"0px 0px 0px 0px rgb(0,0,0)"}),o()}),isShowing=!1):($(o).css({opacity:"1","z-index":"3"}),$(o).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideDown")}).addClass("slideDown"),isShowing=!0,$(".experience").css({"box-shadow":"0px 6px 10px -2px rgba(0,0,0,0.4)"}),$(".bigButton > div").css({"box-shadow":"0px 6px 10px -2px rgba(0,0,0,0.4)"})),lastUsed=o}function scrollAnimations(){var o=$(window).scrollTop();whatBackground(o);for(var i=($(".projects").offset().top+$(window).height(),$(".timelineDot")),n=0;n<i.length;n++){var t=i[n];isFullyScrolledIntoView(t)&&$(t).addClass("appearFromTopCentered")}if(isFullyScrolledIntoView($(".timelineDotUpper")[0]))for(var n=0;6>n;n++)$($(".timelineDotUpper")[n]).addClass("growAndShrink"+(n+1));for(var e=$("#navigationButtonWrapper a"),n=0;n<e.length;n++){var t=e[n];isPartlyScrolledIntoView(t)&&$(t).addClass("appearFromTop")}isFullyScrolledIntoView("#aboutMe")&&$("#aboutMe").addClass("appearFromLeft"),isPartlyScrolledIntoView("#timelineDotHeader")&&$("#timelineDotHeader").addClass("rotate360").addClass("appearFromTopCentered"),isFullyScrolledIntoView(".slideDir")&&$("#projImages").addClass("appearFromBottom");for(var a=$(".bigButton"),n=0;n<a.length;n++){var t=a[n];isFullyScrolledIntoView(t)&&$(t).addClass("slideDownBig"+n)}}function whatBackground(o){var i=$(window).scrollTop()+$(window).height(),n=$(".projects").offset().top+$(".projects").height()-100;i>n?$("#contact").show():($("#contact").hide(),isPartlyScrolledIntoView(".education")?$(".schoolImg").show():$(".schoolImg").hide())}function isPartlyScrolledIntoView(o){var i=$(o),n=$(window),t=n.scrollTop(),e=t+n.height(),a=i.offset().top,s=a+i.height(),r=s>e&&e>a,d=s>t&&t>a;return r||d||isFullyScrolledIntoView(o)}function isFullyScrolledIntoView(o){var i=$(o),n=$(window),t=n.scrollTop(),e=t+n.height(),a=i.offset().top,s=a+i.height();return e>=s&&a>=t}$(document).ready(function(){function o(){var o=$(window).scrollTop();$("#mountainHolder2").css("transform","translateY("+Math.round(.25*o)+"px)"),$("#mountainHolder").css("transform","translateY("+Math.round(.5*o)+"px)")}function n(){var o=[[20,60],[45,55],[20,35],[25,85],[15,75],[45,15],[25,10],[15,25],[10,50],[50,25],[60,40],[60,85],[50,70]];for(i=0;i<13;i++){var n=$(".s"+(i+1)),t=o[i][0],e=o[i][1];$(n).css({top:t+"%",left:e+"%"})}r=!0}function t(){var o=($(".slideDiv"),$("#div4").height()),i=$("#projectHeader").position().top+$("#projectHeader").height();return o+i+170}function e(){var o=$(window).scrollTop();$(".scrollToTop").css(o>200&&window.innerWidth>668?{transform:"translateY(-100px)"}:{transform:"translateY(100px)"})}$(window).bind("scroll",function(i){o()}),$("#aboutRight").css({height:$("#aboutText").height()+"px"}),$(".projects").css({height:t()+"px"});var a=function(){$("#overMail .bulb").css({"border-color":"#F39C12","background-color":"#FDE3A7","box-shadow":"0px 0px 10px 0px #F39C12"}),$("#mail").css({color:"#F64747","text-shadow":"none"}),$("#envelope").css({"background-color":"#89C4F4","border-color":"#2574A9"}),$("#envelope i").css({color:"#2574A9"}),$("#envelope i").css({color:"rgb(250,250,250)","text-shadow":"-1px 0 #2574A9, 0 1px #2574A9, 1px 0 #2574A9, 0 -1px #2574A9"}),$("#overMail .bulbShine").css({"border-color":"white"}),$("#overMail .bulbHolder").css({"background-color":"rgb(220,220,220)"})},s=function(){$("#overMail .bulb").css({"border-color":"rgb(160,160,160)","background-color":"rgb(250,250,250)","box-shadow":"none"}),$("#mail").css({color:"rgb(250,250,250)","text-shadow":"-1px 0 rgb(160,160,160), 0 1px rgb(160,160,160), 1px 0 rgb(160,160,160), 0 -1px rgb(160,160,160)"}),$("#envelope").css({"background-color":"rgb(250,250,250)","border-color":"rgb(160,160,160)"}),$("#envelope i").css({color:"rgb(160,160,160)","text-shadow":"none"}),$("#overMail .bulbShine").css({"border-color":"transparent"}),$("#overMail .bulbHolder").css({"background-color":"rgb(200,200,200)"})};$("#mail").hover(a,s),$("#envelope").hover(a,s),$(".socMedia").hover(function(){$("#underMail .bulb").css({"border-color":"#F39C12","background-color":"#FDE3A7","box-shadow":"0px 0px 10px 0px #F39C12"}),$("#underMail .bulbShine").css({"border-color":"white"}),$("#underMail .bulbHolder").css({"background-color":"rgb(220,220,220)"})},function(){$("#underMail .bulb").css({"border-color":"rgb(160,160,160)","background-color":"rgb(250,250,250)","box-shadow":"none"}),$("#underMail .bulbShine").css({"border-color":"transparent"}),$("#underMail .bulbHolder").css({"background-color":"rgb(200,200,200)"})}),$(document).on("click",".navbuttons",function(o){o.preventDefault();var i="#"+this.getAttribute("data-target");"#aboutDown"==i&&(i="#about"),"#contact"==i?$("html, body").animate({scrollTop:$(document).height()},700,"easeOutQuad"):$("html, body").animate({scrollTop:$(i).offset().top},700,"easeOutQuad")});var r=!1;r||n(),$(".navbuttons").hover(function(){var o=this.getAttribute("data-target"),i=0;if("about"==o?i=1:"education"==o?i=2:"experience"==o?i=3:"projects"==o?i=4:"contact"==o&&(i=5),0!=i)for(var n=1;6>n;n++)i!=n&&$("#span"+n).css({color:"transparent"})},function(){$("#message p span").css({color:"white"})}),$(".imageDiv").hover(function(){$(this).children(".imgText").delay(150),$(this).children(".imgText").children("p").delay(150),$(this).children(".imgText").animate({height:"20%"},200,"linear"),$(this).children(".imgText").children("p").animate({opacity:"1"},100,"linear")},function(){$(this).children(".imgText").animate({height:"0"},200,"linear"),$(this).children(".imgText").children("p").animate({opacity:"0"},100,"linear")}),$(window).scroll(scrollAnimations),scrollAnimations();var d=!0;$(".showNav").click(function(){d?($(".lowerMNavList > a").fadeIn(300),$(".lowerMNavList").slideDown(400,"linear"),d=!1):($(".lowerMNavList").slideUp(400,"linear"),$(".lowerMNavList > a").fadeOut(300),d=!0)}),$(".bigButton").on("click",showWork);var l=4;$("#div4").css({opacity:"1","z-index":"3"}),$(".slideDir").on("click",function(){var o=$(this).attr("id");if("slideRight"==o){var i=l;l=parseInt(l)-1,0==l&&(l=5);{var n=$("#div"+i),t=$("#div"+l);$(".projects")}n.css({opacity:"0","z-index":"-1"}),n.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideOutBottom")}).addClass("slideOutBottom"),setTimeout(function(){t.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideInFromLeft")}).addClass("slideInFromLeft"),t.css({opacity:"1","z-index":"3"})},200)}else{var i=l;l=parseInt(l)+1,6==l&&(l=1);{var n=$("#div"+i),t=$("#div"+l);$(".projects")}n.css({opacity:"0","z-index":"-1"}),n.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideOutLeft")}).addClass("slideOutLeft"),setTimeout(function(){t.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideInFromBottom")}).addClass("slideInFromBottom"),t.css({opacity:"1","z-index":"3"})},200)}}),$("#projImages a").hover(function(){$(this).css({transform:"translateY(-20px)"});for(var o=$("#projImages a").not(this),i=0;i<o.length;i++){var n=o[i];parseInt($(n).css("z-index"))>parseInt($(this).css("z-index"))&&$(n).css({opacity:"0.1"})}},function(){$("#projImages a").css({transform:"translateY(0)",opacity:"1"})}),$("#projImages a").on("click",function(){var o=this.getAttribute("data-target");if(l!=o){var i=l;l=o,$lastUsed=$("#div"+i),$this=$("#div"+l),$lastUsed.css({opacity:"0","z-index":"-1"}),$lastUsed.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideOutBottom")}).addClass("slideOutBottom"),setTimeout(function(){$this.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideInFromLeft")}).addClass("slideInFromLeft"),$this.css({opacity:"1","z-index":"3"})},200)}});var c,p=function(){$(".projects").css({height:t()+"px"}),window.innerWidth>668?(668>=c&&whatBackground(),$(".projects").css({"margin-bottom":"400px"})):$(".projects").css({"margin-bottom":"0px"}),window.innerWidth<=925&&c>925?($("#navbar").fadeOut(600),$("#mobileNav").fadeIn(600)):window.innerWidth>925&&925>=c&&($("#mobileNav").fadeOut(600),$("#navbar").fadeIn(600)),c=window.innerWidth};p(),$(window).resize(p);var h=function(){$.browser.mozilla&&($(".eduPeriscope > div").removeClass("schoolImg"),$(".eduPeriscope").css({"background-image":'url("../images/zurich1.jpeg")',"background-position":"center center","background-attachment":"fixed","background-size":"cover"}))};h(),$(document).scroll(e)});var lastUsed,isShowing=!1,projImagesLoaded=!1;