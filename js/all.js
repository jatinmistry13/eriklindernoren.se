function showWork(){$("#contact").hide();var t="."+$(this).children(".workButton").children("a").data("target");$("#popDownWrapper").css({height:$(".ericsson").outerHeight()+180+"px"}),isShowing&&t!=lastUsed?($(lastUsed).css({opacity:"0","z-index":"-1"}),$(lastUsed).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideOutRight")}).addClass("slideOutRight"),$(t).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideInFromLeft")}).addClass("slideInFromLeft"),$(t).css({opacity:"1","z-index":"3"})):isShowing?($(lastUsed).css({opacity:"0","z-index":"-1"}),$(lastUsed).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideUp")}).addClass("slideUp"),$("#popDownWrapper").delay(100).queue(function(t){$(this).css("height","0"),$(".experience").css({"box-shadow":"none"}),$(".bigButton > div").css({"box-shadow":"0px 0px 0px 0px rgb(0,0,0)"}),t()}),isShowing=!1):($(t).css({opacity:"1","z-index":"3"}),$(t).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideDown")}).addClass("slideDown"),isShowing=!0,$(".experience").css({"box-shadow":"0px 6px 10px -2px rgba(0,0,0,0.4)"}),$(".bigButton > div").css({"box-shadow":"0px 6px 10px -2px rgba(0,0,0,0.4)"})),lastUsed=t}function scrollAnimations(){var t=$(window).scrollTop();whatBackground(t);$(".projects").offset().top+$(window).height();if(!penAnimationDone&&isFullyScrolledIntoView($(".timelineDot")[3])&&(penAnimationDone=!0),isFullyScrolledIntoView($(".timelineDotUpper")[3]))for(var o=0;6>o;o++)$($(".timelineDotUpper")[o]).addClass("growAndShrink"+(o+1));isPartlyScrolledIntoView("#timelineDotHeader")&&$("#timelineDotHeader").addClass("rotate360").addClass("appearFromTopCentered"),isFullyScrolledIntoView(".slideDir")&&$("#projImages").addClass("appearFromBottom");for(var n=$(".timelineDot"),o=0;o<n.length;o++){var e=n[o];isFullyScrolledIntoView($(".edu")[o])&&transformTimelineDots(e)}for(var i=$(".bigButton"),o=0;o<i.length;o++){var e=i[o];isFullyScrolledIntoView(e)&&$(e).addClass("slideDownBig"+o)}}function transformTimelineDots(t){setTimeout(function(){$(t).css({"border-radius":"50%"})},400),$(t).css({transform:"translateX(-50%) translateY(-50%) rotateZ(0deg)",width:"13px",height:"13px"})}function whatBackground(t){var o=$(window).scrollTop()+$(window).height(),n=$(".projects").offset().top+$(".projects").height()-100;o>n?($("#contact").show(),$(".schoolImg").hide()):($("#contact").hide(),isPartlyScrolledIntoView(".education")?$(".schoolImg").show():$(".schoolImg").hide())}function isPartlyScrolledIntoView(t){var o=$(t),n=$(window),e=n.scrollTop(),i=e+n.height(),s=o.offset().top,r=s+o.height(),a=r>i&&i>s,c=r>e&&e>s;return a||c||isFullyScrolledIntoView(t)}function isFullyScrolledIntoView(t){var o=$(t),n=$(window),e=n.scrollTop(),i=e+n.height(),s=o.offset().top,r=s+o.height();return i>=r&&s>=e}$(document).ready(function(){function t(){var t=$(window).scrollTop();$("#mountainHolder2").css("transform","translateY("+Math.round(.25*t)+"px)"),$("#mountainHolder").css("transform","translateY("+Math.round(.5*t)+"px)")}function o(){var t=[[20,60],[45,55],[20,35],[25,85],[15,75],[45,15],[25,10],[15,25],[10,50],[50,25],[60,40],[60,85],[50,70]];for(i=0;i<13;i++){var o=$(".s"+(i+1)),n=t[i][0],e=t[i][1];$(o).css({top:n+"%",left:e+"%"})}c=!0}function n(t){var o=($(window).scrollTop(),t),n=($(".about").offset().top,$(".education").offset().top),e=$("#eduTimelineWrapper").offset().top-350,i=($(".experience").offset().top,$(".projects").offset().top);return n>o?"rgb(200,200,200)":e>o?"#E4F1FE":i>o?"rgb(200,200,200)":"rgb(250,250,250)"}function e(){var t=$(window).scrollTop();if(t>550&&window.innerWidth>1300){var o=$("#scrollNavigationButtonWrapper a");setTimeout(function(){$(o[0]).css({transform:"translateX(0)"})},0),setTimeout(function(){$(o[1]).css({transform:"translateX(0)"})},100),setTimeout(function(){$(o[2]).css({transform:"translateX(0)"})},200),setTimeout(function(){$(o[3]).css({transform:"translateX(0)"})},300),setTimeout(function(){$(o[4]).css({transform:"translateX(0)"})},400)}else{var o=$("#scrollNavigationButtonWrapper a");setTimeout(function(){$(o[0]).css({transform:"translateX(200px)"})},0),setTimeout(function(){$(o[1]).css({transform:"translateX(200px)"})},100),setTimeout(function(){$(o[2]).css({transform:"translateX(200px)"})},200),setTimeout(function(){$(o[3]).css({transform:"translateX(200px)"})},300),setTimeout(function(){$(o[4]).css({transform:"translateX(200px)"})},400)}for(var e=0;e<$(".scrollNavHeader").length;e++){var i=$(".scrollNavHeader")[e],s=$(i).offset().top,r=n(s);$(i).css({color:r})}var a=$(".scrollToTop").offset().top,r=n(a);$(".scrollToTop").css({"border-color":r}),$(".scrollToTop .scrollIcon i").css({color:r}),$(".scrollToTop .scrollText h1").css({color:r}),t>$(document).height()-1e3?($("#scrollNavigationBar").css({top:"auto",bottom:"120px",height:"230px",transform:"translateY(0)"}),$("#scrollNavigationButtonWrapper a").css({height:"20px","padding-right":"20px"})):($("#scrollNavigationBar").css({top:"47%",bottom:"auto",height:"400px",transform:"translateY(-50%)"}),$("#scrollNavigationButtonWrapper a").css({height:"40px","padding-right":"25px"})),$(".scrollToTop").css(t>300&&window.innerWidth>668?{transform:"translateY(-100px)"}:{transform:"translateY(100px)"})}$(window).bind("scroll",function(o){t()});var s=!1;$("#hamburger").click(function(){if(s){var t=$("#navigationButtonWrapper a");setTimeout(function(){$(t[0]).css({transform:"translateY(-100px)"})},0),setTimeout(function(){$(t[1]).css({transform:"translateY(-100px)"})},100),setTimeout(function(){$(t[2]).css({transform:"translateY(-100px)"})},200),setTimeout(function(){$(t[3]).css({transform:"translateY(-100px)"})},300),setTimeout(function(){$(t[4]).css({transform:"translateY(-100px)"})},400),s=!1,$("#menuLine1").css({width:"16px",height:"16px","border-radius":"50%",border:"2px solid rgb(250,250,250)",top:"30%",left:"0",right:"auto",transform:"translateY(-50%) rotateZ(0)"}),$("#menuLine2").hide(),$("#menuLine3").hide(),$("#menuLine4").css({width:"12px",bottom:"0",right:"5px",top:"auto",transform:"translateY(-50%) rotateZ(45deg)"})}else{var t=$("#navigationButtonWrapper a");setTimeout(function(){$(t[0]).css({transform:"translateY(0)"})},0),setTimeout(function(){$(t[1]).css({transform:"translateY(0)"})},100),setTimeout(function(){$(t[2]).css({transform:"translateY(0)"})},200),setTimeout(function(){$(t[3]).css({transform:"translateY(0)"})},300),setTimeout(function(){$(t[4]).css({transform:"translateY(0)"})},400),s=!0,$("#menuLine1").css({width:"100%",height:"auto","border-radius":"0",border:"none","border-bottom":"2px solid rgb(250,250,250)",top:"50%",left:"auto",right:"0",transform:"translateY(-50%) rotateZ(45deg)"}),$("#menuLine4").css({width:"100%",bottom:"auto",top:"50%",right:"0",transform:"translateY(-50%) rotateZ(-45deg)"}),$("#menuLine2").hide(),$("#menuLine3").hide()}}),$("#hamburger").hover(function(){s||($("#menuLine1").css({width:"16px",height:"16px","border-radius":"50%",border:"2px solid rgb(250,250,250)",top:"30%",left:"0",right:"auto"}),$("#menuLine2").hide(),$("#menuLine3").hide(),$("#menuLine4").css({width:"12px",bottom:"0",right:"5px",top:"auto",transform:"translateY(-50%) rotateZ(45deg)"}))},function(){s||($("#menuLine1").css({width:"100%",height:"auto","border-radius":"0",border:"none","border-bottom":"2px solid rgb(250,250,250)",top:"0",left:"auto",right:"0",transform:"translateY(-50%)"}),$("#menuLine2").show(),$("#menuLine3").show(),$("#menuLine4").css({width:"100%",bottom:"auto",top:"100%",right:"0",transform:"translateY(-50%) rotateZ(0)"}))});var r=function(){$("#overResume .bulb").css({"border-color":"#F39C12","background-color":"#FDE3A7","box-shadow":"0px 0px 10px 0px #F39C12"}),$("#overResume .bulbShine").css({"border-color":"white"}),$("#pSquare1").css({"border-color":"#F64747","background-color":"rgba(246,71,71,0.2)"}),$("#pSquare2").css({"border-color":"#03A678","background-color":"rgba(3,166,120,0.2)"}),$("#pCircle1").css({"border-color":"#F39C12","background-color":"rgba(243,156,18,0.2)"}),$("#pCircle2").css({"border-color":"#6BB9F0","background-color":"rgba(107,185,240,0.2)"}),setTimeout(function(){$("#underResume .bulb").css({"border-color":"#F39C12","background-color":"#FDE3A7","box-shadow":"0px 0px 10px 0px #F39C12"}),$("#underResume .bulbShine").css({"border-color":"white"}),$("#screen").css({"background-color":"rgb(250,250,250)"}),$(".computerLine").css({"border-color":"rgb(160,160,160)"}),$(".hiddenCompLine").css({visibility:"visible"})},100),setTimeout(function(){$(".coffeeSteam").css({transform:"translateY(-50%) translateX(-50%)",opacity:"1"}),$("#b9").css({transform:"translateX(-50%) rotateZ(10deg) translateY(-2px)",right:"56px",bottom:"40%"})},400)},a=function(){$("#overResume .bulb").css({"border-color":"#2C3E50","background-color":"rgb(250,250,250)","box-shadow":"none"}),$("#overResume .bulbShine").css({"border-color":"transparent"}),$("#screen").css({"background-color":"rgb(200,200,200)"}),$(".computerLine").css({"border-color":"white"}),$(".hiddenCompLine").css({visibility:"hidden"}),$("#underResume .bulb").css({"border-color":"#2C3E50","background-color":"rgb(250,250,250)","box-shadow":"none"}),$("#underResume .bulbShine").css({"border-color":"transparent"}),$("#selfPortrait div").css({"border-color":"#2C3E50","background-color":"transparent"}),$(".coffeeSteam").css({transform:"translateY(23px) translateX(-50%)",opacity:"0"}),$("#b9").css({transform:"translateX(-50%) rotateZ(-90deg)",right:"76px",bottom:"15px"})};$("#resume").hover(r,a),$(document).on("click",".navbuttons",function(t){t.preventDefault();var o="#"+this.getAttribute("data-target");"#aboutDown"==o&&(o="#about"),"#contact"==o?($("html, body").animate({scrollTop:$(document).height()},2e3,"easeInOutQuart"),setTimeout(function(){$(".schoolImg").hide()},2e3)):$("html, body").animate({scrollTop:$(o).offset().top},1200,"easeInOutQuart")});var c=!1;c||o(),$("#navigationButtonWrapper .navbuttons").hover(function(){var t=this.getAttribute("data-target"),o=0;if("about"==t?o=1:"education"==t?o=2:"experience"==t?o=3:"projects"==t?o=4:"contact"==t&&(o=5),0!=o)for(var n=1;6>n;n++)o!=n&&$("#span"+n).css({color:"transparent"})},function(){$("#message p span").css({color:"white"})}),$("#scrollNavigationButtonWrapper .navbuttons").hover(function(){var t=$(window).scrollTop();t>550&&window.innerWidth>1300&&$(this).find("p").css({color:"#F64747"})},function(){var t=$(this).offset().top,o=n(t);$(this).find("p").css({color:o})}),$(".imageDiv").hover(function(){$(this).children(".imgText").delay(150),$(this).children(".imgText").children("p").delay(150),$(this).children(".imgText").animate({height:"20%"},200,"linear"),$(this).children(".imgText").children("p").animate({opacity:"1"},100,"linear")},function(){$(this).children(".imgText").animate({height:"0"},200,"linear"),$(this).children(".imgText").children("p").animate({opacity:"0"},100,"linear")}),$(window).scroll(scrollAnimations),scrollAnimations();var d=!0;$(".showNav").click(function(){d?($(".lowerMNavList > a").fadeIn(300),$(".lowerMNavList").slideDown(400,"linear"),d=!1):($(".lowerMNavList").slideUp(400,"linear"),$(".lowerMNavList > a").fadeOut(300),d=!0)}),$(".bigButton").on("click",showWork);var l=4;$("#div4").css({opacity:"1","z-index":"3"}),$(".slideDir").on("click",function(){var t=$(this).attr("id");if("slideRight"==t){var o=l;l=parseInt(l)-1,0==l&&(l=5);{var n=$("#div"+o),e=$("#div"+l);$(".projects")}n.css({opacity:"0","z-index":"-1"}),n.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideOutBottom")}).addClass("slideOutBottom"),setTimeout(function(){e.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideInFromLeft")}).addClass("slideInFromLeft"),e.css({opacity:"1","z-index":"3"})},200)}else{var o=l;l=parseInt(l)+1,6==l&&(l=1);{var n=$("#div"+o),e=$("#div"+l);$(".projects")}n.css({opacity:"0","z-index":"-1"}),n.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideOutLeft")}).addClass("slideOutLeft"),setTimeout(function(){e.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideInFromBottom")}).addClass("slideInFromBottom"),e.css({opacity:"1","z-index":"3"})},200)}}),$("#projImages a").hover(function(){$(this).css({transform:"translateY(-20px)"});for(var t=parseInt($(this).css("z-index")),o=$("#projImages a").not(this),n=0;n<o.length;n++){var e=o[n];parseInt($(e).css("z-index"))>t&&$(e).css({opacity:"0.1"})}},function(){$("#projImages a").css({transform:"translateY(0)",opacity:"1"})}),$("#projImages a").on("click",function(){var t=this.getAttribute("data-target");if(l!=t){var o=l;l=t,$lastUsed=$("#div"+o),$this=$("#div"+l),$lastUsed.css({opacity:"0","z-index":"-1"}),$lastUsed.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideOutBottom")}).addClass("slideOutBottom"),setTimeout(function(){$this.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideInFromLeft")}).addClass("slideInFromLeft"),$this.css({opacity:"1","z-index":"3"})},200)}});var u,m=function(){window.innerWidth>668&&668>=u&&whatBackground(),window.innerWidth<=925&&u>925?($("#navbar").fadeOut(600),$("#mobileNav").fadeIn(600)):window.innerWidth>925&&925>=u&&($("#mobileNav").fadeOut(600),$("#navbar").fadeIn(600)),u=window.innerWidth};m(),$(window).resize(m);var p=function(){$.browser.mozilla&&($(".eduPeriscope > div").removeClass("schoolImg"),$(".eduPeriscope").css({"background-image":'url("../images/zurich1.jpeg")',"background-position":"center center","background-attachment":"fixed","background-size":"cover"}))};p(),$(document).scroll(e)});var lastUsed,isShowing=!1,projImagesLoaded=!1,penAnimationDone=!1;