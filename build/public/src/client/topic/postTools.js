"use strict";define("forum/topic/postTools",["share","navigator","components","translator","forum/topic/votes","api"],function(t,o,e,n,a,i){var r={};var s=false;r.init=function(o){s=false;c();p(o);t.addShareHandlers(ajaxify.data.titleRaw);a.addVoteHandler();r.updatePostCount(ajaxify.data.postcount)};function c(){$('[component="topic"]').on("show.bs.dropdown",".moderator-tools",function(){var t=$(this);var o=t.find(".dropdown-menu");if(o.html()){return}var e=t.parents("[data-pid]");var n=e.attr("data-pid");var a=parseInt(e.attr("data-index"),10);socket.emit("posts.loadPostTools",{pid:n,cid:ajaxify.data.cid},function(t,e){if(t){return app.alertError(t.message)}e.posts.display_move_tools=e.posts.display_move_tools&&a!==0;app.parseAndTranslate("partials/topic/post-menu-list",e,function(t){o.html(t);require(["clipboard"],function(t){new t("[data-clipboard-text]")});$(window).trigger("action:post.tools.load")})})})}r.toggle=function(t,o){var n=e.get("post","pid",t);n.find('[component="post/quote"], [component="post/bookmark"], [component="post/reply"], [component="post/flag"], [component="user/chat"]').toggleClass("hidden",o);n.find('[component="post/delete"]').toggleClass("hidden",o).parent().attr("hidden",o?"":null);n.find('[component="post/restore"]').toggleClass("hidden",!o).parent().attr("hidden",!o?"":null);n.find('[component="post/purge"]').toggleClass("hidden",!o).parent().attr("hidden",!o?"":null);r.removeMenu(n)};r.removeMenu=function(t){t.find('[component="post/tools"] .dropdown-menu').html("")};r.updatePostCount=function(t){var n=e.get("topic/post-count");n.html(t).attr("title",t);utils.makeNumbersHumanReadable(n);o.setCount(t)};function p(t){var o=e.get("topic");o.on("click",'[component="post/quote"]',function(){l($(this),t)});o.on("click",'[component="post/reply"]',function(){d($(this),t)});$(".topic").on("click",'[component="topic/reply"]',function(o){o.preventDefault();d($(this),t)});$(".topic").on("click",'[component="topic/reply-as-topic"]',function(){n.translate("[[topic:link_back, "+ajaxify.data.titleRaw+", "+config.relative_path+"/topic/"+ajaxify.data.slug+"]]",function(t){$(window).trigger("action:composer.topic.new",{cid:ajaxify.data.cid,body:t})})});o.on("click",'[component="post/bookmark"]',function(){return f($(this),m($(this),"data-pid"))});o.on("click",'[component="post/upvote"]',function(){return a.toggleVote($(this),".upvoted",1)});o.on("click",'[component="post/downvote"]',function(){return a.toggleVote($(this),".downvoted",-1)});o.on("click",'[component="post/vote-count"]',function(){a.showVotes(m($(this),"data-pid"))});o.on("click",'[component="post/flag"]',function(){var t=m($(this),"data-pid");require(["flags"],function(o){o.showFlagModal({type:"post",id:t})})});o.on("click",'[component="post/flagUser"]',function(){var t=m($(this),"data-uid");require(["flags"],function(o){o.showFlagModal({type:"user",id:t})})});o.on("click",'[component="post/edit"]',function(){var t=$(this);var o=parseInt(m(t,"data-timestamp"),10);var e=parseInt(ajaxify.data.postEditDuration,10);if(i(e,o,"post-edit-duration-expired")){$(window).trigger("action:composer.post.edit",{pid:m(t,"data-pid")})}});if(config.enablePostHistory&&ajaxify.data.privileges["posts:history"]){o.on("click",'[component="post/view-history"], [component="post/edit-indicator"]',function(){var t=$(this);require(["forum/topic/diffs"],function(o){o.open(m(t,"data-pid"))})})}o.on("click",'[component="post/delete"]',function(){var t=$(this);var o=parseInt(m(t,"data-timestamp"),10);var e=parseInt(ajaxify.data.postDeleteDuration,10);if(i(e,o,"post-delete-duration-expired")){v($(this))}});function i(t,o,e){if(!ajaxify.data.privileges.isAdminOrMod&&t&&Date.now()-o>t*1e3){var n=Math.floor(t/86400);var a=Math.floor(t%86400/3600);var i=Math.floor(t%86400%3600/60);var r=t%86400%3600%60;var s="[[error:"+e+", "+t+"]]";if(n){if(a){s="[[error:"+e+"-days-hours, "+n+", "+a+"]]"}else{s="[[error:"+e+"-days, "+n+"]]"}}else if(a){if(i){s="[[error:"+e+"-hours-minutes, "+a+", "+i+"]]"}else{s="[[error:"+e+"-hours, "+a+"]]"}}else if(i){if(r){s="[[error:"+e+"-minutes-seconds, "+i+", "+r+"]]"}else{s="[[error:"+e+"-minutes, "+i+"]]"}}app.alertError(s);return false}return true}o.on("click",'[component="post/restore"]',function(){v($(this))});o.on("click",'[component="post/purge"]',function(){h($(this))});o.on("click",'[component="post/move"]',function(){var t=$(this);require(["forum/topic/move-post"],function(o){o.init(t.parents("[data-pid]"))})});o.on("click",'[component="post/change-owner"]',function(){var t=$(this);require(["forum/topic/change-owner"],function(o){o.init(t.parents("[data-pid]"))})});o.on("click",'[component="post/ban-ip"]',function(){var t=$(this).attr("data-ip");socket.emit("blacklist.addRule",t,function(t){if(t){return app.alertError(t.message)}app.alertSuccess("[[admin/manage/blacklist:ban-ip]]")})});o.on("click",'[component="post/chat"]',function(){y($(this))})}function d(t,o){var e=u();k(function(){var n=g(t);if(m(t,"data-uid")==="0"||!m(t,"data-userslug")){n=""}var a=t.is('[component="post/reply"]')?m(t,"data-pid"):null;if(e.text&&(!a||!e.pid||a===e.pid)){n=n||e.username;$(window).trigger("action:composer.addQuote",{tid:o,pid:a,topicName:ajaxify.data.titleRaw,username:n,text:e.text,selectedPid:e.pid})}else{$(window).trigger("action:composer.post.new",{tid:o,pid:a,topicName:ajaxify.data.titleRaw,text:n?n+" ":$('[component="topic/quickreply/text"]').val()||""})}})}function l(t,o){var e=u();k(function(){var n=g(t);var a=m(t,"data-pid");function i(t){$(window).trigger("action:composer.addQuote",{tid:o,pid:a,username:n,topicName:ajaxify.data.titleRaw,text:t})}if(e.text&&a&&a===e.pid){return i(e.text)}socket.emit("posts.getRawPost",a,function(t,o){if(t){return app.alertError(t.message)}i(o)})})}function u(){var t="";var o;var e="";var n=window.getSelection?window.getSelection():document.selection.createRange();var a=$('[component="post"] [component="post/content"]');var i;a.each(function(t,o){if(n&&n.containsNode&&o&&n.containsNode(o,true)){i=o}});if(i){var r=document.createRange();r.selectNodeContents(i);var s=n.getRangeAt(0).cloneRange();if(s.compareBoundaryPoints(Range.START_TO_START,r)<0){s.setStart(r.startContainer,r.startOffset)}if(s.compareBoundaryPoints(Range.END_TO_END,r)>0){s.setEnd(r.endContainer,r.endOffset)}r.detach();t=s.toString();var c=$(i).parents('[component="post"]');o=c.attr("data-pid");e=g($(i));s.detach()}return{text:t,pid:o,username:e}}function f(t,o){var e=t.attr("data-bookmarked")==="false"?"put":"del";i[e](`/posts/${o}/bookmark`,undefined,undefined,"default");return false}function m(t,o){return t.parents("[data-pid]").attr(o)}function g(t){var o="";var e=t.parents("[data-pid]");if(t.attr("component")==="topic/reply"){return o}if(e.length){o=e.attr("data-userslug");if(!o){if(e.attr("data-uid")!=="0"){o="[[global:former_user]]"}else{o="[[global:guest]]"}}}if(e.length&&e.attr("data-uid")!=="0"){o="@"+o}return o}function v(t){var o=m(t,"data-pid");var n=e.get("post","pid",o);var a=!n.hasClass("deleted")?"delete":"restore";w(a,o)}function h(t){w("purge",m(t,"data-pid"))}function w(t,o){n.translate("[[topic:post_"+t+"_confirm]]",function(e){bootbox.confirm(e,function(e){if(!e){return}const n=t==="purge"?"":"/state";const a=t==="restore"?"put":"del";i[a](`/posts/${o}${n}`,undefined,undefined,"default")})})}function y(t){var o=t.parents("[data-pid]");app.newChat(o.attr("data-uid"));t.parents(".btn-group").find(".dropdown-toggle").click();return false}function k(t){var o=Math.min(Date.now()-1e3*60*60*24*ajaxify.data.topicStaleDays,864e13);if(s||ajaxify.data.lastposttime>=o){return t()}n.translate("[[topic:stale.warning]]",function(o){var e=bootbox.dialog({title:"[[topic:stale.title]]",message:o,buttons:{reply:{label:"[[topic:stale.reply_anyway]]",className:"btn-link",callback:function(){s=true;t()}},create:{label:"[[topic:stale.create]]",className:"btn-primary",callback:function(){n.translate("[[topic:link_back, "+ajaxify.data.title+", "+config.relative_path+"/topic/"+ajaxify.data.slug+"]]",function(t){$(window).trigger("action:composer.topic.new",{cid:ajaxify.data.cid,body:t})})}}}});e.modal()})}return r});
//# sourceMappingURL=postTools.js.map