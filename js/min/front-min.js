$(document).ready(function(){$(function($){$(".knob").knob({})}),$(function($){var e=!1;$("#play").click(function(){e===!0?($("#music1").trigger("pause"),$("#play").addClass("footer--controller--icons3"),$("#play").removeClass("footer--controller--icons6"),e=!1):($("#music1").trigger("play"),$("#play").addClass("footer--controller--icons6"),$("#play").removeClass("footer--controller--icons3"),e=!0)}),$("#next").click(function(){$("#music1").prop("currentTime",$("#music1").prop("currentTime")+10)}),$("#previous").click(function(){$("#music1").prop("currentTime",$("#music1").prop("currentTime")-10)}),$("#replay").click(function(){$("#music1").prop("currentTime",0)});var r=document.getElementById("music1");r.addEventListener("timeupdate",function(){var e=r.currentTime,t=r.duration,o=Math.floor(e%3600/60),n=Math.floor(e%60),c=Math.floor(t%3600/60),i=Math.floor(t%60);10>n&&(n="0"+n),10>i&&(i="0"+i),$(".footer--player--progress").animate({width:(e+.25)/t*100+"%"},250,"linear"),$(".footer--current--time").text(o+":"+n),$(".footer--current--duration").text(c+":"+i)})});var e=!0;$(".leftnav--btn").click(function(){e===!0?($(".leftnav").animate({left:"-210px"}),e=!1):($(".leftnav").animate({left:"0px"}),e=!0)})});