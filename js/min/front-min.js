$(document).ready(function(){$(function($){var o=!1;$("#play").click(function(){o===!0?($("#music1").trigger("pause"),$("#play").addClass("footer--controller--icons3"),$("#play").removeClass("footer--controller--icons6"),o=!1):($("#music1").trigger("play"),$("#play").addClass("footer--controller--icons6"),$("#play").removeClass("footer--controller--icons3"),o=!0)}),$("#next").click(function(){$("#music1").prop("currentTime",$("#music1").prop("currentTime")+10)}),$("#previous").click(function(){$("#music1").prop("currentTime",$("#music1").prop("currentTime")-10)}),$("#replay").click(function(){$("#music1").prop("currentTime",0)});var r=document.getElementById("music1");r.addEventListener("timeupdate",function(){var o=r.currentTime,e=r.duration,c=Math.floor(o%3600/60),t=Math.floor(o%60),a=Math.floor(e%3600/60),n=Math.floor(e%60);10>t&&(t="0"+t),10>n&&(n="0"+n),$(".footer--player--progress").animate({width:(o+.25)/e*100+"%"},250,"linear"),$(".footer--current--time").text(c+":"+t),$(".footer--current--duration").text(a+":"+n)})});var o=!0;$(".leftnav--btn").click(function(){o===!0?($(".leftnav").animate({left:"-210px"}),o=!1):($(".leftnav").animate({left:"0px"}),o=!0)});var r=!1;$(".leftnav--night").click(function(){r===!1?($(".leftnav").css({backgroundColor:"#ececec"}),$(".footer").css({backgroundColor:"#ececec"}),$(".leftnav--btn").css({backgroundColor:"#d1cdcd"}),$("#current").css({backgroundColor:"#d1cdcd"}),$("a").css({color:"#23232c"}),$("span").css({color:"#23232c"}),$(".footer--player--progress").css({backgroundColor:"orange"}),$(".footer--player").css({backgroundColor:"#23232c"}),$(".leftnav--profil--abonne").css({backgroundColor:"orange"}),$(".leftnav--night").addClass("leftnav--night--active"),$(".leftnav--night--active").removeClass("leftnav--night"),$(".leftnav--profil--tag").addClass("leftnav--profil--tag--active"),$(".leftnav--profil--tag--active").removeClass("leftnav--profil--tag"),r=!0):($(".leftnav").css({backgroundColor:"#23232c"}),$(".footer").css({backgroundColor:"#23232c"}),$(".leftnav--btn").css({backgroundColor:"#1d1d20"}),$("#current").css({backgroundColor:"#23232c"}),$("a").css({color:"#ececec"}),$("span").css({color:"#ececec"}),$(".footer--player--progress").css({backgroundColor:"rgb(24, 104, 205)"}),$(".footer--player").css({backgroundColor:"lightgray"}),$(".leftnav--profil--abonne").css({backgroundColor:"rgb(24, 104, 205)"}),$(".leftnav--profil--tag--active").addClass("leftnav--profil--tag"),$(".leftnav--profil--tag").removeClass("leftnav--profil--tag--active"),r=!1)}),$("#music1").prop("volume",.8),$("#draggable").draggable({axis:"x",containment:"parent",drag:function(o,r){var e=$(this).position().left;$(".footer--controller--icons5--volume--progress").css({width:e+5+"px"}),$("#music1").prop("volume",e/100)}});var e=!1;$("#volume").click(function(){e===!0?($(".footer--controller--icons5--volume").fadeOut(100),e=!1):($(".footer--controller--icons5--volume").fadeIn(100),e=!0)});var c=!1;$(".footer--search").click(function(){c===!0?($(".search").animate({right:"-270px"}),$(".search").focus(),c=!1):($(".search").animate({right:"0px"}),c=!0)})});