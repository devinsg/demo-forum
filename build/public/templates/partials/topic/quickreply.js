!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){return function(t,e,s,n,r){return(s(e&&e.privileges&&e.privileges["topics:reply"])?'\r\n<div class="clearfix quick-reply">\r\n\t<div class="icon pull-left hidden-xs">\r\n\t\t<a href="'+(s(e&&e.posts&&e.posts.user&&e.posts.user.userslug)?t.__escape(s(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(s(e&&e.posts&&e.posts.user&&e.posts.user.userslug)):"#")+'">\r\n\t\t\t'+t.__escape(r(e,t,"buildAvatar",[s(e&&e.loggedInUser),"46",s(e&&e.true),"","user/picture"]))+"\r\n\t\t\t"+(s(e&&e.loggedInUser&&e.loggedInUser.status)?'\r\n\t\t\t<i component="user/status" class="fa fa-circle status '+t.__escape(s(e&&e.loggedInUser&&e.loggedInUser.status))+'" title="[[global:'+t.__escape(s(e&&e.loggedInUser&&e.loggedInUser.status))+']]"></i>\r\n\t\t\t':"")+'\r\n\t\t</a>\r\n\t</div>\r\n\t<form method="post" action="'+t.__escape(s(e&&e.config&&e.config.relative_path))+'/compose">\r\n\t\t<input type="hidden" name="tid" value="'+t.__escape(s(e&&e.tid))+'" />\r\n\t\t<input type="hidden" name="_csrf" value="'+t.__escape(s(e&&e.config&&e.config.csrf_token))+'" />\r\n\t\t<div class="quickreply-message">\r\n\t\t\t<textarea name="content" component="topic/quickreply/text" class="form-control" rows="5"></textarea>\r\n\t\t</div>\r\n\t\t<button type="submit" component="topic/quickreply/button" class="btn btn-primary pull-right">[[persona:post-quick-reply]]</button>\r\n\t</form>\r\n</div>\r\n':"")+"\r\n"}});