jQuery(document).ready(function($){function i(){var o=t.$Elmt.parentNode.clientWidth;o?(o=Math.min(o,1200),t.$ScaleWidth(o)):window.setTimeout(i,30)}var o={$AutoPlay:!0,$AutoPlaySteps:4,$SlideDuration:200,$SlideWidth:200,$SlideSpacing:3,$Cols:4,$ArrowNavigatorOptions:{$Class:$JssorArrowNavigator$,$Steps:4},$BulletNavigatorOptions:{$Class:$JssorBulletNavigator$,$SpacingX:1,$SpacingY:1}},t=new $JssorSlider$("jssor_1",o);i(),$(window).bind("load",i),$(window).bind("resize",i),$(window).bind("orientationchange",i)}),jQuery(document).ready(function($){function i(){var o=t.$Elmt.parentNode.clientWidth;o?(o=Math.min(o,1200),t.$ScaleWidth(o)):window.setTimeout(i,30)}var o={$AutoPlay:!0,$AutoPlaySteps:4,$SlideDuration:200,$SlideWidth:200,$SlideSpacing:3,$Cols:4,$ArrowNavigatorOptions:{$Class:$JssorArrowNavigator$,$Steps:4},$BulletNavigatorOptions:{$Class:$JssorBulletNavigator$,$SpacingX:1,$SpacingY:1}},t=new $JssorSlider$("jssor_2",o);i(),$(window).bind("load",i),$(window).bind("resize",i),$(window).bind("orientationchange",i)}),jQuery(document).ready(function($){function i(){var o=t.$Elmt.parentNode.clientWidth;o?(o=Math.min(o,1200),t.$ScaleWidth(o)):window.setTimeout(i,30)}var o={$AutoPlay:!0,$AutoPlaySteps:4,$SlideDuration:200,$SlideWidth:200,$SlideSpacing:3,$Cols:4,$ArrowNavigatorOptions:{$Class:$JssorArrowNavigator$,$Steps:4},$BulletNavigatorOptions:{$Class:$JssorBulletNavigator$,$SpacingX:1,$SpacingY:1}},t=new $JssorSlider$("jssor_3",o);i(),$(window).bind("load",i),$(window).bind("resize",i),$(window).bind("orientationchange",i)}),$(document).keydown(function(i){i.ctrlKey!==!0||"61"!=i.which&&"107"!=i.which&&"173"!=i.which&&"109"!=i.which&&"187"!=i.which&&"189"!=i.which||i.preventDefault()}),$(window).bind("mousewheel DOMMouseScroll",function(i){i.ctrlKey===!0&&i.preventDefault()});