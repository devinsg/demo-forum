!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function a(t,r,e,s,n){return(e(r&&r.breadcrumbs&&r.breadcrumbs.length)?'\r\n<ol class="breadcrumb" itemscope="itemscope" itemprop="breadcrumb" itemtype="http://schema.org/BreadcrumbList">\r\n\t'+a.blocks.breadcrumbs(t,r,e,s,n)+"\r\n</ol>\r\n":"")+'\r\n\r\n<div data-widget-area="header">\r\n\t'+a.blocks["widgets.header"](t,r,e,s,n)+'\r\n</div>\r\n<div class="groups list">\r\n\t<div class="row">\r\n\t\t<div class="col-lg-4">\r\n\t\t\t'+(e(r&&r.allowGroupCreation)?'\r\n\t\t\t<button class="btn btn-primary" data-action="new"><i class="fa fa-plus"></i> [[groups:new_group]]</button>\r\n\t\t\t':"")+'\r\n\t\t</div>\r\n\t\t<div class="col-lg-8">\r\n\t\t\t<div class="row">\r\n\t\t\t\t<div class="col-xs-5 col-md-3 text-left pull-right">\r\n\t\t\t\t\t<select class="form-control" id="search-sort">\r\n\t\t\t\t\t\t<option value="alpha">[[groups:details.group_name]]</option>\r\n\t\t\t\t\t\t<option value="count">[[groups:details.member_count]]</option>\r\n\t\t\t\t\t\t<option value="date">[[groups:details.creation_date]]</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="col-xs-7 col-md-5 text-left pull-right">\r\n\t\t\t\t\t<div class="input-group">\r\n\t\t\t\t\t\t<input type="text" class="form-control" placeholder="[[global:search]]" name="query" value="" id="search-text">\r\n\t\t\t\t\t\t<span id="search-button" class="input-group-addon search-button"><i class="fa fa-search"></i></span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<hr />\r\n\r\n\t<div component="groups/container" class="row" id="groups-list" data-nextstart='+t.__escape(e(r&&r.nextStart))+">\r\n\t\t"+(e(r&&r.groups&&r.groups.length)?"\r\n\t\t\t"+a.blocks.groups(t,r,e,s,n)+"\r\n\t\t":'\r\n\t\t<div class="col-xs-12">\r\n\t\t\t<div class="alert alert-warning">\r\n\t\t\t[[groups:no_groups_found]]\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t')+"\r\n\t</div>\r\n</div>\r\n"}return a.blocks={groups:function(e,s,n,t,a){return t(n(s&&s.groups),function(r){return'\r\n\t<div class="col-lg-4 col-md-6 col-sm-12" component="groups/summary" data-slug="'+e.__escape(n(s&&s.groups&&s.groups[r]&&s.groups[r].slug))+'">\r\n\t\t<div class="panel panel-default">\r\n\t\t\t<a href="'+e.__escape(n(s&&s.config&&s.config.relative_path))+"/groups/"+e.__escape(n(s&&s.groups&&s.groups[r]&&s.groups[r].slug))+'" class="panel-heading list-cover" style="'+(n(s&&s.groups&&s.groups[r]&&s.groups[r]["cover:thumb:url"])?"background-image: url("+e.__escape(n(s&&s.groups&&s.groups[r]&&s.groups[r]["cover:thumb:url"]))+");":"")+'">\r\n\t\t\t\t<h3 class="panel-title">'+e.__escape(n(s&&s.groups&&s.groups[r]&&s.groups[r].displayName))+" <small>"+e.__escape(n(s&&s.groups&&s.groups[r]&&s.groups[r].memberCount))+'</small></h3>\r\n\t\t\t</a>\r\n\t\t\t<div class="panel-body">\r\n\t\t\t\t<ul class="members">\r\n\t\t\t\t\t'+t(n(s&&s.groups&&s.groups[r]&&s.groups[r].members),function(t){return'\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="'+e.__escape(n(s&&s.config&&s.config.relative_path))+"/user/"+e.__escape(n(s&&s.groups&&s.groups[r]&&s.groups[r].members&&s.groups[r].members[t]&&s.groups[r].members[t].userslug))+'">'+e.__escape(a(s,e,"buildAvatar",[n(s&&s.groups&&s.groups[r]&&s.groups[r].members&&s.groups[r].members[t]),"sm",n(s&&s.true)]))+"</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t"})+"\r\n\t\t\t\t\t"+(n(s&&s.groups&&s.groups[r]&&s.groups[r].truncated)?'\r\n\t\t\t\t\t<li class="truncated"><i class="fa fa-ellipsis-h"></i></li>\r\n\t\t\t\t\t':"")+"\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t"})},"widgets.header":function(t,r,e,s){return s(e(r&&r.widgets&&r.widgets.header),function(t){return"\r\n\t"+e(r&&r.widgets&&r.widgets.header&&r.widgets.header[t]&&r.widgets.header[t].html)+"\r\n\t"})},breadcrumbs:function(s,n,a,t){return t(a(n&&n.breadcrumbs),function(t,r,e){return"\r\n\t<li"+(r===e-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemprop="itemListElement" itemtype="http://schema.org/ListItem" '+(r===e-1?'class="active"':"")+'>\r\n\t\t<meta itemprop="position" content="'+s.__escape(r)+'" />\r\n\t\t'+(r!==e-1?'<a href="'+s.__escape(a(n&&n.breadcrumbs&&n.breadcrumbs[t]&&n.breadcrumbs[t].url))+'" itemprop="item">':"")+'\r\n\t\t\t<span itemprop="name">\r\n\t\t\t\t'+s.__escape(a(n&&n.breadcrumbs&&n.breadcrumbs[t]&&n.breadcrumbs[t].text))+"\r\n\t\t\t\t"+(r===e-1?"\r\n\t\t\t\t"+(a(n&&n["feeds:disableRSS"])?"":"\r\n\t\t\t\t"+(a(n&&n.rssFeedUrl)?'<a target="_blank" href="'+s.__escape(a(n&&n.rssFeedUrl))+'" itemprop="item"><i class="fa fa-rss-square"></i></a>':""))+"\r\n\t\t\t\t":"")+"\r\n\t\t\t</span>\r\n\t\t"+(r!==e-1?"</a>":"")+"\r\n\t</li>\r\n\t"})}},a});