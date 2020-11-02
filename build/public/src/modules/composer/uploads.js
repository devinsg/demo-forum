"use strict";define("composer/uploads",["composer/preview","composer/categoryList","translator","jquery-form"],function(e,t,r){var a={inProgress:{}};var i="";a.initialize=function(e){u(e);f(e);o(e);n(e);r.translate("[[modules:composer.uploading, "+0+"%]]",function(e){i=e})};function o(e){var t=$('.composer[data-uuid="'+e+'"]');t.find("#files").on("change",function(t){var r=(t.target||{}).files||($(this).val()?[{name:$(this).val(),type:utils.fileMimeType($(this).val())}]:null);if(r){c({files:r,post_uuid:e,route:"/api/post/upload"})}});t.find("#topic-thumb-file").on("change",function(t){var r=(t.target||{}).files||($(this).val()?[{name:$(this).val(),type:utils.fileMimeType($(this).val())}]:null);var a;if(r){if(window.FormData){a=new FormData;for(var i=0;i<r.length;++i){a.append("files[]",r[i],r[i].name)}}d({files:r,post_uuid:e,route:"/api/topic/thumb/upload",formData:a})}})}function n(e){var t=$('.composer[data-uuid="'+e+'"]');t.on("click",".topic-thumb-clear-btn",function(e){t.find("input#topic-thumb-url").val("").trigger("change");s(t.find("input#topic-thumb-file"));$(this).addClass("hide");e.preventDefault()});t.on("paste change keypress","input#topic-thumb-url",function(){var e=$(this);setTimeout(function(){var r=e.val();if(r){t.find(".topic-thumb-clear-btn").removeClass("hide")}else{s(t.find("input#topic-thumb-file"));t.find(".topic-thumb-clear-btn").addClass("hide")}t.find("img.topic-thumb-preview").attr("src",r)},100)})}a.toggleThumbEls=function(e,t){if(t){e.find(".topic-thumb-clear-btn").removeClass("hide")}var r=e.find(".topic-thumb-toggle-btn");r.removeClass("hide");r.off("click").on("click",function(){var t=e.find(".topic-thumb-container");t.toggleClass("hide",!t.hasClass("hide"))})};function s(e){e.wrap("<form />").closest("form").get(0).reset();e.unwrap()}function u(e){var t=false;var r=$('.composer[data-uuid="'+e+'"]');var a=r.find(".imagedrop");function i(){if(t){return}a.css("top","0px");a.css("height",r.height()+"px");a.css("line-height",r.height()+"px");a.show();a.on("dragleave",function(){a.hide();a.off("dragleave")})}function o(t){t.preventDefault();var r=t.originalEvent.dataTransfer.files;var i;if(r.length){if(window.FormData){i=new FormData;for(var o=0;o<r.length;++o){i.append("files[]",r[o],r[o].name)}}c({files:r,post_uuid:e,route:"/api/post/upload",formData:i})}a.hide();return false}function n(e){e.preventDefault();return false}$(document).off("dragstart").on("dragstart",function(){t=true}).off("dragend").on("dragend",function(){t=false});r.on("dragenter",i);a.on("dragover",n);a.on("dragenter",n);a.on("drop",o)}function f(e){var t=$('.composer[data-uuid="'+e+'"]');t.on("paste",function(t){var r=(t.clipboardData||t.originalEvent.clipboardData||{}).items;[].some.call(r,function(t){var r=t.getAsFile();if(!r){return false}var a=utils.generateUUID()+"-"+r.name;var i=null;if(window.FormData){i=new FormData;i.append("files[]",r,a)}c({files:[r],fileNames:[a],post_uuid:e,route:"/api/post/upload",formData:i});return true})})}function l(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}function p(e,t,r){return e.slice(0,t)+r+e.slice(t)}function c(o){var n=[...o.files];var s=o.post_uuid;var u=$('.composer[data-uuid="'+s+'"]');var f=u.find("textarea");var c=f.val();var d=u.find("#fileForm");var g=false;d.attr("action",config.relative_path+o.route);var v=t.getSelectedCid();if(!v&&ajaxify.data.cid){v=ajaxify.data.cid}var h=0;var b=false;for(h=0;h<n.length;++h){b=n[h].type.match(/image./);if(b&&!app.user.privileges["upload:post:image"]||!b&&!app.user.privileges["upload:post:file"]){return app.alertError("[[error:no-privileges]]")}}var w=[];for(h=0;h<n.length;++h){w.push(h+"_"+Date.now()+"_"+(o.fileNames?o.fileNames[h]:n[h].name));b=n[h].type.match(/image./);if(n[h].size>parseInt(config.maximumFileSize,10)*1024){d[0].reset();return app.alertError("[[error:file-too-big, "+config.maximumFileSize+"]]")}c=p(c,f.getCursorPosition(),(b?"!":"")+"["+w[h]+"]("+i+") ")}if(d.length){u.find('[data-action="post"]').prop("disabled",true)}f.val(c);$(window).trigger("action:composer.uploadStart",{post_uuid:s,files:w.map(function(e,t){return{filename:e.replace(/^\d+_\d{13}_/,""),isImage:/image./.test(n[t].type)}}),text:i});d.off("submit").submit(function(){function t(e,t,r){var a;if(r){a=e.replace(/^\d+_\d{13}_/,"")}var i=f.val();var o=new RegExp(l(e)+"]\\([^)]+\\)","g");f.val(i.replace(o,(a||e)+"]("+t+")"));$(window).trigger("action:composer.uploadUpdate",{post_uuid:s,filename:e,text:t})}a.inProgress[s]=a.inProgress[s]||[];a.inProgress[s].push(1);if(o.formData){o.formData.append("cid",v)}$(this).ajaxSubmit({headers:{"x-csrf-token":config.csrf_token},resetForm:true,clearForm:true,formData:o.formData,data:{cid:v},error:function(e){u.find('[data-action="post"]').prop("disabled",false);m(e,s)},uploadProgress:function(e,a,i,o){r.translate("[[modules:composer.uploading, "+o+"%]]",function(e){if(g){return}for(var r=0;r<n.length;++r){t(w[r],e)}})},success:function(r){g=true;if(r&&r.length){for(var a=0;a<r.length;++a){r[a].filename=w[a].replace(/^\d+_\d{13}_/,"");r[a].isImage=/image./.test(n[a].type);t(w[a],r[a].url,true)}}e.render(u);f.focus();u.find('[data-action="post"]').prop("disabled",false);$(window).trigger("action:composer.upload",{post_uuid:s,files:r})},complete:function(){d[0].reset();a.inProgress[s].pop()}});return false});d.submit()}function d(e){var t=e.post_uuid;var r=$('.composer[data-uuid="'+t+'"]');var i=r.find(".topic-thumb-spinner");var o=r.find("#thumbForm");o.attr("action",config.relative_path+e.route);o.off("submit").submit(function(){i.removeClass("hide");a.inProgress[t]=a.inProgress[t]||[];a.inProgress[t].push(1);$(this).ajaxSubmit({headers:{"x-csrf-token":config.csrf_token},formData:e.formData,error:m,success:function(e){r.find("#topic-thumb-url").val((e[0]||{}).url||"").trigger("change")},complete:function(){a.inProgress[t].pop();i.addClass("hide")}});return false});o.submit()}function m(e,t){var r=e.responseJSON&&e.responseJSON.error||"[[error:parse-error]]";if(e&&e.status===413){r=e.statusText||"Request Entity Too Large"}app.alertError(r);$(window).trigger("action:composer.uploadError",{post_uuid:t,message:r})}return a});
//# sourceMappingURL=uploads.js.map