!function(e){"object"==typeof module&&module.exports?module.exports=e():"function"==typeof define&&define.amd&&define(e)}(function(){function i(e,t,s,r,a){return(s(t&&t.breadcrumbs&&t.breadcrumbs.length)?'\r\n<ol class="breadcrumb" itemscope="itemscope" itemprop="breadcrumb" itemtype="http://schema.org/BreadcrumbList">\r\n\t'+i.blocks.breadcrumbs(e,t,s,r,a)+"\r\n</ol>\r\n":"")+'\r\n\r\n<div data-widget-area="header">\r\n\t'+i.blocks["widgets.header"](e,t,s,r,a)+'\r\n</div>\r\n<div class="row">\r\n\t<div class="'+(s(t&&t.widgets&&t.widgets.sidebar&&t.widgets.sidebar.length)?"col-lg-9 col-sm-12":"col-lg-12")+'">\r\n\t\t<h1 class="categories-title">[[pages:categories]]</h1>\r\n\t\t<ul class="categories" itemscope itemtype="http://www.schema.org/ItemList">\r\n\t\t\t'+i.blocks.categories(e,t,s,r,a)+'\r\n\t\t</ul>\r\n\t</div>\r\n\t<div data-widget-area="sidebar" class="col-lg-3 col-sm-12 '+(s(t&&t.widgets&&t.widgets.sidebar&&t.widgets.sidebar.length)?"":"hidden")+'">\r\n\t\t'+i.blocks["widgets.sidebar"](e,t,s,r,a)+'\r\n\t</div>\r\n</div>\r\n<div data-widget-area="footer">\r\n\t'+i.blocks["widgets.footer"](e,t,s,r,a)+"\r\n</div>\r\n"}return i.blocks={"widgets.footer":function(e,t,s,r){return r(s(t&&t.widgets&&t.widgets.footer),function(e){return"\r\n\t"+s(t&&t.widgets&&t.widgets.footer&&t.widgets.footer[e]&&t.widgets.footer[e].html)+"\r\n\t"})},"widgets.sidebar":function(e,t,s,r){return r(s(t&&t.widgets&&t.widgets.sidebar),function(e){return"\r\n\t\t"+s(t&&t.widgets&&t.widgets.sidebar&&t.widgets.sidebar[e]&&t.widgets.sidebar[e].html)+"\r\n\t\t"})},categories:function(r,a,i,e,o){return e(i(a&&a.categories),function(s){return'\r\n\t\t\t<li component="categories/category" data-cid="'+r.__escape(i(a&&a.categories&&a.categories[s]&&a.categories[s].cid))+'" data-numRecentReplies="1" class="row clearfix">\r\n\t<meta itemprop="name" content="'+r.__escape(i(a&&a.categories&&a.categories[s]&&a.categories[s].name))+'">\r\n\r\n\t<div class="content col-xs-12 '+(i(a&&a.config&&a.config.hideCategoryLastPost)?"col-md-10 col-sm-12":"col-md-7 col-sm-9")+'">\r\n\t\t<div class="icon pull-left" style="'+r.__escape(o(a,r,"generateCategoryBackground",[i(a&&a.categories&&a.categories[s])]))+'">\r\n\t\t\t<i class="fa fa-fw '+r.__escape(i(a&&a.categories&&a.categories[s]&&a.categories[s].icon))+'"></i>\r\n\t\t</div>\r\n\r\n\t\t<h2 class="title">\r\n\t\t\t'+(i(a&&a.categories&&a.categories[s]&&a.categories[s].isSection)?"\r\n"+r.__escape(i(a&&a.categories&&a.categories[s]&&a.categories[s].name))+"\r\n":"\r\n"+(i(a&&a.categories&&a.categories[s]&&a.categories[s].link)?'\r\n<a href="'+r.__escape(i(a&&a.categories&&a.categories[s]&&a.categories[s].link))+'" itemprop="url">\r\n':'\r\n<a href="'+r.__escape(i(a&&a.config&&a.config.relative_path))+"/category/"+r.__escape(i(a&&a.categories&&a.categories[s]&&a.categories[s].slug))+'" itemprop="url">\r\n')+"\r\n"+r.__escape(i(a&&a.categories&&a.categories[s]&&a.categories[s].name))+"\r\n</a>\r\n")+"\r\n\t\t</h2>\r\n\t\t<div>\r\n\t\t\t"+(i(a&&a.categories&&a.categories[s]&&a.categories[s].descriptionParsed)?'\r\n\t\t\t<div class="description">\r\n\t\t\t\t'+r.__escape(i(a&&a.categories&&a.categories[s]&&a.categories[s].descriptionParsed))+"\r\n\t\t\t</div>\r\n\t\t\t":"")+"\r\n\t\t\t"+(i(a&&a.config&&a.config.hideSubCategories)?"":"\r\n\t\t\t"+r.__escape(o(a,r,"generateChildrenCategories",[i(a&&a.categories&&a.categories[s])]))+"\r\n\t\t\t")+'\r\n\t\t</div>\r\n\t\t<span class="visible-xs pull-right">\r\n\t\t\t'+(i(a&&a.categories&&a.categories[s]&&a.categories[s].teaser&&a.categories[s].teaser.timestampISO)?'\r\n\t\t\t<a class="permalink" href="'+r.__escape(i(a&&a.categories&&a.categories[s]&&a.categories[s].teaser&&a.categories[s].teaser.url))+'">\r\n\t\t\t\t<small class="timeago" title="'+r.__escape(i(a&&a.categories&&a.categories[s]&&a.categories[s].teaser&&a.categories[s].teaser.timestampISO))+'"></small>\r\n\t\t\t</a>\r\n\t\t\t':"")+"\r\n\t\t</span>\r\n\t</div>\r\n\r\n\t"+(i(a&&a.categories&&a.categories[s]&&a.categories[s].link)?"":'\r\n\t<div class="col-md-1 hidden-sm hidden-xs stats">\r\n\t\t<span class="'+r.__escape(i(a&&a.categories&&a.categories[s]&&a.categories[s]["unread-class"]))+' human-readable-number" title="'+r.__escape(i(a&&a.categories&&a.categories[s]&&a.categories[s].totalTopicCount))+'">'+r.__escape(i(a&&a.categories&&a.categories[s]&&a.categories[s].totalTopicCount))+'</span><br />\r\n\t\t<small>[[global:topics]]</small>\r\n\t</div>\r\n\t<div class="col-md-1 hidden-sm hidden-xs stats">\r\n\t\t<span class="'+r.__escape(i(a&&a.categories&&a.categories[s]&&a.categories[s]["unread-class"]))+' human-readable-number" title="'+r.__escape(i(a&&a.categories&&a.categories[s]&&a.categories[s].totalPostCount))+'">'+r.__escape(i(a&&a.categories&&a.categories[s]&&a.categories[s].totalPostCount))+"</span><br />\r\n\t\t<small>[[global:posts]]</small>\r\n\t</div>\r\n\t"+(i(a&&a.config&&a.config.hideCategoryLastPost)?"":'\r\n\t<div class="col-md-3 col-sm-3 teaser hidden-xs" component="topic/teaser">\r\n\t\t<div class="card background-link-container" style="border-color: '+r.__escape(i(a&&a.categories&&a.categories[s]&&a.categories[s].bgColor))+'">\r\n\t'+e(i(a&&a.categories&&a.categories[s]&&a.categories[s].posts),function(e,t){return"\r\n\t"+(0===t?'\r\n\t<div component="category/posts">\r\n\t\t<a class="background-link" href="'+r.__escape(i(a&&a.config&&a.config.relative_path))+"/topic/"+r.__escape(i(a&&a.categories&&a.categories[s]&&a.categories[s].posts&&a.categories[s].posts[e]&&a.categories[s].posts[e].topic&&a.categories[s].posts[e].topic.slug))+(i(a&&a.categories&&a.categories[s]&&a.categories[s].posts&&a.categories[s].posts[e]&&a.categories[s].posts[e].index)?"/"+r.__escape(i(a&&a.categories&&a.categories[s]&&a.categories[s].posts&&a.categories[s].posts[e]&&a.categories[s].posts[e].index)):"")+'"></a>\r\n\t\t<p>\r\n\t\t\t<a href="'+r.__escape(i(a&&a.config&&a.config.relative_path))+"/user/"+r.__escape(i(a&&a.categories&&a.categories[s]&&a.categories[s].posts&&a.categories[s].posts[e]&&a.categories[s].posts[e].user&&a.categories[s].posts[e].user.userslug))+'">'+r.__escape(o(a,r,"buildAvatar",[i(a&&a.categories&&a.categories[s]&&a.categories[s].posts&&a.categories[s].posts[e]&&a.categories[s].posts[e].user),"sm",i(a&&a.true)]))+'</a>\r\n\t\t\t<a class="permalink" href="'+r.__escape(i(a&&a.config&&a.config.relative_path))+"/topic/"+r.__escape(i(a&&a.categories&&a.categories[s]&&a.categories[s].posts&&a.categories[s].posts[e]&&a.categories[s].posts[e].topic&&a.categories[s].posts[e].topic.slug))+(i(a&&a.categories&&a.categories[s]&&a.categories[s].posts&&a.categories[s].posts[e]&&a.categories[s].posts[e].index)?"/"+r.__escape(i(a&&a.categories&&a.categories[s]&&a.categories[s].posts&&a.categories[s].posts[e]&&a.categories[s].posts[e].index)):"")+'">\r\n\t\t\t\t<small class="timeago" title="'+r.__escape(i(a&&a.categories&&a.categories[s]&&a.categories[s].posts&&a.categories[s].posts[e]&&a.categories[s].posts[e].timestampISO))+'"></small>\r\n\t\t\t</a>\r\n\t\t</p>\r\n\t\t<div class="post-content">\r\n\t\t\t'+r.__escape(i(a&&a.categories&&a.categories[s]&&a.categories[s].posts&&a.categories[s].posts[e]&&a.categories[s].posts[e].content))+"\r\n\t\t</div>\r\n\t</div>\r\n\t":"")+"\r\n\t"})+"\r\n\r\n\t"+(i(a&&a.categories&&a.categories[s]&&a.categories[s].posts&&a.categories[s].posts.length)?"":'\r\n\t<div component="category/posts">\r\n\t\t<div class="post-content">\r\n\t\t\t[[category:no_new_posts]]\r\n\t\t</div>\r\n\t</div>\r\n\t')+"\r\n</div>\r\n\r\n\t</div>\r\n\t")+"\r\n\t")+"\r\n</li>\r\n\r\n\t\t\t"})},"widgets.header":function(e,t,s,r){return r(s(t&&t.widgets&&t.widgets.header),function(e){return"\r\n\t"+s(t&&t.widgets&&t.widgets.header&&t.widgets.header[e]&&t.widgets.header[e].html)+"\r\n\t"})},breadcrumbs:function(r,a,i,e){return e(i(a&&a.breadcrumbs),function(e,t,s){return"\r\n\t<li"+(t===s-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemprop="itemListElement" itemtype="http://schema.org/ListItem" '+(t===s-1?'class="active"':"")+'>\r\n\t\t<meta itemprop="position" content="'+r.__escape(t)+'" />\r\n\t\t'+(t!==s-1?'<a href="'+r.__escape(i(a&&a.breadcrumbs&&a.breadcrumbs[e]&&a.breadcrumbs[e].url))+'" itemprop="item">':"")+'\r\n\t\t\t<span itemprop="name">\r\n\t\t\t\t'+r.__escape(i(a&&a.breadcrumbs&&a.breadcrumbs[e]&&a.breadcrumbs[e].text))+"\r\n\t\t\t\t"+(t===s-1?"\r\n\t\t\t\t"+(i(a&&a["feeds:disableRSS"])?"":"\r\n\t\t\t\t"+(i(a&&a.rssFeedUrl)?'<a target="_blank" href="'+r.__escape(i(a&&a.rssFeedUrl))+'" itemprop="item"><i class="fa fa-rss-square"></i></a>':""))+"\r\n\t\t\t\t":"")+"\r\n\t\t\t</span>\r\n\t\t"+(t!==s-1?"</a>":"")+"\r\n\t</li>\r\n\t"})}},i});