!function(e){"object"==typeof module&&module.exports?module.exports=e():"function"==typeof define&&define.amd&&define(e)}(function(){return function(e,s,t,a,n){return'<li component="post" class="posts-list-item row'+(t(s&&s.deleted)||t(s&&s.topic&&s.topic.deleted)?" deleted":"")+'" data-pid="'+e.__escape(t(s&&s.pid))+'" data-uid="'+e.__escape(t(s&&s.uid))+'">\r\n    <div class="col-lg-11 col-sm-10 col-xs-9 post-body">\r\n        <a class="topic-title" href="'+e.__escape(t(s&&s.config&&s.config.relative_path))+"/post/"+e.__escape(t(s&&s.pid))+'">\r\n            '+(t(s&&s.isMainPost)?"":"RE: ")+e.__escape(t(s&&s.topic&&s.topic.title))+'\r\n        </a>\r\n\r\n        <div component="post/content" class="content">\r\n            '+e.__escape(t(s&&s.content))+'\r\n        </div>\r\n\r\n        <small class="topic-category"><a href="'+e.__escape(t(s&&s.config&&s.config.relative_path))+"/category/"+e.__escape(t(s&&s.category&&s.category.slug))+'">[[global:posted_in, '+e.__escape(t(s&&s.category&&s.category.name))+']]</a></small>\r\n\r\n        <div class="post-info">\r\n            <a href="'+e.__escape(t(s&&s.config&&s.config.relative_path))+"/user/"+e.__escape(t(s&&s.user&&s.user.userslug))+'">'+e.__escape(n(s,e,"buildAvatar",[t(s&&s.user),"md",t(s&&s.true),"user-img"]))+'</a>\r\n\r\n            <div class="post-author">\r\n                <a href="'+e.__escape(t(s&&s.config&&s.config.relative_path))+"/user/"+e.__escape(t(s&&s.user&&s.user.userslug))+'">'+e.__escape(t(s&&s.user&&s.user.username))+'</a><br />\r\n                <span class="timeago" title="'+e.__escape(t(s&&s.timestampISO))+'"></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</li>'}});