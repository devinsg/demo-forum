!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function s(t,e,a,r,n){return'<div class="account">\r\n\t'+(a(e&&e.breadcrumbs&&e.breadcrumbs.length)?'\r\n<ol class="breadcrumb" itemscope="itemscope" itemprop="breadcrumb" itemtype="http://schema.org/BreadcrumbList">\r\n\t'+s.blocks.breadcrumbs(t,e,a,r,n)+"\r\n</ol>\r\n":"")+'\r\n\r\n\r\n<div class="cover" component="account/cover" style="background-image: url('+t.__escape(a(e&&e["cover:url"]))+"); background-position: "+t.__escape(a(e&&e["cover:position"]))+';">\r\n\t<div class="avatar-wrapper" data-uid="'+t.__escape(a(e&&e.uid))+'">\r\n\t\t'+(a(e&&e.picture)?'\r\n\t\t<img src="'+t.__escape(a(e&&e.picture))+'" class="avatar avatar-xl avatar-rounded" />\r\n\t\t':'\r\n\t\t<div class="avatar avatar-xl avatar-rounded" style="background-color: '+t.__escape(a(e&&e["icon:bgColor"]))+';" title="'+t.__escape(a(e&&e.username))+'">'+t.__escape(a(e&&e["icon:text"]))+"</div>\r\n\t\t")+'\r\n\t\t<i component="user/status" class="fa fa-circle status '+t.__escape(a(e&&e.status))+'" title="[[global:'+t.__escape(a(e&&e.status))+']]"></i>\r\n\r\n\t\t'+(a(e&&e.loggedIn)?"\r\n\t\t"+(a(e&&e.isSelf)?"":'\r\n\t\t<button class="btn-morph fab '+(a(e&&e.isFollowing)?"heart":"plus")+'" title="'+(a(e&&e.isFollowing)?"[[global:unfollow]]":"[[global:follow]]")+'">\r\n\t\t\t<span>\r\n\t\t\t\t<span class="s1"></span>\r\n\t\t\t\t<span class="s2"></span>\r\n\t\t\t\t<span class="s3"></span>\r\n\t\t\t</span>\r\n\t\t</button>\r\n\t\t')+"\r\n\t\t":"")+'\r\n\t</div>\r\n\r\n\t<div class="container">\r\n\t\t<div class="btn-group account-fab bottom-sheet">\r\n\t<button type="button" class="fab dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\r\n\t\t<i class="fa fa-ellipsis-v"></i>\r\n\t</button>\r\n\t<ul class="dropdown-menu dropdown-menu-right">\r\n\t\t'+(a(e&&e.loggedIn)?"\r\n\t\t"+(a(e&&e.isSelf)?"":"\r\n\t\t"+(a(e&&e.banned)?"":"\r\n\t\t"+(a(e&&e.config&&e.config.disableChat)?"":'\r\n\t\t<li class="'+(a(e&&e.hasPrivateChat)?"":"hidden")+'">\r\n\t\t\t<a component="account/chat" href="#">[[user:chat_with, '+t.__escape(a(e&&e.username))+']]</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a component="account/new-chat" href="#">[[user:new_chat_with, '+t.__escape(a(e&&e.username))+"]]</a>\r\n\t\t</li>\r\n\t\t")+'\r\n\t\t<li>\r\n\t\t\t<a component="account/flag" href="#">[[user:flag-profile]]</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a component="account/block" href="#">'+(a(e&&e.isBlocked)?"[[user:unblock_user]]":"[[user:block_user]]")+'</a>\r\n\t\t</li>\r\n\t\t<li role="separator" class="divider"></li>\r\n\t\t')+"\r\n\t\t")+"\r\n\t\t":"")+'\r\n\t\t<li>\r\n\t\t\t<a href="'+t.__escape(a(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(a(e&&e.userslug))+'" class="inline-block" id="profile">[[user:profile]]</a>\r\n\t\t</li>\r\n\t\t'+(a(e&&e.showHidden)?'\r\n\t\t<li><a href="'+t.__escape(a(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(a(e&&e.userslug))+'/edit">[[user:edit]]</a></li>\r\n\t\t<li><a href="'+t.__escape(a(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(a(e&&e.userslug))+'/settings">[[user:settings]]</a></li>\r\n\t\t':"")+"\r\n\r\n\t\t"+(a(e&&e.isSelf)?"":"\r\n\t\t"+(a(e&&e.canBan)?'\r\n\t\t<li role="separator" class="divider"></li>\r\n\t\t<li class="dropdown-header">[[user:admin_actions_label]]</li>\r\n\t\t<li class="'+(a(e&&e.banned)?"hide":"")+'">\r\n\t\t\t<a component="account/ban" href="#">[[user:ban_account]]</a>\r\n\t\t</li>\r\n\t\t<li class="'+(a(e&&e.banned)?"":"hide")+'">\r\n\t\t\t<a component="account/unban" href="#">[[user:unban_account]]</a>\r\n\t\t</li>\r\n\t\t':"")+"\r\n\t\t"+(a(e&&e.isAdmin)?'\r\n\t\t<li>\r\n\t\t\t<a component="account/delete-account" href="#" class="">[[user:delete_account_as_admin]]</a>\r\n\t\t\t<a component="account/delete-content" href="#" class="">[[user:delete_content]]</a>\r\n\t\t\t<a component="account/delete-all" href="#" class="">[[user:delete_all]]</a>\r\n\t\t</li>\r\n\t\t':"")+"\r\n\t\t")+'\r\n\r\n\t\t<li role="separator" class="divider"></li>\r\n\t\t<li><a href="'+t.__escape(a(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(a(e&&e.userslug))+'/following">[[user:following]]</a></li>\r\n\t\t<li><a href="'+t.__escape(a(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(a(e&&e.userslug))+'/followers">[[user:followers]]</a></li>\r\n\t\t'+(a(e&&e.showHidden)?'\r\n\t\t<li><a href="'+t.__escape(a(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(a(e&&e.userslug))+'/blocks">[[user:blocks]]</a></li>\r\n\t\t':"")+'\r\n\t\t<li role="separator" class="divider"></li>\r\n\t\t<li><a href="'+t.__escape(a(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(a(e&&e.userslug))+'/topics">[[global:topics]]</a></li>\r\n\t\t<li><a href="'+t.__escape(a(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(a(e&&e.userslug))+'/posts">[[global:posts]]</a></li>\r\n\t\t'+(a(e&&e["reputation:disabled"])?"":'\r\n\t\t<li><a href="'+t.__escape(a(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(a(e&&e.userslug))+'/best">[[global:best]]</a></li>\r\n\t\t')+'\r\n\t\t<li><a href="'+t.__escape(a(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(a(e&&e.userslug))+'/groups">[[global:header.groups]]</a></li>\r\n\r\n\t\t'+(a(e&&e.showHidden)?'\r\n\t\t<li><a href="'+t.__escape(a(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(a(e&&e.userslug))+'/categories">[[user:watched_categories]]</a></li>\r\n\t\t<li><a href="'+t.__escape(a(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(a(e&&e.userslug))+'/bookmarks">[[user:bookmarks]]</a></li>\r\n\t\t<li><a href="'+t.__escape(a(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(a(e&&e.userslug))+'/watched">[[user:watched]]</a></li>\r\n\t\t<li><a href="'+t.__escape(a(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(a(e&&e.userslug))+'/ignored">[[user:ignored]]</a></li>\r\n\t\t'+(a(e&&e["reputation:disabled"])?"":'\r\n\t\t<li><a href="'+t.__escape(a(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(a(e&&e.userslug))+'/upvoted">[[global:upvoted]]</a></li>\r\n\t\t'+(a(e&&e["downvote:disabled"])?"":'\r\n\t\t<li><a href="'+t.__escape(a(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(a(e&&e.userslug))+'/downvoted">[[global:downvoted]]</a></li>\r\n\t\t')+"\r\n\t\t")+'\r\n\t\t<li><a href="'+t.__escape(a(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(a(e&&e.userslug))+'/uploads">[[global:uploads]]</a></li>\r\n\t\t':"")+"\r\n\r\n\t\t"+s.blocks.profile_links(t,e,a,r,n)+"\r\n\t</ul>\r\n</div>\r\n\r\n\r\n\t\t"+(a(e&&e.allowCoverPicture)?"\r\n\t\t"+(a(e&&e.canEdit)?'\r\n\t\t<div class="controls">\r\n\t\t\t<span class="upload"><i class="fa fa-fw fa-4x fa-upload"></i></span>\r\n\t\t\t<span class="resize"><i class="fa fa-fw fa-4x fa-arrows"></i></span>\r\n\t\t\t<span class="remove"><i class="fa fa-fw fa-4x fa-times"></i></span>\r\n\t\t</div>\r\n\t\t<div class="save">[[groups:cover-save]] <i class="fa fa-fw fa-floppy-o"></i></div>\r\n\t\t<div class="indicator">[[groups:cover-saving]] <i class="fa fa-fw fa-refresh fa-spin"></i></div>\r\n\t\t':"")+"\r\n\t\t":"")+'\r\n\t</div>\r\n</div>\r\n\r\n\r\n\t<div class="row">\r\n\t\t<h1>'+t.__escape(a(e&&e.title))+'</h1>\r\n\t\t<div class="col-lg-12">\r\n\t\t\t<div class="btn-group bottom-sheet" component="category/watch/all">\r\n\t\t\t\t<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">\r\n\t\t\t\t\t<span>[[user:change_all]]</span>\r\n\t\t\t\t\t<span class="caret"></span>\r\n\t\t\t\t</button>\r\n\t\t\t\t<ul class="dropdown-menu">\r\n\t\t\t\t\t<li><a href="#" component="category/watching" data-state="watching"><i class="fa fa-fw fa-inbox"></i> [[category:watching]]<p class="help-text"><small>[[category:watching.description]]</small></p></a></li>\r\n\t\t\t\t\t<li><a href="#" component="category/notwatching" data-state="notwatching"><i class="fa fa-fw fa-clock-o"></i> [[category:not-watching]]<p class="help-text"><small>[[category:not-watching.description]]</small></p></a></li>\r\n\t\t\t\t\t<li><a href="#" component="category/ignoring" data-state="ignoring"><i class="fa fa-fw fa-eye-slash"></i> [[category:ignoring]]<p class="help-text"><small>[[category:ignoring.description]]</small></p></a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="col-lg-12">\r\n\t\t\t<ul class="categories" itemscope itemtype="http://www.schema.org/ItemList">\r\n\t\t\t\t'+s.blocks.categories(t,e,a,r,n)+"\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"}return s.blocks={categories:function(e,a,r,t,n){return t(r(a&&a.categories),function(t){return'\r\n\t\t\t\t<li component="categories/category" data-cid="'+e.__escape(r(a&&a.categories&&a.categories[t]&&a.categories[t].cid))+'" data-parent-cid="'+e.__escape(r(a&&a.categories&&a.categories[t]&&a.categories[t].parentCid))+'" class="row clearfix">\r\n\t<meta itemprop="name" content="'+e.__escape(r(a&&a.categories&&a.categories[t]&&a.categories[t].name))+'">\r\n\r\n\t<div class="content col-xs-12 col-md-10 col-sm-12 depth-'+e.__escape(r(a&&a.categories&&a.categories[t]&&a.categories[t].depth))+'">\r\n\t\t<div class="icon pull-left" style="'+e.__escape(n(a,e,"generateCategoryBackground",[r(a&&a.categories&&a.categories[t])]))+'">\r\n\t\t\t<i class="fa fa-fw '+e.__escape(r(a&&a.categories&&a.categories[t]&&a.categories[t].icon))+'"></i>\r\n\t\t</div>\r\n\r\n\t\t<h2 class="title">\r\n\t\t\t'+(r(a&&a.categories&&a.categories[t]&&a.categories[t].isSection)?"\r\n"+e.__escape(r(a&&a.categories&&a.categories[t]&&a.categories[t].name))+"\r\n":"\r\n"+(r(a&&a.categories&&a.categories[t]&&a.categories[t].link)?'\r\n<a href="'+e.__escape(r(a&&a.categories&&a.categories[t]&&a.categories[t].link))+'" itemprop="url">\r\n':'\r\n<a href="'+e.__escape(r(a&&a.config&&a.config.relative_path))+"/category/"+e.__escape(r(a&&a.categories&&a.categories[t]&&a.categories[t].slug))+'" itemprop="url">\r\n')+"\r\n"+e.__escape(r(a&&a.categories&&a.categories[t]&&a.categories[t].name))+"\r\n</a>\r\n")+"\r\n\t\t</h2>\r\n\t\t<div>\r\n\t\t\t"+(r(a&&a.categories&&a.categories[t]&&a.categories[t].descriptionParsed)?'\r\n\t\t\t<div class="description">\r\n\t\t\t\t'+e.__escape(r(a&&a.categories&&a.categories[t]&&a.categories[t].descriptionParsed))+"\r\n\t\t\t</div>\r\n\t\t\t":"")+"\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t"+(r(a&&a.config&&a.config.loggedIn)?'\r\n<div class="btn-group topic-watch-dropdown bottom-sheet" component="topic/watch">\r\n\r\n\t<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">\r\n\r\n\t\t<span component="category/watching/menu" '+(r(a&&a.categories&&a.categories[t]&&a.categories[t].isWatched)?"":'class="hidden"')+'><i class="fa fa-fw fa-inbox"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[category:watching]]</span></span>\r\n\r\n\t\t<span component="category/notwatching/menu" '+(r(a&&a.categories&&a.categories[t]&&a.categories[t].isNotWatched)?"":'class="hidden"')+'><i class="fa fa-fw fa-clock-o"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[category:not-watching]]</span></span>\r\n\r\n\t\t<span component="category/ignoring/menu" '+(r(a&&a.categories&&a.categories[t]&&a.categories[t].isIgnored)?"":'class="hidden"')+'><i class="fa fa-fw fa-eye-slash"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[category:ignoring]]</span></span>\r\n\r\n\t\t<span class="caret"></span>\r\n\t</button>\r\n\r\n\t<ul class="dropdown-menu dropdown-menu-right">\r\n\t\t<li><a href="#" component="category/watching" data-state="watching"><i component="category/watching/check" class="fa fa-fw '+(r(a&&a.categories&&a.categories[t]&&a.categories[t].isWatched)?"fa-check":"")+'"></i><i class="fa fa-fw fa-inbox"></i> [[category:watching]]<p class="help-text"><small>[[category:watching.description]]</small></p></a></li>\r\n\r\n\t\t<li><a href="#" component="category/notwatching" data-state="notwatching"><i component="category/notwatching/check" class="fa fa-fw '+(r(a&&a.categories&&a.categories[t]&&a.categories[t].isNotWatched)?"fa-check":"")+'"></i><i class="fa fa-fw fa-clock-o"></i> [[category:not-watching]]<p class="help-text"><small>[[category:not-watching.description]]</small></p></a></li>\r\n\r\n\t\t<li><a href="#" component="category/ignoring" data-state="ignoring"><i component="category/ignoring/check" class="fa fa-fw '+(r(a&&a.categories&&a.categories[t]&&a.categories[t].isIgnored)?"fa-check":"")+'"></i><i class="fa fa-fw fa-eye-slash"></i> [[category:ignoring]]<p class="help-text"><small>[[category:ignoring.description]]</small></p></a></li>\r\n\t</ul>\r\n</div>\r\n':"")+"\r\n</li>\r\n\r\n\t\t\t\t"})},profile_links:function(a,r,n,t){return t(n(r&&r.profile_links),function(t,e){return"\r\n\t\t"+(0===e?'\r\n\t\t<li role="separator" class="divider"></li>\r\n\t\t':"")+'\r\n\t\t<li id="'+a.__escape(n(r&&r.profile_links&&r.profile_links[t]&&r.profile_links[t].id))+'" class="plugin-link '+(n(r&&r.profile_links&&r.profile_links[t]&&r.profile_links[t].public)?"public":"private")+'"><a href="'+a.__escape(n(r&&r.config&&r.config.relative_path))+"/user/"+a.__escape(n(r&&r.userslug))+"/"+a.__escape(n(r&&r.profile_links&&r.profile_links[t]&&r.profile_links[t].route))+'">'+(n(r&&r.profile_links&&r.profile_links[t]&&r.profile_links[t].icon)?'<i class="fa fa-fw '+a.__escape(n(r&&r.profile_links&&r.profile_links[t]&&r.profile_links[t].icon))+'"></i> ':"")+a.__escape(n(r&&r.profile_links&&r.profile_links[t]&&r.profile_links[t].name))+"</a></li>\r\n\t\t"})},breadcrumbs:function(r,n,s,t){return t(s(n&&n.breadcrumbs),function(t,e,a){return"\r\n\t<li"+(e===a-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemprop="itemListElement" itemtype="http://schema.org/ListItem" '+(e===a-1?'class="active"':"")+'>\r\n\t\t<meta itemprop="position" content="'+r.__escape(e)+'" />\r\n\t\t'+(e!==a-1?'<a href="'+r.__escape(s(n&&n.breadcrumbs&&n.breadcrumbs[t]&&n.breadcrumbs[t].url))+'" itemprop="item">':"")+'\r\n\t\t\t<span itemprop="name">\r\n\t\t\t\t'+r.__escape(s(n&&n.breadcrumbs&&n.breadcrumbs[t]&&n.breadcrumbs[t].text))+"\r\n\t\t\t\t"+(e===a-1?"\r\n\t\t\t\t"+(s(n&&n["feeds:disableRSS"])?"":"\r\n\t\t\t\t"+(s(n&&n.rssFeedUrl)?'<a target="_blank" href="'+r.__escape(s(n&&n.rssFeedUrl))+'" itemprop="item"><i class="fa fa-rss-square"></i></a>':""))+"\r\n\t\t\t\t":"")+"\r\n\t\t\t</span>\r\n\t\t"+(e!==a-1?"</a>":"")+"\r\n\t</li>\r\n\t"})}},s});