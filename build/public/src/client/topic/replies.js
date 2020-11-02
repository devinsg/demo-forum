"use strict";define("forum/topic/replies",["navigator","components","forum/topic/posts"],function(e,t,o){var s={};s.init=function(e){var t=e.closest("[data-pid]");var s=t.data("pid");var i=e.find('[component="post/replies/open"]');var n=e.find('[component="post/replies/loading"]');var a=e.find('[component="post/replies/close"]');if(i.is(":not(.hidden)")&&n.is(".hidden")){i.addClass("hidden");n.removeClass("hidden");socket.emit("posts.getReplies",s,function(s,d){n.addClass("hidden");if(s){i.removeClass("hidden");return app.alertError(s.message)}a.removeClass("hidden");o.modifyPostsByPrivileges(d);var p={posts:d,privileges:ajaxify.data.privileges,"downvote:disabled":ajaxify.data["downvote:disabled"],"reputation:disabled":ajaxify.data["reputation:disabled"],loggedIn:!!app.user.uid,hideReplies:config.hasOwnProperty("showNestedReplies")?!config.showNestedReplies:true};app.parseAndTranslate("topic","posts",p,function(s){var i=$("<div>",{component:"post/replies"}).html(s).hide();if(e.attr("data-target-component")){t.find('[component="'+e.attr("data-target-component")+'"]').html(i)}else{i.insertAfter(e)}i.slideDown("fast");o.onNewPostsAddedToDom(s);$(window).trigger("action:posts.loaded",{posts:d})})})}else if(a.is(":not(.hidden)")){a.addClass("hidden");i.removeClass("hidden");n.addClass("hidden");t.find('[component="post/replies"]').slideUp("fast",function(){$(this).remove()})}};s.onNewPost=function(e){var t=e.posts[0];if(!t){return}i(t,1);e.hideReplies=config.hasOwnProperty("showNestedReplies")?!config.showNestedReplies:true;app.parseAndTranslate("topic","posts",e,function(e){var s=$('[component="post"][data-pid="'+t.toPid+'"] [component="post/replies"]').first();if(s.length){s.append(e);o.onNewPostsAddedToDom(e)}})};s.onPostPurged=function(e){i(e,-1)};function i(e,t){var o=$('[component="post"][data-pid="'+e.toPid+'"]').find('[component="post/reply-count"]').first();var s=o.find('[component="post/reply-count/text"]');var i=o.find('[component="post/reply-count/avatars"]');var n=Math.max(0,parseInt(s.attr("data-replies"),10)+t);var a=o.find(".timeago").attr("title",e.timestampISO);s.attr("data-replies",n);o.toggleClass("hidden",n<=0);if(n>1){s.translateText("[[topic:replies_to_this_post, "+n+"]]")}else{s.translateText("[[topic:one_reply_to_this_post]]")}if(!i.find('[data-uid="'+e.uid+'"]').length&&n<7){app.parseAndTranslate("topic","posts",{posts:[{replies:{users:[e.user]}}]},function(e){i.prepend(e.find('[component="post/reply-count/avatars"] [component="avatar/picture"]'))})}i.addClass("hasMore");a.data("timeago",null).timeago()}return s});
//# sourceMappingURL=replies.js.map