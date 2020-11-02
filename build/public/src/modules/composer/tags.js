"use strict";define("composer/tags",function(){var t={};var a;var i;t.init=function(o,g){var s=o.find(".tags");if(!s.length){return}a=ajaxify.data.hasOwnProperty("minTags")?ajaxify.data.minTags:config.minimumTagsPerTopic;i=ajaxify.data.hasOwnProperty("maxTags")?ajaxify.data.maxTags:config.maximumTagsPerTopic;s.tagsinput({confirmKeys:[13,44],trimValue:true});var l=o.find(".bootstrap-tagsinput input");s.on("beforeItemAdd",function(a){var e=i&&i<=t.getTags(o.attr("data-uuid")).length;var n=utils.cleanUpTag(a.item,config.maximumTagLength);var r=n!==a.item;a.cancel=r||a.item.length<config.minimumTagLength||a.item.length>config.maximumTagLength||e;if(a.item.length<config.minimumTagLength){return app.alertError("[[error:tag-too-short, "+config.minimumTagLength+"]]")}else if(a.item.length>config.maximumTagLength){return app.alertError("[[error:tag-too-long, "+config.maximumTagLength+"]]")}else if(e){return app.alertError("[[error:too-many-tags, "+i+"]]")}if(r){s.tagsinput("add",n)}});s.on("itemAdded",function(t){var a=g.hasOwnProperty("cid")?g.cid:ajaxify.data.cid;socket.emit("topics.isTagAllowed",{tag:t.item,cid:a||0},function(i,e){if(i){return app.alertError(i.message)}if(!e){return s.tagsinput("remove",t.item)}$(window).trigger("action:tag.added",{cid:a,tagEl:s,tag:t.item});if(l.length){l.autocomplete("close")}})});e(o,g,ajaxify.data);app.loadJQueryUI(function(){l.autocomplete({delay:100,position:{my:"left bottom",at:"left top",collision:"flip"},appendTo:o.find(".bootstrap-tagsinput"),open:function(){$(this).autocomplete("widget").css("z-index",2e4)},source:function(t,a){socket.emit("topics.autocompleteTags",{query:t.term,cid:g.cid},function(t,i){if(t){return app.alertError(t.message)}if(i){a(i)}$(".ui-autocomplete a").attr("data-ajaxify","false")})},select:function(){n(l)}});r(g.tags,s)});l.attr("tabIndex",s.attr("tabIndex"));l.on("blur",function(){n(l)});$('[component="composer/tag/dropdown"]').on("click","li",function(){var t=$(this).attr("data-tag");if(t){r([t],s)}return false})};t.isEnoughTags=function(i){return t.getTags(i).length>=a};t.minTagCount=function(){return a};t.onChangeCategory=function(t,a,i){$.get(config.relative_path+"/api/category/"+i,function(i){var n=t.find('[component="composer/tag/dropdown"]');if(!n.length){return}e(t,a,i);n.toggleClass("hidden",!i.tagWhitelist||!i.tagWhitelist.length);if(i.tagWhitelist){app.parseAndTranslate("composer","tagWhitelist",{tagWhitelist:i.tagWhitelist},function(t){n.find(".dropdown-menu").html(t)})}})};function e(t,e,n){var r=t.find(".tags");var o=t.find(".bootstrap-tagsinput input");if(!o.length){return}if(n.hasOwnProperty("minTags")){a=n.minTags}if(n.hasOwnProperty("maxTags")){i=n.maxTags}if(n.tagWhitelist&&n.tagWhitelist.length){o.attr("readonly","");o.attr("placeholder","");r.tagsinput("items").slice().forEach(function(t){if(n.tagWhitelist.indexOf(t)===-1){r.tagsinput("remove",t)}})}else{o.removeAttr("readonly");o.attr("placeholder",t.find("input.tags").attr("placeholder"))}t.find(".tags-container").toggleClass("hidden",n.privileges&&n.privileges.hasOwnProperty("topics:tag")&&!n.privileges["topics:tag"]||i===0&&!e.tags.length);if(n.privileges&&n.privileges.hasOwnProperty("topics:tag")&&!n.privileges["topics:tag"]){r.tagsinput("removeAll")}$(window).trigger("action:tag.toggleInput",{postContainer:t,tagWhitelist:n.tagWhitelist,tagsInput:o})}function n(t){var a=jQuery.Event("keypress");a.which=13;a.keyCode=13;setTimeout(function(){t.trigger(a)},100)}function r(t,a){if(t&&t.length){for(var i=0;i<t.length;++i){a.tagsinput("add",t[i])}}}t.getTags=function(t){return $('.composer[data-uuid="'+t+'"] .tags').tagsinput("items")};return t});
//# sourceMappingURL=tags.js.map