"use strict";define("forum/groups/memberlist",["api"],function(e){var t={};var r;var n;var a;t.init=function(e){a=e||"groups/details";n=ajaxify.data.group.name;o();i();u()};function o(){$('[component="groups/members/add"]').on("click",function(){app.parseAndTranslate("admin/partials/groups/add-members",{},function(e){var t=[];var r=bootbox.dialog({title:"[[groups:details.add-member]]",message:e,buttons:{ok:{callback:function(){var e=[];r.find("[data-uid][data-selected]").each(function(r,n){e.push(t[$(n).attr("data-uid")])});s(e,function(){r.modal("hide")})}}}});r.on("click","[data-username]",function(){var e=$(this).attr("data-selected")==="1";if(e){$(this).removeAttr("data-selected")}else{$(this).attr("data-selected",1)}$(this).find("i").toggleClass("invisible")});r.find("input").on("keyup",function(){socket.emit("user.search",{query:$(this).val(),paginate:false},function(e,n){if(e){return app.alertError(e.message)}n.users.forEach(function(e){t[e.uid]=e});app.parseAndTranslate("admin/partials/groups/add-members","users",{users:n.users},function(e){r.find("#search-result").html(e)})})})})})}function s(t,r){function a(){t=t.filter(function(e){return!$('[component="groups/members"] [data-uid="'+e.uid+'"]').length});c(t,function(e){$('[component="groups/members"] tbody').prepend(e)});r()}var o=t.map(function(e){return e.uid});if(n==="administrators"){socket.emit("admin.user.makeAdmins",o,function(e){if(e){return app.alertError(e)}a()})}else{Promise.all(o.map(t=>e.put("/groups/"+ajaxify.data.group.slug+"/membership/"+t))).then(a)}}function i(){$('[component="groups/members/search"]').on("keyup",function(){var e=$(this).val();if(r){clearInterval(r);r=0}r=setTimeout(function(){socket.emit("groups.searchMembers",{groupName:n,query:e},function(e,t){if(e){return app.alertError(e.message)}c(t.users,function(e){$('[component="groups/members"] tbody').html(e);$('[component="groups/members"]').attr("data-nextstart",20)})})},250)})}function u(){$('[component="groups/members"] tbody').on("scroll",function(){var e=$(this);var t=(e[0].scrollHeight-e.innerHeight())*.9;if(e.scrollTop()>t&&!$('[component="groups/members/search"]').val()){m()}})}function m(){var e=$('[component="groups/members"]');if(e.attr("loading")){return}e.attr("loading",1);socket.emit("groups.loadMoreMembers",{groupName:n,after:e.attr("data-nextstart")},function(t,r){if(t){return app.alertError(t.message)}if(r&&r.users.length){p(r.users,function(){e.removeAttr("loading");e.attr("data-nextstart",r.nextStart)})}else{e.removeAttr("loading")}})}function p(e,t){e=e.filter(function(e){return!$('[component="groups/members"] [data-uid="'+e.uid+'"]').length});c(e,function(e){$('[component="groups/members"] tbody').append(e);t()})}function c(e,t){app.parseAndTranslate(a,"group.members",{group:{members:e,isOwner:ajaxify.data.group.isOwner}},t)}return t});
//# sourceMappingURL=memberlist.js.map