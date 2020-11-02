!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function s(t,n,a,e,r){return'<!DOCTYPE html>\r\n<html lang="'+t.__escape(r(n,t,"localeToHTML",[a(n&&n.userLang),a(n&&n.defaultLang)]))+'" '+(a(n&&n.languageDirection)?'data-dir="'+t.__escape(a(n&&n.languageDirection))+'" style="direction: '+t.__escape(a(n&&n.languageDirection))+';" ':"")+" >\r\n<head>\r\n\t<title>"+t.__escape(a(n&&n.browserTitle))+"</title>\r\n\t"+s.blocks.metaTags(t,n,a,e,r)+'\r\n\t<link rel="stylesheet" type="text/css" href="'+t.__escape(a(n&&n.relative_path))+"/assets/client"+(a(n&&n.bootswatchSkin)?"-"+t.__escape(a(n&&n.bootswatchSkin)):"")+".css?"+t.__escape(a(n&&n.config&&n.config["cache-buster"]))+'" />\r\n\t'+s.blocks.linkTags(t,n,a,e,r)+"\r\n\r\n\t<script>\r\n\t\tvar config = JSON.parse('"+a(n&&n.configJSON)+"');\r\n\t\tvar app = {\r\n\t\t\tuser: JSON.parse('"+a(n&&n.userJSON)+"')\r\n\t\t};\r\n\t<\/script>\r\n\r\n\t"+(a(n&&n.useCustomHTML)?"\r\n\t"+a(n&&n.customHTML)+"\r\n\t":"")+"\r\n\t"+(a(n&&n.useCustomCSS)?"\r\n\t<style>"+a(n&&n.customCSS)+"</style>\r\n\t":"")+'\r\n</head>\r\n\r\n<body class="'+t.__escape(a(n&&n.bodyClass))+" skin-"+(a(n&&n.bootswatchSkin)?t.__escape(a(n&&n.bootswatchSkin)):"noskin")+'">\r\n\t<nav id="menu" class="slideout-menu hidden">\r\n\t\t<div class="menu-profile">\r\n\t'+(a(n&&n.user&&n.user.uid)?"\r\n\t"+t.__escape(r(n,t,"buildAvatar",[a(n&&n.user),"lg",a(n&&n.true),"user-icon"]))+'\r\n\t<i component="user/status" class="fa fa-fw fa-circle status '+t.__escape(a(n&&n.user&&n.user.status))+'"></i>\r\n\t':"")+'\r\n</div>\r\n\r\n<section class="menu-section" data-section="navigation">\r\n\t<h3 class="menu-section-title">[[global:header.navigation]]</h3>\r\n\t<ul class="menu-section-list"></ul>\r\n</section>\r\n\r\n'+(a(n&&n.config&&n.config.loggedIn)?'\r\n<section class="menu-section" data-section="profile">\r\n\t<h3 class="menu-section-title">[[global:header.profile]]</h3>\r\n\t<ul class="menu-section-list" component="header/usercontrol"></ul>\r\n</section>\r\n\r\n<section class="menu-section" data-section="notifications">\r\n\t<h3 class="menu-section-title">\r\n\t\t[[global:header.notifications]]\r\n\t\t<span class="counter unread-count" component="notifications/icon" data-content="'+t.__escape(a(n&&n.unreadCount&&n.unreadCount.notification))+'"></span>\r\n\t</h3>\r\n\t<ul class="menu-section-list notification-list-mobile" component="notifications/list"></ul>\r\n\t<p class="menu-section-list"><a href="'+t.__escape(a(n&&n.relative_path))+'/notifications">[[notifications:see_all]]</a></p>\r\n</section>\r\n':"")+'\r\n\t</nav>\r\n\t<nav id="chats-menu" class="slideout-menu hidden">\r\n\t\t'+(a(n&&n.config&&n.config.loggedIn)?'\r\n<section class="menu-section" data-section="chats">\r\n\t<h3 class="menu-section-title">\r\n\t\t[[global:header.chats]]\r\n\t\t<i class="counter unread-count" component="chat/icon" data-content="'+t.__escape(a(n&&n.unreadCount&&n.unreadCount.chat))+'"></i>\r\n\t</h3>\r\n\t<ul class="menu-section-list chat-list" component="chat/list">\r\n\t\t<a class="navigation-link" href="'+t.__escape(a(n&&n.relative_path))+"/user/"+t.__escape(a(n&&n.user&&n.user.userslug))+'/chats">[[modules:chat.see_all]]</a>\r\n\t</ul>\r\n</section>\r\n':"")+'\r\n\t</nav>\r\n\r\n\t<main id="panel" class="slideout-panel">\r\n\t\t<nav class="navbar navbar-default navbar-fixed-top header" id="header-menu" component="navbar">\r\n\t\t\t<div class="container">\r\n\t\t\t\t\t\t\t<div class="navbar-header">\r\n\t\t\t\t<button type="button" class="navbar-toggle pull-left" id="mobile-menu">\r\n\t\t\t\t\t<span component="notifications/icon" class="notification-icon fa fa-fw fa-bell-o unread-count" data-content="'+t.__escape(a(n&&n.unreadCount&&n.unreadCount.notification))+'"></span>\r\n\t\t\t\t\t<i class="fa fa-lg fa-fw fa-bars"></i>\r\n\t\t\t\t</button>\r\n\t\t\t\t<button type="button" class="navbar-toggle hidden" id="mobile-chats">\r\n\t\t\t\t\t<span component="chat/icon" class="notification-icon fa fa-fw fa-comments unread-count" data-content="'+t.__escape(a(n&&n.unreadCount&&n.unreadCount.chat))+'"></span>\r\n\t\t\t\t\t<i class="fa fa-lg fa-comment-o"></i>\r\n\t\t\t\t</button>\r\n\r\n\t\t\t\t'+(a(n&&n["brand:logo"])?'\r\n\t\t\t\t<a href="'+(a(n&&n["brand:logo:url"])?t.__escape(a(n&&n["brand:logo:url"])):t.__escape(a(n&&n.relative_path))+"/")+'">\r\n\t\t\t\t\t<img alt="'+t.__escape(a(n&&n["brand:logo:alt"]))+'" class="'+t.__escape(a(n&&n["brand:logo:display"]))+' forum-logo" src="'+t.__escape(a(n&&n["brand:logo"]))+"?"+t.__escape(a(n&&n.config&&n.config["cache-buster"]))+'" />\r\n\t\t\t\t</a>\r\n\t\t\t\t':"")+"\r\n\t\t\t\t"+(a(n&&n.config&&n.config.showSiteTitle)?'\r\n\t\t\t\t<a href="'+(a(n&&n["title:url"])?t.__escape(a(n&&n["title:url"])):t.__escape(a(n&&n.relative_path))+"/")+'">\r\n\t\t\t\t\t<h1 class="navbar-brand forum-title">'+t.__escape(a(n&&n.config&&n.config.siteTitle))+"</h1>\r\n\t\t\t\t</a>\r\n\t\t\t\t":"")+'\r\n\r\n\t\t\t\t<div component="navbar/title" class="visible-xs hidden">\r\n\t\t\t\t\t<span></span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div id="nav-dropdown" class="hidden-xs">\r\n\t\t\t\t'+(a(n&&n.maintenanceHeader)?'\r\n\t\t\t\t<ul class="nav navbar-nav navbar-right">\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="'+t.__escape(a(n&&n.relative_path))+'/login">\r\n\t\t\t\t\t\t\t<i class="fa fa-sign-in fa-fw hidden-sm hidden-md hidden-lg"></i>\r\n\t\t\t\t\t\t\t<span>[[global:login]]</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t':"\r\n\t\t\t\t"+(a(n&&n.config&&n.config.loggedIn)?'\r\n\r\n\t\t\t\t<ul id="logged-in-menu" class="nav navbar-nav navbar-right">\r\n\t\t\t\t\t<li class="notifications dropdown text-center hidden-xs" component="notifications">\r\n\t\t\t\t\t\t<a href="'+t.__escape(a(n&&n.relative_path))+'/notifications" title="[[global:header.notifications]]" class="dropdown-toggle" data-toggle="dropdown" id="notif_dropdown" data-ajaxify="false" role="button">\r\n\t\t\t\t\t\t\t<i component="notifications/icon" class="fa fa-fw fa-bell-o unread-count" data-content="'+t.__escape(a(n&&n.unreadCount&&n.unreadCount.notification))+'"></i>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<ul class="dropdown-menu" aria-labelledby="notif_dropdown">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<ul component="notifications/list" class="notification-list">\r\n\t\t\t\t\t\t\t\t\t<li class="loading-text">\r\n\t\t\t\t\t\t\t\t\t\t<a href="#"><i class="fa fa-refresh fa-spin"></i> [[global:notifications.loading]]</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class="notif-dropdown-link"><a href="#" class="mark-all-read">[[notifications:mark_all_read]]</a></li>\r\n\t\t\t\t\t\t\t<li class="notif-dropdown-link"><a href="'+t.__escape(a(n&&n.relative_path))+'/notifications">[[notifications:see_all]]</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t'+(a(n&&n.config&&n.config.disableChat)?"":'\r\n\t\t\t\t\t<li class="chats dropdown">\r\n\t\t\t\t\t\t<a class="dropdown-toggle" data-toggle="dropdown" href="'+t.__escape(a(n&&n.relative_path))+"/user/"+t.__escape(a(n&&n.user&&n.user.userslug))+'/chats" title="[[global:header.chats]]" id="chat_dropdown" component="chat/dropdown" data-ajaxify="false" role="button">\r\n\t\t\t\t\t\t\t<i component="chat/icon" class="fa fa-comment-o fa-fw unread-count" data-content="'+t.__escape(a(n&&n.unreadCount&&n.unreadCount.chat))+'"></i> <span class="visible-xs-inline">[[global:header.chats]]</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<ul class="dropdown-menu" aria-labelledby="chat_dropdown">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<ul component="chat/list" class="chat-list chats-list">\r\n\t\t\t\t\t\t\t\t\t<li class="loading-text">\r\n\t\t\t\t\t\t\t\t\t\t<a href="#"><i class="fa fa-refresh fa-spin"></i> [[global:chats.loading]]</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class="notif-dropdown-link"><a href="#" class="mark-all-read" component="chats/mark-all-read">[[modules:chat.mark_all_read]]</a></li>\r\n\t\t\t\t\t\t\t<li class="notif-dropdown-link"><a href="'+t.__escape(a(n&&n.relative_path))+"/user/"+t.__escape(a(n&&n.user&&n.user.userslug))+'/chats">[[modules:chat.see_all]]</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t')+'\r\n\r\n\t\t\t\t\t<li id="user_label" class="dropdown">\r\n\t\t\t\t\t\t<label for="user-control-list-check" class="dropdown-toggle" data-toggle="dropdown" id="user_dropdown" title="[[global:header.profile]]" role="button">\r\n\t\t\t\t\t\t\t'+t.__escape(r(n,t,"buildAvatar",[a(n&&n.user),"md",a(n&&n.true)]))+'\r\n\t\t\t\t\t\t\t<span id="user-header-name" class="visible-xs-inline">'+t.__escape(a(n&&n.user&&n.user.username))+'</span>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<input type="checkbox" class="hidden" id="user-control-list-check" aria-hidden="true">\r\n\t\t\t\t\t\t<ul id="user-control-list" component="header/usercontrol" class="dropdown-menu" aria-labelledby="user_dropdown">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a component="header/profilelink" href="'+t.__escape(a(n&&n.relative_path))+"/user/"+t.__escape(a(n&&n.user&&n.user.userslug))+'">\r\n\t\t\t\t\t\t\t\t\t<i component="user/status" class="fa fa-fw fa-circle status '+t.__escape(a(n&&n.user&&n.user.status))+'"></i> <span component="header/username">'+t.__escape(a(n&&n.user&&n.user.username))+'</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li role="presentation" class="divider"></li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href="#" class="user-status" data-status="online">\r\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-circle status online"></i><span '+(a(n&&n.user&&n.user.online)?'class="bold"':"")+'> [[global:online]]</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href="#" class="user-status" data-status="away">\r\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-circle status away"></i><span '+(a(n&&n.user&&n.user.away)?'class="bold"':"")+'> [[global:away]]</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href="#" class="user-status" data-status="dnd">\r\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-circle status dnd"></i><span '+(a(n&&n.user&&n.user.dnd)?'class="bold"':"")+'> [[global:dnd]]</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href="#" class="user-status" data-status="offline">\r\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-circle status offline"></i><span '+(a(n&&n.user&&n.user.offline)?'class="bold"':"")+'> [[global:invisible]]</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li role="presentation" class="divider"></li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a component="header/profilelink/edit" href="'+t.__escape(a(n&&n.relative_path))+"/user/"+t.__escape(a(n&&n.user&&n.user.userslug))+'/edit">\r\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-edit"></i> <span>[[user:edit-profile]]</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a component="header/profilelink/settings" href="'+t.__escape(a(n&&n.relative_path))+"/user/"+t.__escape(a(n&&n.user&&n.user.userslug))+'/settings">\r\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-gear"></i> <span>[[user:settings]]</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t'+(a(n&&n.showModMenu)?'\r\n\t\t\t\t\t\t\t<li role="presentation" class="divider"></li>\r\n\t\t\t\t\t\t\t<li class="dropdown-header">[[pages:moderator-tools]]</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href="'+t.__escape(a(n&&n.relative_path))+'/flags">\r\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-flag"></i> <span>[[pages:flagged-content]]</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href="'+t.__escape(a(n&&n.relative_path))+'/post-queue">\r\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-list-alt"></i> <span>[[pages:post-queue]]</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href="'+t.__escape(a(n&&n.relative_path))+'/ip-blacklist">\r\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-ban"></i> <span>[[pages:ip-blacklist]]</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t':"")+'\r\n\t\t\t\t\t\t\t<li role="presentation" class="divider"></li>\r\n\t\t\t\t\t\t\t<li component="user/logout">\r\n\t\t\t\t\t\t\t\t<form method="post" action="'+t.__escape(a(n&&n.relative_path))+'/logout">\r\n\t\t\t\t\t\t\t\t\t<input type="hidden" name="_csrf" value="'+t.__escape(a(n&&n.config&&n.config.csrf_token))+'">\r\n\t\t\t\t\t\t\t\t\t<input type="hidden" name="noscript" value="true">\r\n\t\t\t\t\t\t\t\t\t<button type="submit" class="btn btn-link">\r\n\t\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-sign-out"></i><span> [[global:logout]]</span>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t</ul>\r\n\t\t\t\t':'\r\n\t\t\t\t<ul id="logged-out-menu" class="nav navbar-nav navbar-right">\r\n\t\t\t\t\t'+(a(n&&n.allowRegistration)?'\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="'+t.__escape(a(n&&n.relative_path))+'/register">\r\n\t\t\t\t\t\t\t<i class="fa fa-pencil fa-fw hidden-sm hidden-md hidden-lg"></i>\r\n\t\t\t\t\t\t\t<span>[[global:register]]</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t':"")+'\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="'+t.__escape(a(n&&n.relative_path))+'/login">\r\n\t\t\t\t\t\t\t<i class="fa fa-sign-in fa-fw hidden-sm hidden-md hidden-lg"></i>\r\n\t\t\t\t\t\t\t<span>[[global:login]]</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t')+"\r\n\t\t\t\t"+(a(n&&n.config&&n.config.searchEnabled)?'\r\n\t\t\t\t<ul class="nav navbar-nav navbar-right">\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<form id="search-form" class="navbar-form navbar-right hidden-xs" role="search" method="GET">\r\n\t\t\t\t\t\t\t<button id="search-button" type="button" class="btn btn-link"><i class="fa fa-search fa-fw" title="[[global:header.search]]"></i></button>\r\n\t\t\t\t\t\t\t<div class="hidden" id="search-fields">\r\n\t\t\t\t\t\t\t\t<div class="form-group">\r\n\t\t\t\t\t\t\t\t\t<input autocomplete="off" type="text" class="form-control" placeholder="[[global:search]]" name="query" value="">\r\n\t\t\t\t\t\t\t\t\t<a href="#"><i class="fa fa-gears fa-fw advanced-search-link"></i></a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<button type="submit" class="btn btn-default hide">[[global:search]]</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t<div id="quick-search-container" class="quick-search-container hidden">\r\n\t\t\t\t\t\t\t<div class="checkbox filter-category">\r\n\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t<input type="checkbox" checked><span class="name"></span>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="text-center loading-indicator"><i class="fa fa-spinner fa-spin"></i></div>\r\n\t\t\t\t\t\t\t<div class="quick-search-results-container"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class="visible-xs" id="search-menu">\r\n\t\t\t\t\t\t<a href="'+t.__escape(a(n&&n.relative_path))+'/search">\r\n\t\t\t\t\t\t\t<i class="fa fa-search fa-fw"></i> [[global:search]]\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t':"")+'\r\n\r\n\t\t\t\t<ul class="nav navbar-nav navbar-right hidden-xs">\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="#" id="reconnect" class="hide" title="[[global:reconnecting-message, '+t.__escape(a(n&&n.config&&n.config.siteTitle))+']]">\r\n\t\t\t\t\t\t\t<i class="fa fa-check"></i>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\r\n\t\t\t\t<ul class="nav navbar-nav navbar-right pagination-block visible-lg visible-md">\r\n\t\t\t\t\t<li class="dropdown">\r\n\t\t\t\t\t\t<a><i class="fa fa-angle-double-up pointer fa-fw pagetop"></i></a>\r\n\t\t\t\t\t\t<a><i class="fa fa-angle-up pointer fa-fw pageup"></i></a>\r\n\r\n\t\t\t\t\t\t<a href="#" class="dropdown-toggle" data-toggle="dropdown">\r\n\t\t\t\t\t\t\t<span class="pagination-text"></span>\r\n\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t<a><i class="fa fa-angle-down pointer fa-fw pagedown"></i></a>\r\n\t\t\t\t\t\t<a><i class="fa fa-angle-double-down pointer fa-fw pagebottom"></i></a>\r\n\r\n\t\t\t\t\t\t<div class="progress-container">\r\n\t\t\t\t\t\t\t<div class="progress-bar"></div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<ul class="dropdown-menu" role="menu">\r\n\t\t\t\t\t\t\t<li>\r\n  \t\t\t\t\t\t\t\t<input type="text" class="form-control" id="indexInput" placeholder="[[global:pagination.enter_index]]">\r\n  \t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\r\n\t\t\t\t<ul id="main-nav" class="nav navbar-nav">\r\n\t\t\t\t\t'+s.blocks.navigation(t,n,a,e,r)+"\r\n\t\t\t\t</ul>\r\n\r\n\t\t\t\t")+'\r\n\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</nav>\r\n\t\t<div class="container" id="content">\r\n\t\t\t<noscript>\r\n\t\t<div class="alert alert-danger">\r\n\t\t\t<p>\r\n\t\t\t\tYour browser does not seem to support JavaScript. As a result, your viewing experience will be diminished, and you may not be able to execute some actions.\r\n\t\t\t</p>\r\n\t\t\t<p>\r\n\t\t\t\tPlease download a browser that supports JavaScript, or enable it if it\'s disabled (i.e. NoScript).\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t</noscript>\r\n'}return s.blocks={navigation:function(a,e,r,t,s){return t(r(e&&e.navigation),function(t,n){return"\r\n\t\t\t\t\t"+(s(e,a,"displayMenuItem",[e,n])?'\r\n\t\t\t\t\t<li class="'+a.__escape(r(e&&e.navigation&&e.navigation[t]&&e.navigation[t].class))+'">\r\n\t\t\t\t\t\t<a class="navigation-link" href="'+a.__escape(r(e&&e.navigation&&e.navigation[t]&&e.navigation[t].route))+'" title="'+a.__escape(r(e&&e.navigation&&e.navigation[t]&&e.navigation[t].title))+'" '+(r(e&&e.navigation&&e.navigation[t]&&e.navigation[t].id)?'id="'+a.__escape(r(e&&e.navigation&&e.navigation[t]&&e.navigation[t].id))+'"':"")+(r(e&&e.navigation&&e.navigation[t]&&e.navigation[t].properties&&e.navigation[t].properties.targetBlank)?' target="_blank"':"")+">\r\n\t\t\t\t\t\t\t"+(r(e&&e.navigation&&e.navigation[t]&&e.navigation[t].iconClass)?'\r\n\t\t\t\t\t\t\t<i class="fa fa-fw '+a.__escape(r(e&&e.navigation&&e.navigation[t]&&e.navigation[t].iconClass))+'" data-content="'+a.__escape(r(e&&e.navigation&&e.navigation[t]&&e.navigation[t].content))+'"></i>\r\n\t\t\t\t\t\t\t':"")+"\r\n\r\n\t\t\t\t\t\t\t"+(r(e&&e.navigation&&e.navigation[t]&&e.navigation[t].text)?'\r\n\t\t\t\t\t\t\t<span class="'+a.__escape(r(e&&e.navigation&&e.navigation[t]&&e.navigation[t].textClass))+'">'+a.__escape(r(e&&e.navigation&&e.navigation[t]&&e.navigation[t].text))+"</span>\r\n\t\t\t\t\t\t\t":"")+"\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t":"")+"\r\n\t\t\t\t\t"})},linkTags:function(n,a,e,t,r){return t(e(a&&a.linkTags),function(t){return n.__escape(r(a,n,"buildLinkTag",[e(a&&a.linkTags&&a.linkTags[t])]))})},metaTags:function(n,a,e,t,r){return t(e(a&&a.metaTags),function(t){return n.__escape(r(a,n,"buildMetaTag",[e(a&&a.metaTags&&a.metaTags[t])]))})}},s});