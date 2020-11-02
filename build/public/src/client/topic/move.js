"use strict";define("forum/topic/move",["categorySelector","alerts"],function(e,t){var o={};var i;var n;o.init=function(e,t,i){o.tids=e;o.currentCid=t;o.onComplete=i;o.moveAll=!e;socket.emit("categories.getMoveCategories",c)};function c(t,n){if(t){return app.alertError(t.message)}r(n,function(){i.on("hidden.bs.modal",function(){i.remove()});i.find("#move-confirm").addClass("hide");if(o.moveAll||o.tids&&o.tids.length>1){i.find(".modal-header h3").translateText("[[topic:move_topics]]")}e.init(i.find('[component="category-selector"]'),a);i.find("#move_thread_commit").on("click",d);i.modal("show")})}function r(e,t){app.parseAndTranslate("partials/move_thread_modal",{categories:e},function(e){i=$(e);t()})}function a(e){n=e;i.find("#move_thread_commit").prop("disabled",false)}function d(){var e=i.find("#move_thread_commit");if(!e.prop("disabled")&&n&&n.cid){e.prop("disabled",true);i.modal("hide");t.alert({alert_id:"tids_move_"+o.tids.join("-"),title:"[[topic:thread_tools.move]]",message:"[[topic:topic_move_success, "+n.name+"]]",type:"success",timeout:1e4,timeoutfn:function(){s()},clickfn:function(e,t){delete t.timeoutfn;app.alertSuccess("[[topic:topic_move_undone]]")}})}}function s(){var e={tids:o.tids,cid:n.cid,currentCid:o.currentCid};$(window).trigger("action:topic.move",e);socket.emit(o.moveAll?"topics.moveAll":"topics.move",e,function(e){if(e){return app.alertError(e.message)}if(typeof o.onComplete==="function"){o.onComplete()}})}return o});
//# sourceMappingURL=move.js.map