(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof module==="object"&&typeof module.exports==="object"){e(require("jquery"))}else{e(jQuery)}})(function(e){var n=function(e,n,u,d){var t;t=e%10;if(t===1&&(e===1||e>20)){return n}else if(t>1&&t<5&&(e>20||e<10)){return u}else{return d}};e.timeago.settings.strings={prefixAgo:"prije",prefixFromNow:"za",suffixAgo:null,suffixFromNow:null,second:"sekundu",seconds:function(e){return n(e,"%d sekundu","%d sekunde","%d sekundi")},minute:"oko minutu",minutes:function(e){return n(e,"%d minutu","%d minute","%d minuta")},hour:"oko jedan sat",hours:function(e){return n(e,"%d sat","%d sata","%d sati")},day:"jedan dan",days:function(e){return n(e,"%d dan","%d dana","%d dana")},month:"mjesec dana",months:function(e){return n(e,"%d mjesec","%d mjeseca","%d mjeseci")},year:"prije godinu dana",years:function(e){return n(e,"%d godinu","%d godine","%d godina")},wordSeparator:" "}});
//# sourceMappingURL=jquery.timeago.hr.js.map