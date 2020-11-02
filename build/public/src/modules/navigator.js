"use strict";define("navigator",["forum/pagination","components"],function(t,o){var e={};var n=1;var i=0;var a;var r;var l;var c;var s;var f;var d=false;var u=true;e.scrollActive=false;var p=$(".pagination-block");var h=p.find(".pagination-text");var g=p.find("meter");var v=p.find(".progress-bar");$(window).on("action:ajaxify.start",function(){$(window).off("keydown",x)});e.init=function(t,o,i,a,f){n=1;e.selector=t;e.callback=f;e.toTop=i||function(){};e.toBottom=a||function(){};p=$(".pagination-block");h=p.find(".pagination-text");g=p.find("meter");v=p.find(".progress-bar");$(window).off("scroll",e.delayedUpdate).on("scroll",e.delayedUpdate);p.find(".dropdown-menu").off("click").on("click",function(t){t.stopPropagation()});p.off("shown.bs.dropdown",".dropdown").on("shown.bs.dropdown",".dropdown",function(){setTimeout(function(){$(".pagination-block input").focus()},100)});p.find(".pageup").off("click").on("click",e.scrollUp);p.find(".pagedown").off("click").on("click",e.scrollDown);p.find(".pagetop").off("click").on("click",e.toTop);p.find(".pagebottom").off("click").on("click",e.toBottom);p.find("input").on("keydown",function(t){if(t.which===13){var o=$(this);if(!utils.isNumber(o.val())){o.val("");return}var e=parseInt(o.val(),10);var n=T(e);o.val("");$(".pagination-block .dropdown-toggle").trigger("click");ajaxify.go(n)}});$(".pagination-block.visible-xs").on("touchstart",function(t){r=$(".navigator-thumb");c=Math.min($(window).width(),Math.max(0,t.touches[0].clientX));s=Math.min($(window).height(),Math.max(0,t.touches[0].clientY));u=true}).on("touchmove",function(t){var i=$(window).width();var a=$(window).height();var f=Math.abs(c-Math.min(i,Math.max(0,t.touches[0].clientX)));var p=Math.abs(s-Math.min(a,Math.max(0,t.touches[0].clientY)));c=Math.min(i,Math.max(0,t.touches[0].clientX));s=Math.min(a,Math.max(0,t.touches[0].clientY));if(f>=p&&u){d=true;l=setInterval(m,100)}if(d){t.preventDefault();t.stopPropagation();var h=c/i;n=Math.max(1,Math.ceil(o*h));n=n>o?o:n;if(u){m(function(){r.removeClass("hidden")})}e.updateTextAndProgressBar()}u=false}).on("touchend",function(){if(l){clearInterval(l);l=0}if(d){r.addClass("hidden");e.scrollToIndex(n-1,true,0);d=false}});w();e.setCount(o);e.update(0)};function m(t){t=t||function(){};if(f===n){return}f=n;r.css({left:Math.min($(window).width()-r.outerWidth(),Math.max(c-r.outerWidth()/2,0))});socket.emit("posts.getTimestampByIndex",{tid:ajaxify.data.tid,index:n-1},function(o,e){if(o){return app.alertError(o.message)}var a=new Date(e);var l=a.toLocaleString(config.userLang,{month:"long"});r.find(".text").translateText("[[global:pagination.out_of, "+n+", "+i+"]]");if(e>Date.now()-30*24*60*60*1e3){r.find(".time").text(l+" "+a.getDate())}else{r.find(".time").text(l+" "+a.getFullYear())}t()})}function w(){if(!config.usePagination){$(window).off("keydown",x).on("keydown",x)}}function x(t){if(t.target.nodeName==="BODY"){if(t.shiftKey||t.ctrlKey||t.altKey){return}if(t.which===36&&e.toTop){e.toTop();return false}else if(t.which===35&&e.toBottom){e.toBottom();return false}}}function T(t){var o=window.location.pathname.replace(config.relative_path,"");var e=o.split("/");return e[1]+"/"+e[2]+"/"+e[3]+(t?"/"+t:"")}e.setCount=function(t){i=parseInt(t,10);e.updateTextAndProgressBar()};e.show=function(){y(true)};e.disable=function(){i=0;n=1;e.callback=null;e.selector=null;$(window).off("scroll",e.delayedUpdate);y(false)};function y(t){var o=ajaxify.removeRelativePath(window.location.pathname.slice(1));if(t&&(!o.startsWith("topic")&&!o.startsWith("category"))){return}p.toggleClass("ready",t)}e.delayedUpdate=function(){if(!a){a=setTimeout(function(){e.update();a=undefined},100)}};e.update=function(t){t=typeof t==="number"?t:undefined;var a=$(e.selector);if(a.length){n=parseInt(a.first().attr("data-index"),10)+1}var r=$(window).scrollTop();var l=$(window).height();var c=$(document).height();var s=r+l/2;var f=Number.MAX_VALUE;a.each(function(){var t=parseInt($(this).attr("data-index"),10);if(t>=0){var o=Math.abs(s-$(this).offset().top);if(o>f){return false}if(o<f){n=t+1;f=o}}});var d=r===0&&parseInt(a.first().attr("data-index"),10)===0;var u=r+l>c-100&&parseInt(a.last().attr("data-index"),10)===i-1;if(d){n=1}else if(u){n=i}if(t===undefined&&ajaxify.data.template.topic===true){if(d){t=0}else{var p=o.get("post/anchor",n-1);if(p.length){var h=p.get(0).getBoundingClientRect();t=h.top}}}if(typeof e.callback==="function"){e.callback(n,i,t)}e.updateTextAndProgressBar();y(!!i)};e.updateTextAndProgressBar=function(){if(!utils.isNumber(n)){return}n=n>i?i:n;h.translateHtml("[[global:pagination.out_of, "+n+", "+i+"]]");var t=(n-1)/(i-1||1);g.val(t);v.width(t*100+"%")};e.scrollUp=function(){var o=$(window);if(config.usePagination){var e=o.scrollTop()<=0;if(e){return t.previousPage(function(){$("body,html").scrollTop($(document).height()-o.height())})}}$("body,html").animate({scrollTop:o.scrollTop()-o.height()})};e.scrollDown=function(){var o=$(window);if(config.usePagination){var e=o.scrollTop()>=$(document).height()-o.height();if(e){return t.nextPage()}}$("body,html").animate({scrollTop:o.scrollTop()+o.height()})};e.scrollTop=function(t){if($(e.selector+'[data-index="'+t+'"]').length){e.scrollToIndex(t,true)}else{ajaxify.go(T())}};e.scrollBottom=function(t){if(parseInt(t,10)<0){return}if($(e.selector+'[data-index="'+t+'"]').length){e.scrollToIndex(t,true)}else{t=parseInt(t,10)+1;ajaxify.go(T(t))}};e.scrollToIndex=function(n,i,a){var r=!!o.get("topic").length;var l=!!o.get("category").length;if(!utils.isNumber(n)||!r&&!l){return}a=a!==undefined?a:400;e.scrollActive=true;if(r&&o.get("post/anchor",n).length){return e.scrollToPostIndex(n,i,a)}if(l&&$('[component="category/topic"][data-index="'+n+'"]').length){return e.scrollToTopicIndex(n,i,a)}if(!config.usePagination){e.scrollActive=false;n=parseInt(n,10)+1;ajaxify.go(T(n));return}var c=r?e.scrollToPostIndex:e.scrollToTopicIndex;var s=1+Math.floor(n/config.postsPerPage);if(parseInt(s,10)!==ajaxify.data.pagination.currentPage){t.loadPage(s,function(){c(n,i,a)})}else{c(n,i,a)}};e.scrollToPostIndex=function(t,n,i){var a=o.get("post","index",t);e.scrollToElement(a,n,i)};e.scrollToTopicIndex=function(t,o,n){var i=$('[component="category/topic"][data-index="'+t+'"]');e.scrollToElement(i,o,n)};e.scrollToElement=function(t,n,i){if(!t.length){e.scrollActive=false;return}var a=t.height();var r=$(window).height();var l=o.get("navbar").height();$(window).off("scroll",e.update);i=i!==undefined?i:400;e.scrollActive=true;var c=false;function s(){function o(){if(c){$(window).on("scroll",e.update);var o=t.get(0).getBoundingClientRect();e.update(o.top);return}c=true;e.scrollActive=false;f();$("body").scrollTop($("body").scrollTop()-1);$("html").scrollTop($("html").scrollTop()-1)}var n=0;if(a<r){n=t.offset().top-r/2+a/2}else{n=t.offset().top-l}if(i===0){$(window).scrollTop(n);return o()}$("html, body").animate({scrollTop:n+"px"},i,o)}function f(){if(n){$('[component="post"],[component="category/topic"]').removeClass("highlight");t.addClass("highlight");setTimeout(function(){t.removeClass("highlight")},1e4)}}s()};return e});
//# sourceMappingURL=navigator.js.map