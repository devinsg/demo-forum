"use strict";define("admin/manage/privileges",["autocomplete","translator","benchpress","categorySelector","mousetrap"],function(e,a,i,r,t){var n={};var o;n.init=function(){o=isNaN(parseInt(ajaxify.data.selectedCategory.cid,10))?"admin":ajaxify.data.selectedCategory.cid;r.init($('[component="category-selector"]'),function(e){o=parseInt(e.cid,10);o=isNaN(o)?"admin":o;n.refreshPrivilegeTable();ajaxify.updateHistory("admin/manage/privileges/"+(o||""))});n.setupPrivilegeTable();s()};n.setupPrivilegeTable=function(){$(".privilege-table-container").on("change",'input[type="checkbox"]',function(){var e=$(this);var a=e.parent();var i=a.attr("data-privilege");var r=e.prop("checked");var t=e.parents("tr");var o=t.attr("data-group-name")||t.attr("data-uid");var l=parseInt(t.attr("data-private")||0,10);var s=t.attr("data-group-name")!==undefined;var c=e.prop("checked")===(a.attr("data-value")==="true")?null:r;if(o){if(s&&i==="groups:moderate"&&!l&&r){bootbox.confirm("[[admin/manage/privileges:alert.confirm-moderate]]",function(i){if(i){a.attr("data-delta",c);n.exposeAssumedPrivileges()}else{e.prop("checked",!e.prop("checked"))}})}else{a.attr("data-delta",c);n.exposeAssumedPrivileges()}}else{app.alertError("[[error:invalid-data]]")}});n.exposeAssumedPrivileges();n.addEvents()};n.addEvents=function(){document.getElementById("save").addEventListener("click",function(){e("save",n.commit)});document.getElementById("discard").addEventListener("click",function(){e("discard",n.discard)});$(".privilege-table-container").on("click",'[data-action="search.user"]',n.addUserToPrivilegeTable);$(".privilege-table-container").on("click",'[data-action="search.group"]',n.addGroupToPrivilegeTable);$(".privilege-table-container").on("click",'[data-action="copyToChildren"]',function(){e("copyToChildren",n.copyPrivilegesToChildren.bind(null,o,""))});$(".privilege-table-container").on("click",'[data-action="copyToChildrenGroup"]',function(){var a=$(this).parents("[data-group-name]").attr("data-group-name");e("copyToChildrenGroup",n.copyPrivilegesToChildren.bind(null,o,a))});$(".privilege-table-container").on("click",'[data-action="copyPrivilegesFrom"]',function(){n.copyPrivilegesFromCategory(o,"")});$(".privilege-table-container").on("click",'[data-action="copyPrivilegesFromGroup"]',function(){var e=$(this).parents("[data-group-name]").attr("data-group-name");n.copyPrivilegesFromCategory(o,e)});$(".privilege-table-container").on("click",'[data-action="copyToAll"]',function(){e("copyToAll",n.copyPrivilegesToAllCategories.bind(null,o,""))});$(".privilege-table-container").on("click",'[data-action="copyToAllGroup"]',function(){var a=$(this).parents("[data-group-name]").attr("data-group-name");e("copyToAllGroup",n.copyPrivilegesToAllCategories.bind(null,o,a))});t.bind("ctrl+s",function(a){e("save",n.commit);a.preventDefault()});function e(e,a){bootbox.confirm("[[admin/manage/privileges:alert.confirm-"+e+"]]<br /><br />[[admin/manage/privileges:alert.no-undo]]",function(e){if(e){a.call()}})}};n.commit=function(){var e=document.querySelector(".privilege-table-container");var a=$.map(e.querySelectorAll("td[data-delta]"),function(e){var a=e.getAttribute("data-privilege");var i=e.parentNode;var r=i.getAttribute("data-group-name")||i.getAttribute("data-uid");var t=e.getAttribute("data-delta")==="true"?1:0;return n.setPrivilege(r,a,t)});Promise.allSettled(a).then(function(){n.refreshPrivilegeTable();app.alertSuccess("[[admin/manage/privileges:alert.saved]]")})};n.discard=function(){n.refreshPrivilegeTable();app.alertSuccess("[[admin/manage/privileges:alert.discarded]]")};n.refreshPrivilegeTable=function(e){socket.emit("admin.categories.getPrivilegeSettings",o,function(r,t){if(r){return app.alertError(r.message)}ajaxify.data.privileges=t;var s=parseInt(o,10)?"admin/partials/privileges/category":"admin/partials/privileges/global";i.parse(s,{privileges:t},function(i){a.translate(i,function(a){$(".privilege-table-container").html(a);n.exposeAssumedPrivileges();l("data-group-name",e)})})})};n.exposeAssumedPrivileges=function(){var e=[];$('.privilege-table tr[data-group-name="registered-users"] td input[type="checkbox"]').parent().each(function(a,i){if($(i).find("input").prop("checked")){e.push(i.getAttribute("data-privilege"))}});e=e.concat(e.map(function(e){if(e.startsWith("groups:")){return e.slice(7)}return false})).filter(Boolean);for(var a=0,i=e.length;a<i;a+=1){var r=$('.privilege-table tr[data-group-name]:not([data-group-name="registered-users"],[data-group-name="guests"],[data-group-name="spiders"]) td[data-privilege="'+e[a]+'"] input, .privilege-table tr[data-uid] td[data-privilege="'+e[a]+'"] input');r.each(function(e,a){if(!a.checked){a.indeterminate=true}})}};n.setPrivilege=function(e,a,i){return new Promise(function(r,t){socket.emit("admin.categories.setPrivilege",{cid:isNaN(o)?0:o,privilege:a,set:i,member:e},function(e){if(e){t(e);return app.alertError(e.message)}r()})})};n.addUserToPrivilegeTable=function(){var a=bootbox.dialog({title:"[[admin/manage/categories:alert.find-user]]",message:'<input class="form-control input-lg" placeholder="[[admin/manage/categories:alert.user-search]]" />',show:true});a.on("shown.bs.modal",function(){var i=a.find("input");i.focus();e.user(i,function(e,i){u(i.item.user,function(){a.modal("hide")})})})};n.addGroupToPrivilegeTable=function(){var a=bootbox.dialog({title:"[[admin/manage/categories:alert.find-group]]",message:'<input class="form-control input-lg" placeholder="[[admin/manage/categories:alert.group-search]]" />',show:true});a.on("shown.bs.modal",function(){var i=a.find("input");i.focus();e.group(i,function(e,i){if(i.item.group.name==="administrators"){return app.alert({type:"warning",message:"[[admin/manage/privileges:alert.admin-warning]]"})}c(i.item.group.name,function(){a.modal("hide")})})})};n.copyPrivilegesToChildren=function(e,a){socket.emit("admin.categories.copyPrivilegesToChildren",{cid:e,group:a},function(e){if(e){return app.alertError(e.message)}app.alertSuccess("[[admin/manage/categories:privileges.copy-success]]")})};n.copyPrivilegesFromCategory=function(e,a){r.modal(ajaxify.data.categories.slice(1),function(i){socket.emit("admin.categories.copyPrivilegesFrom",{toCid:e,fromCid:i,group:a},function(e){if(e){return app.alertError(e.message)}ajaxify.refresh()})})};n.copyPrivilegesToAllCategories=function(e,a){socket.emit("admin.categories.copyPrivilegesToAllCategories",{cid:e,group:a},function(e){if(e){return app.alertError(e.message)}app.alertSuccess("[[admin/manage/categories:privileges.copy-success]]")})};function l(e,a){if(a){var i=$("["+e+"]").filter(function(){return $(this).attr(e)===String(a)});if(i.length){i.addClass("selected");return true}}return false}function s(){if(ajaxify.data.group){if(l("data-group-name",ajaxify.data.group)){return}c(ajaxify.data.group)}}function c(e,i){i=i||function(){};var r=document.querySelector('.privilege-table [data-group-name="'+e+'"]');if(r){l("data-group-name",e);return i()}var t=ajaxify.data.privileges.keys.groups.reduce(function(e,a){e[a]=false;return e},{});app.parseAndTranslate("admin/partials/privileges/"+(isNaN(o)||o===0?"global":"category"),"privileges.groups",{privileges:{groups:[{name:e,nameEscaped:a.escape(e),privileges:t}]}},function(a){var r=document.querySelector(".privilege-table");var t=r.querySelectorAll("tbody tr");a.insertBefore(t[t.length-1]);n.exposeAssumedPrivileges();l("data-group-name",e);i()})}function u(e,a){a=a||function(){};var i=document.querySelector('.privilege-table [data-uid="'+e.uid+'"]');if(i){l("data-uid",e.uid);return a()}var r=ajaxify.data.privileges.keys.users.reduce(function(e,a){e[a]=false;return e},{});app.parseAndTranslate("admin/partials/privileges/"+(isNaN(o)?"global":"category"),"privileges.users",{privileges:{users:[{picture:e.picture,username:e.username,uid:e.uid,"icon:text":e["icon:text"],"icon:bgColor":e["icon:bgColor"],privileges:r}]}},function(i){var r=document.querySelectorAll(".privilege-table");var t=r[1].querySelectorAll("tbody tr");i.insertBefore(t[t.length-1]);l("data-uid",e.uid);a()})}return n});
//# sourceMappingURL=privileges.js.map