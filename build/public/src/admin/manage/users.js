"use strict";define("admin/manage/users",["translator","benchpress","autocomplete","api","slugify"],function(e,a,r,n,s){var t={};t.init=function(){$("#results-per-page").val(ajaxify.data.resultsPerPage).on("change",function(){var e=utils.params();e.resultsPerPage=$("#results-per-page").val();var a=l(e);ajaxify.go(window.location.pathname+"?"+a)});function t(){var e=[];$('.users-table [component="user/select/single"]').each(function(){if($(this).is(":checked")){e.push($(this).attr("data-uid"))}});return e}function o(e,a){$('.users-table [component="user/select/single"]:checked').parents(".user-row").find(e).each(function(){$(this).toggleClass("hidden",!a)})}function u(){$('.users-table [component="user/select/single"]').prop("checked",false);$('.users-table [component="user/select/all"]').prop("checked",false)}function d(){$('.users-table [component="user/select/single"]:checked').parents(".user-row").remove()}function p(e,a,r){return function(n){if(n){return app.alertError(n.message)}app.alertSuccess(e);if(a){o(a,r)}u()}}function g(e,a,r){app.alertSuccess(e);if(a){o(a,r)}u()}$('[component="user/select/all"]').on("click",function(){$('.users-table [component="user/select/single"]').prop("checked",$(this).is(":checked"))});$(".manage-groups").on("click",function(){var i=t();if(!i.length){app.alertError("[[error:no-users-selected]]");return false}socket.emit("admin.user.loadGroups",i,function(t,i){if(t){return app.alertError(t)}a.parse("admin/partials/manage_user_groups",i,function(a){var t=bootbox.dialog({message:a,title:"[[admin/manage/users:manage-groups]]",onEscape:true});t.on("shown.bs.modal",function(){r.group(t.find(".group-search"),function(a,r){var s=$(a.target).attr("data-uid");n.put("/groups/"+r.item.group.slug+"/membership/"+s,undefined).then(()=>{r.item.group.nameEscaped=e.escape(r.item.group.displayName);app.parseAndTranslate("admin/partials/manage_user_groups",{users:[{groups:[r.item.group]}]},function(e){$("[data-uid="+s+"] .group-area").append(e.find(".group-area").html())})})})});t.on("click",".group-area a",function(){t.modal("hide")});t.on("click",".remove-group-icon",function(){var e=$(this).parents("[data-group-name]");var a=e.attr("data-group-name");var r=$(this).parents("[data-uid]").attr("data-uid");n.del("/groups/"+s(a)+"/membership/"+r).then(()=>{e.remove()});return false})})})});$(".ban-user").on("click",function(){var e=t();if(!e.length){app.alertError("[[error:no-users-selected]]");return false}bootbox.confirm(e.length>1?"[[admin/manage/users:alerts.confirm-ban-multi]]":"[[admin/manage/users:alerts.confirm-ban]]",function(a){if(a){Promise.all(e.map(function(e){return n.put("/users/"+e+"/ban")})).then(()=>{g("[[admin/manage/users:alerts.ban-success]]",".ban",true)})}})});$(".ban-user-temporary").on("click",function(){var e=t();if(!e.length){app.alertError("[[error:no-users-selected]]");return false}a.parse("admin/partials/temporary-ban",{},function(a){bootbox.dialog({className:"ban-modal",title:"[[user:ban_account]]",message:a,show:true,buttons:{close:{label:"[[global:close]]",className:"btn-link"},submit:{label:"[[admin/manage/users:alerts.button-ban-x, "+e.length+"]]",callback:function(){var a=$(".ban-modal form").serializeArray().reduce(function(e,a){e[a.name]=a.value;return e},{});var r=a.length>0?Date.now()+a.length*1e3*60*60*(parseInt(a.unit,10)?24:1):0;Promise.all(e.map(function(e){return n.put("/users/"+e+"/ban",{until:r,reason:a.reason})})).then(()=>{g("[[admin/manage/users:alerts.ban-success]]",".ban",true)})}}}})})});$(".unban-user").on("click",function(){var e=t();if(!e.length){app.alertError("[[error:no-users-selected]]");return false}Promise.all(e.map(function(e){return n.delete("/users/"+e+"/ban")})).then(()=>{g("[[admin/manage/users:alerts.unban-success]]",".ban",false)})});$(".reset-lockout").on("click",function(){var e=t();if(!e.length){return}socket.emit("admin.user.resetLockouts",e,p("[[admin/manage/users:alerts.lockout-reset-success]]"))});$(".validate-email").on("click",function(){var e=t();if(!e.length){return}bootbox.confirm("[[admin/manage/users:alerts.confirm-validate-email]]",function(a){if(!a){return}socket.emit("admin.user.validateEmail",e,function(e){if(e){return app.alertError(e.message)}app.alertSuccess("[[admin/manage/users:alerts.validate-email-success]]");o(".notvalidated",false);o(".validated",true);u()})})});$(".send-validation-email").on("click",function(){var e=t();if(!e.length){return}socket.emit("admin.user.sendValidationEmail",e,function(e){if(e){return app.alertError(e.message)}app.alertSuccess("[[notifications:email-confirm-sent]]")})});$(".password-reset-email").on("click",function(){var e=t();if(!e.length){return}bootbox.confirm("[[admin/manage/users:alerts.password-reset-confirm]]",function(a){if(a){socket.emit("admin.user.sendPasswordResetEmail",e,p("[[notifications:email-confirm-sent]]"))}})});$(".force-password-reset").on("click",function(){var e=t();if(!e.length){return}bootbox.confirm("[[admin/manage/users:alerts.confirm-force-password-reset]]",function(a){if(a){socket.emit("admin.user.forcePasswordReset",e,p("[[admin/manage/users:alerts.validate-force-password-reset-success]]"))}})});$(".delete-user").on("click",function(){var e=t();if(!e.length){return}bootbox.confirm("[[admin/manage/users:alerts.confirm-delete]]",function(a){if(a){socket.emit("admin.user.deleteUsers",e,function(e){if(e){return app.alertError(e.message)}app.alertSuccess("[[admin/manage/users:alerts.delete-success]]");d();u();if(!$('.users-table [component="user/select/single"]').length){ajaxify.refresh()}})}})});$(".delete-user-content").on("click",function(){var e=t();if(!e.length){return}bootbox.confirm("[[admin/manage/users:alerts.confirm-delete-content]]",function(a){if(a){socket.emit("admin.user.deleteUsersContent",e,function(e){if(e){return app.alertError(e.message)}app.alertSuccess("[[admin/manage/users:alerts.delete-content-success]]")})}})});$(".delete-user-and-content").on("click",function(){var e=t();if(!e.length){return}bootbox.confirm("[[admin/manage/users:alerts.confirm-purge]]",function(a){if(a){socket.emit("admin.user.deleteUsersAndContent",e,function(e){if(e){return app.alertError(e.message)}app.alertSuccess("[[admin/manage/users:alerts.delete-success]]");d();u();if(!$('.users-table [component="user/select/single"]').length){ajaxify.refresh()}})}})});function h(){$('[data-action="create"]').on("click",function(){a.parse("admin/partials/create_user_modal",{},function(e){var a=bootbox.dialog({message:e,title:"[[admin/manage/users:alerts.create]]",onEscape:true,buttons:{cancel:{label:"[[admin/manage/users:alerts.button-cancel]]",className:"btn-link"},create:{label:"[[admin/manage/users:alerts.button-create]]",className:"btn-primary",callback:function(){b.call(this);return false}}}});a.on("shown.bs.modal",function(){a.find("#create-user-name").focus()})});return false})}function b(){var e=this;var a=document.getElementById("create-user-name").value;var r=document.getElementById("create-user-email").value;var s=document.getElementById("create-user-password").value;var t=document.getElementById("create-user-password-again").value;var i=$("#create-modal-error");if(s!==t){return i.translateHtml("[[admin/manage/users:alerts.error-x, [[admin/manage/users:alerts.error-passwords-different]]]]").removeClass("hide")}var o={username:a,email:r,password:s};n.post("/users",o).then(()=>{e.modal("hide");e.on("hidden.bs.modal",function(){ajaxify.refresh()});app.alertSuccess("[[admin/manage/users:alerts.create-success]]")}).catch(e=>i.translateHtml("[[admin/manage/users:alerts.error-x, "+e.status.message+"]]").removeClass("hidden"))}i();h();c();m();f()};function i(){var e=0;function a(){$(".fa-spinner").removeClass("hidden");o({searchBy:$("#user-search-by").val(),query:$("#user-search").val(),page:1})}$("#user-search").on("keyup",function(){if(e!==0){clearTimeout(e);e=0}e=setTimeout(a,250)});$("#user-search-by").on("change",function(){a()})}function o(e){var a=utils.params();a.searchBy=e.searchBy;a.query=e.query;a.page=e.page;var r=decodeURIComponent($.param(a));$.get(config.relative_path+"/api/admin/manage/users?"+r,u).fail(function(e){if(e&&e.responseJSON&&e.responseJSON.error){app.alertError(e.responseJSON.error)}})}function u(r){a.parse("partials/paginator",{pagination:r.pagination},function(e){$(".pagination-container").replaceWith(e)});app.parseAndTranslate("admin/manage/users","users",r,function(a){$(".users-table tbody tr").remove();$(".users-table tbody").append(a);a.find(".timeago").timeago();$(".fa-spinner").addClass("hidden");if(!$("#user-search").val()){$("#user-found-notify").addClass("hidden");$("#user-notfound-notify").addClass("hidden");return}if(r&&r.users.length===0){$("#user-notfound-notify").translateHtml("[[admin/manage/users:search.not-found]]").removeClass("hidden");$("#user-found-notify").addClass("hidden")}else{$("#user-found-notify").translateHtml(e.compile("admin/manage/users:alerts.x-users-found",r.matchCount,r.timing)).removeClass("hidden");$("#user-notfound-notify").addClass("hidden")}})}function c(){$('[component="user/invite"]').on("click",function(){bootbox.prompt("[[admin/manage/users:alerts.prompt-email]]",function(e){if(!e){return}socket.emit("user.invite",e,function(a){if(a){return app.alertError(a.message)}app.alertSuccess("[[admin/manage/users:alerts.email-sent-to, "+e+"]]")})});return false})}function l(e){if($("#user-search").val()){e.query=$("#user-search").val();e.searchBy=$("#user-search-by").val()}else{delete e.query;delete e.searchBy}return decodeURIComponent($.param(e))}function m(){$(".users-table thead th").on("click",function(){var e=$(this);var a=e.attr("data-sort");if(!a){return}var r=utils.params();r.sortBy=a;if(ajaxify.data.sortBy===a){r.sortDirection=ajaxify.data.reverse?"asc":"desc"}else{r.sortDirection="desc"}var n=l(r);ajaxify.go("admin/manage/users?"+n)})}function d(){var e=[];$("#filter-by").find("[data-filter-by]").each(function(){if($(this).find(".fa-check").length){e.push($(this).attr("data-filter-by"))}});return e}function f(){var e=d();$("#filter-by").on("click","li",function(){var e=$(this);e.find("i").toggleClass("fa-check",!e.find("i").hasClass("fa-check"));return false});$("#filter-by").on("hidden.bs.dropdown",function(){var a=d();var r=a.length!==e.length;if(a.length===e.length){a.forEach(function(a,n){if(a!==e[n]){r=true}})}e=d();if(r){var n=utils.params();n.filters=a;var s=l(n);ajaxify.go("admin/manage/users?"+s)}})}return t});
//# sourceMappingURL=users.js.map