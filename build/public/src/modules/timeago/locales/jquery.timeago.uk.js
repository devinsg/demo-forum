(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof module==="object"&&typeof module.exports==="object"){e(require("jquery"))}else{e(jQuery)}})(function(e){function n(e,n,r,t){var u=e%10;if(u===1&&(e===1||e>20)){return n}else if(u>1&&u<5&&(e>20||e<10)){return r}else{return t}}e.timeago.settings.strings={prefixAgo:null,prefixFromNow:"через",suffixAgo:"тому",suffixFromNow:null,seconds:"менше хвилини",minute:"хвилина",minutes:function(e){return n(e,"%d хвилина","%d хвилини","%d хвилин")},hour:"година",hours:function(e){return n(e,"%d година","%d години","%d годин")},day:"день",days:function(e){return n(e,"%d день","%d дні","%d днів")},month:"місяць",months:function(e){return n(e,"%d місяць","%d місяці","%d місяців")},year:"рік",years:function(e){return n(e,"%d рік","%d роки","%d років")}}});
//# sourceMappingURL=jquery.timeago.uk.js.map