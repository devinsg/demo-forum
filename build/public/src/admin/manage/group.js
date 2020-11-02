"use strict";define("admin/manage/group",["forum/groups/memberlist","iconSelect","translator","categorySelector","groupSearch","api"],function(a,e,n,r,o,i){var t={};t.init=function(){var n=$("#group-icon");var i=$("#change-group-user-title");var t=$("#change-group-label-color");var c=$("#change-group-text-color");var p=$("#group-label-preview");var l=$("#group-label-preview-text");var g=ajaxify.data.group.name;$("#group-selector").on("change",function(){ajaxify.go("admin/manage/groups/"+$(this).val()+window.location.hash)});a.init("admin/manage/group");i.on("keyup",function(){l.text(i.val())});t.on("keyup input",function(){p.css("background-color",t.val()||"#000000")});c.on("keyup input",function(){p.css("color",c.val()||"#ffffff")});u(g);$("#group-icon, #group-icon-label").on("click",function(){var a=n.attr("value");e.init(n,function(){var e=n.attr("value");if(e===a){return}if(e==="fa-nbb-none"){e="hidden"}$("#group-icon-preview").attr("class","fa fa-fw "+(e||"hidden"));app.flags=app.flags||{};app.flags._unsaved=true})});r.init($('[component="category-selector"]'),function(a){s(a.cid)});o.init($('[component="group-selector"]'));$("form [data-property]").on("change",function(){app.flags=app.flags||{};app.flags._unsaved=true});$("#save").on("click",function(){socket.emit("admin.groups.update",{groupName:g,values:{name:$("#change-group-name").val(),userTitle:i.val(),description:$("#change-group-desc").val(),icon:n.attr("value"),labelColor:t.val(),textColor:c.val(),userTitleEnabled:$("#group-userTitleEnabled").is(":checked"),private:$("#group-private").is(":checked"),hidden:$("#group-hidden").is(":checked"),disableJoinRequests:$("#group-disableJoinRequests").is(":checked"),disableLeave:$("#group-disableLeave").is(":checked")}},function(a){if(a){return app.alertError(a.message)}var e=$("#change-group-name").val();if(g!==e){ajaxify.go("admin/manage/groups/"+encodeURIComponent(e),undefined,true)}app.alertSuccess("[[admin/manage/groups:edit.save-success]]")});return false})};function u(a){$('[component="groups/members"]').on("click","[data-action]",function(){var e=$(this);var n=e.parents("[data-uid]");var r=n.find(".member-name .user-owner-icon");var o=!r.hasClass("invisible");var t=n.attr("data-uid");var u=e.attr("data-action");switch(u){case"toggleOwnership":socket.emit("groups."+(o?"rescind":"grant"),{toUid:t,groupName:a},function(a){if(a){return app.alertError(a.message)}r.toggleClass("invisible")});break;case"kick":bootbox.confirm("[[admin/manage/groups:edit.confirm-remove-user]]",function(a){if(!a){return}i.del("/groups/"+ajaxify.data.group.slug+"/membership/"+t).then(()=>{n.slideUp().remove()})});break;default:break}})}function s(a){if(a){var e="admin/manage/privileges/"+a+"?group="+ajaxify.data.group.nameEncoded;if(app.flags&&app.flags._unsaved===true){n.translate("[[global:unsaved-changes]]",function(a){bootbox.confirm(a,function(a){if(a){app.flags._unsaved=false;ajaxify.go(e)}})});return}ajaxify.go(e)}}return t});
//# sourceMappingURL=group.js.map