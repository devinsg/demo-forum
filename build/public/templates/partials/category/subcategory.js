!function(e){"object"==typeof module&&module.exports?module.exports=e():"function"==typeof define&&define.amd&&define(e)}(function(){function i(e,n,t,r,c){return'<div class="subcategory">\r\n\t'+(t(n&&n.children&&n.children.length)?"<p>[[category:subcategories]]</p>":"")+'\r\n\r\n\t<ul class="categories" itemscope itemtype="http://www.schema.org/ItemList">\r\n\t\t'+i.blocks.children(e,n,t,r,c)+"\r\n\t</ul>\r\n</div>"}return i.blocks={children:function(r,c,i,e,l){return e(i(c&&c.children),function(t){return'\r\n\t\t<li component="categories/category" data-cid="'+r.__escape(i(c&&c.children&&c.children[t]&&c.children[t].cid))+'" data-numRecentReplies="1" class="row clearfix">\r\n\t<meta itemprop="name" content="'+r.__escape(i(c&&c.children&&c.children[t]&&c.children[t].name))+'">\r\n\r\n\t<div class="content col-xs-12 '+(i(c&&c.config&&c.config.hideCategoryLastPost)?"col-md-10 col-sm-12":"col-md-7 col-sm-9")+'">\r\n\t\t<div class="icon pull-left" style="'+r.__escape(l(c,r,"generateCategoryBackground",[i(c&&c.children&&c.children[t])]))+'">\r\n\t\t\t<i class="fa fa-fw '+r.__escape(i(c&&c.children&&c.children[t]&&c.children[t].icon))+'"></i>\r\n\t\t</div>\r\n\r\n\t\t<h2 class="title">\r\n\t\t\t'+(i(c&&c.children&&c.children[t]&&c.children[t].isSection)?"\r\n"+r.__escape(i(c&&c.children&&c.children[t]&&c.children[t].name))+"\r\n":"\r\n"+(i(c&&c.children&&c.children[t]&&c.children[t].link)?'\r\n<a href="'+r.__escape(i(c&&c.children&&c.children[t]&&c.children[t].link))+'" itemprop="url">\r\n':'\r\n<a href="'+r.__escape(i(c&&c.config&&c.config.relative_path))+"/category/"+r.__escape(i(c&&c.children&&c.children[t]&&c.children[t].slug))+'" itemprop="url">\r\n')+"\r\n"+r.__escape(i(c&&c.children&&c.children[t]&&c.children[t].name))+"\r\n</a>\r\n")+"\r\n\t\t</h2>\r\n\t\t<div>\r\n\t\t\t"+(i(c&&c.children&&c.children[t]&&c.children[t].descriptionParsed)?'\r\n\t\t\t<div class="description">\r\n\t\t\t\t'+r.__escape(i(c&&c.children&&c.children[t]&&c.children[t].descriptionParsed))+"\r\n\t\t\t</div>\r\n\t\t\t":"")+"\r\n\t\t\t"+(i(c&&c.config&&c.config.hideSubCategories)?"":"\r\n\t\t\t"+r.__escape(l(c,r,"generateChildrenCategories",[i(c&&c.children&&c.children[t])]))+"\r\n\t\t\t")+'\r\n\t\t</div>\r\n\t\t<span class="visible-xs pull-right">\r\n\t\t\t'+(i(c&&c.children&&c.children[t]&&c.children[t].teaser&&c.children[t].teaser.timestampISO)?'\r\n\t\t\t<a class="permalink" href="'+r.__escape(i(c&&c.children&&c.children[t]&&c.children[t].teaser&&c.children[t].teaser.url))+'">\r\n\t\t\t\t<small class="timeago" title="'+r.__escape(i(c&&c.children&&c.children[t]&&c.children[t].teaser&&c.children[t].teaser.timestampISO))+'"></small>\r\n\t\t\t</a>\r\n\t\t\t':"")+"\r\n\t\t</span>\r\n\t</div>\r\n\r\n\t"+(i(c&&c.children&&c.children[t]&&c.children[t].link)?"":'\r\n\t<div class="col-md-1 hidden-sm hidden-xs stats">\r\n\t\t<span class="'+r.__escape(i(c&&c.children&&c.children[t]&&c.children[t]["unread-class"]))+' human-readable-number" title="'+r.__escape(i(c&&c.children&&c.children[t]&&c.children[t].totalTopicCount))+'">'+r.__escape(i(c&&c.children&&c.children[t]&&c.children[t].totalTopicCount))+'</span><br />\r\n\t\t<small>[[global:topics]]</small>\r\n\t</div>\r\n\t<div class="col-md-1 hidden-sm hidden-xs stats">\r\n\t\t<span class="'+r.__escape(i(c&&c.children&&c.children[t]&&c.children[t]["unread-class"]))+' human-readable-number" title="'+r.__escape(i(c&&c.children&&c.children[t]&&c.children[t].totalPostCount))+'">'+r.__escape(i(c&&c.children&&c.children[t]&&c.children[t].totalPostCount))+"</span><br />\r\n\t\t<small>[[global:posts]]</small>\r\n\t</div>\r\n\t"+(i(c&&c.config&&c.config.hideCategoryLastPost)?"":'\r\n\t<div class="col-md-3 col-sm-3 teaser hidden-xs" component="topic/teaser">\r\n\t\t<div class="card background-link-container" style="border-color: '+r.__escape(i(c&&c.children&&c.children[t]&&c.children[t].bgColor))+'">\r\n\t'+e(i(c&&c.children&&c.children[t]&&c.children[t].posts),function(e,n){return"\r\n\t"+(0===n?'\r\n\t<div component="category/posts">\r\n\t\t<a class="background-link" href="'+r.__escape(i(c&&c.config&&c.config.relative_path))+"/topic/"+r.__escape(i(c&&c.children&&c.children[t]&&c.children[t].posts&&c.children[t].posts[e]&&c.children[t].posts[e].topic&&c.children[t].posts[e].topic.slug))+(i(c&&c.children&&c.children[t]&&c.children[t].posts&&c.children[t].posts[e]&&c.children[t].posts[e].index)?"/"+r.__escape(i(c&&c.children&&c.children[t]&&c.children[t].posts&&c.children[t].posts[e]&&c.children[t].posts[e].index)):"")+'"></a>\r\n\t\t<p>\r\n\t\t\t<a href="'+r.__escape(i(c&&c.config&&c.config.relative_path))+"/user/"+r.__escape(i(c&&c.children&&c.children[t]&&c.children[t].posts&&c.children[t].posts[e]&&c.children[t].posts[e].user&&c.children[t].posts[e].user.userslug))+'">'+r.__escape(l(c,r,"buildAvatar",[i(c&&c.children&&c.children[t]&&c.children[t].posts&&c.children[t].posts[e]&&c.children[t].posts[e].user),"sm",i(c&&c.true)]))+'</a>\r\n\t\t\t<a class="permalink" href="'+r.__escape(i(c&&c.config&&c.config.relative_path))+"/topic/"+r.__escape(i(c&&c.children&&c.children[t]&&c.children[t].posts&&c.children[t].posts[e]&&c.children[t].posts[e].topic&&c.children[t].posts[e].topic.slug))+(i(c&&c.children&&c.children[t]&&c.children[t].posts&&c.children[t].posts[e]&&c.children[t].posts[e].index)?"/"+r.__escape(i(c&&c.children&&c.children[t]&&c.children[t].posts&&c.children[t].posts[e]&&c.children[t].posts[e].index)):"")+'">\r\n\t\t\t\t<small class="timeago" title="'+r.__escape(i(c&&c.children&&c.children[t]&&c.children[t].posts&&c.children[t].posts[e]&&c.children[t].posts[e].timestampISO))+'"></small>\r\n\t\t\t</a>\r\n\t\t</p>\r\n\t\t<div class="post-content">\r\n\t\t\t'+r.__escape(i(c&&c.children&&c.children[t]&&c.children[t].posts&&c.children[t].posts[e]&&c.children[t].posts[e].content))+"\r\n\t\t</div>\r\n\t</div>\r\n\t":"")+"\r\n\t"})+"\r\n\r\n\t"+(i(c&&c.children&&c.children[t]&&c.children[t].posts&&c.children[t].posts.length)?"":'\r\n\t<div component="category/posts">\r\n\t\t<div class="post-content">\r\n\t\t\t[[category:no_new_posts]]\r\n\t\t</div>\r\n\t</div>\r\n\t')+"\r\n</div>\r\n\r\n\t</div>\r\n\t")+"\r\n\t")+"\r\n</li>\r\n\r\n\t\t"})}},i});