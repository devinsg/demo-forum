!function(i){"object"==typeof module&&module.exports?module.exports=i():"function"==typeof define&&define.amd&&define(i)}(function(){function s(i,t,n,o,a){return"\r\n"+(n(t&&t.notifications&&t.notifications.length)?"":'\r\n<li class="no-notifs"><a href="#">[[notifications:no_notifs]]</a></li>\r\n')+"\r\n\r\n"+s.blocks.notifications(i,t,n,o,a)+"\r\n"}return s.blocks={notifications:function(t,n,o,i){return i(o(n&&n.notifications),function(i){return'\r\n<li class="'+t.__escape(o(n&&n.notifications&&n.notifications[i]&&n.notifications[i].readClass))+'" data-nid="'+t.__escape(o(n&&n.notifications&&n.notifications[i]&&n.notifications[i].nid))+'" data-path="'+t.__escape(o(n&&n.notifications&&n.notifications[i]&&n.notifications[i].path))+'" '+(o(n&&n.notifications&&n.notifications[i]&&n.notifications[i].pid)?' data-pid="'+t.__escape(o(n&&n.notifications&&n.notifications[i]&&n.notifications[i].pid))+'"':"")+(o(n&&n.notifications&&n.notifications[i]&&n.notifications[i].tid)?' data-tid="'+t.__escape(o(n&&n.notifications&&n.notifications[i]&&n.notifications[i].tid))+'"':"")+">\r\n\t"+(o(n&&n.notifications&&n.notifications[i]&&n.notifications[i].image)?"\r\n\t"+(o(n&&n.notifications&&n.notifications[i]&&n.notifications[i].from)?'\r\n\t<a href="'+t.__escape(o(n&&n.config&&n.config.relative_path))+"/user/"+t.__escape(o(n&&n.notifications&&n.notifications[i]&&n.notifications[i].user&&n.notifications[i].user.userslug))+'"><img class="pull-left user-img avatar avatar-md avatar-rounded"src="'+t.__escape(o(n&&n.notifications&&n.notifications[i]&&n.notifications[i].image))+'" /></a>\r\n\t':"")+"\r\n\t":'\r\n\t<a href="'+t.__escape(o(n&&n.config&&n.config.relative_path))+"/user/"+t.__escape(o(n&&n.notifications&&n.notifications[i]&&n.notifications[i].user&&n.notifications[i].user.userslug))+'"><div class="pull-left avatar avatar-md avatar-rounded" style="background-color: '+t.__escape(o(n&&n.notifications&&n.notifications[i]&&n.notifications[i].user&&n.notifications[i].user["icon:bgColor"]))+';">'+t.__escape(o(n&&n.notifications&&n.notifications[i]&&n.notifications[i].user&&n.notifications[i].user["icon:text"]))+"</div></a>\r\n\t")+'\r\n\r\n\t<div class="pull-right mark-read" aria-label="Mark Read"></div>\r\n\t<a href="'+t.__escape(o(n&&n.notifications&&n.notifications[i]&&n.notifications[i].path))+'">\r\n\t\t<span class="pull-right relTime">'+t.__escape(o(n&&n.notifications&&n.notifications[i]&&n.notifications[i].timeago))+'</span>\r\n\t\t<span class="text">'+t.__escape(o(n&&n.notifications&&n.notifications[i]&&n.notifications[i].bodyShort))+'</span>\r\n\t</a>\r\n\t<div class="clear"></div>\r\n</li>\r\n'})}},s});