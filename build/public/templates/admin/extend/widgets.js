!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function a(e,n,s,l,t){return'<div id="widgets" class="row">\n\t<div class="col-md-8" id="active-widgets">\n\t\t<ul class="nav nav-pills">\n\t\t'+l(s(n&&n.templates),function(t,a){return'\n\t\t\t<li class="'+(0===a?"active":"")+'"><a href="#" data-template="'+e.__escape(s(n&&n.templates&&n.templates[t]&&n.templates[t].template))+'" data-toggle="pill">'+e.__escape(s(n&&n.templates&&n.templates[t]&&n.templates[t].template))+"</a></li>\n\t\t"})+'\n\t\t</ul>\n\n\t\t<div class="row">\n\t\t\t<div class="col-xs-12">\n\t\t\t\t<div class="tab-content">\n\t\t\t\t'+l(s(n&&n.templates),function(a,t){return'\n\t\t\t\t\t<div class="tab-pane '+(0===t?"active":"")+'" data-template="'+e.__escape(s(n&&n.templates&&n.templates[a]&&n.templates[a].template))+'">\n\t\t\t\t\t'+(s(n&&n.templates&&n.templates[a]&&n.templates[a].areas)?l(s(n&&n.templates&&n.templates[a]&&n.templates[a].areas),function(t){return'\n\t\t\t\t\t\t<div class="area" data-template="'+e.__escape(s(n&&n.templates&&n.templates[a]&&n.templates[a].template))+'" data-location="'+e.__escape(s(n&&n.templates&&n.templates[a]&&n.templates[a].areas&&n.templates[a].areas[t]&&n.templates[a].areas[t].location))+'">\n\t\t\t\t\t\t\t<h4>'+e.__escape(s(n&&n.templates&&n.templates[a]&&n.templates[a].areas&&n.templates[a].areas[t]&&n.templates[a].areas[t].name))+" <small>"+e.__escape(s(n&&n.templates&&n.templates[a]&&n.templates[a].template))+" / "+e.__escape(s(n&&n.templates&&n.templates[a]&&n.templates[a].areas&&n.templates[a].areas[t]&&n.templates[a].areas[t].location))+'</small></h4>\n\t\t\t\t\t\t\t<div class="well widget-area">\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t'}):l(s(n&&n.areas),function(t){return'\n\t\t\t\t\t\t<div class="area" data-template="'+e.__escape(s(n&&n.templates&&n.templates.template))+'" data-location="'+e.__escape(s(n&&n.areas&&n.areas[t]&&n.areas[t].location))+'">\n\t\t\t\t\t\t\t<h4>'+e.__escape(s(n&&n.areas&&n.areas[t]&&n.areas[t].name))+" <small>"+e.__escape(s(n&&n.templates&&n.templates.template))+" / "+e.__escape(s(n&&n.areas&&n.areas[t]&&n.areas[t].location))+'</small></h4>\n\t\t\t\t\t\t\t<div class="well widget-area">\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t'}))+"\n\t\t\t\t\t</div>\n\t\t\t\t"})+'\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class="col-md-4">\n\t\t<div class="panel panel-default">\n\t\t\t<div class="panel-heading">[[admin/extend/widgets:available]]</div>\n\t\t\t<div class="panel-body">\n\t\t\t\t<div class="available-widgets">\n\t\t\t\t\t<p>[[admin/extend/widgets:explanation]]</p>\n\t\t\t\t\t'+(s(n&&n.availableWidgets&&n.availableWidgets.length)?"":'\n\t\t\t\t\t<div class="alert alert-info">[[admin/extend/widgets:none-installed, '+e.__escape(s(n&&n.config&&n.config.relative_path))+"/admin/extend/plugins]]</div>\n\t\t\t\t\t")+'\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<select id="widget-selector" class="form-control">\n\t\t\t\t\t\t\t'+l(s(n&&n.availableWidgets),function(t){return'\n\t\t\t\t\t\t\t<option value="'+e.__escape(s(n&&n.availableWidgets&&n.availableWidgets[t]&&n.availableWidgets[t].widget))+'">'+e.__escape(s(n&&n.availableWidgets&&n.availableWidgets[t]&&n.availableWidgets[t].name))+"</option>\n\t\t\t\t\t\t\t"})+'\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</p>\n\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t'+a.blocks.availableWidgets(e,n,s,l,t)+'\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="btn-group" component="clone">\n\t\t\t\t\t\t<button type="button" class="btn btn-primary" component="clone/button">[[admin/extend/widgets:clone-from]] ...</button>\n\t\t\t\t\t\t<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">\n\t\t\t\t\t\t\t<span class="caret"></span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<ul class="dropdown-menu pull-right">\n\t\t\t\t\t\t\t'+a.blocks.templates(e,n,s,l,t)+'\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="panel panel-default">\n\t\t\t<div class="panel-heading">[[admin/extend/widgets:containers.available]]</div>\n\t\t\t<div class="panel-body">\n\t\t\t\t<p>[[admin/extend/widgets:containers.explanation]]</p>\n\t\t\t\t<div class="available-containers">\n\t\t\t\t\t<div class="containers">\n\t\t\t\t\t\t<div class="pointer" style="padding: 20px; border: 1px dotted #dedede; margin-bottom: 20px;" data-container-html=" ">\n\t\t\t\t\t\t\t[[admin/extend/widgets:containers.none]]\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="well pointer" data-container-html=\'<div class="well">{{body}}</div>\'>\n\t\t\t\t\t\t\t[[admin/extend/widgets:container.well]]\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="jumbotron pointer" data-container-html=\'<div class="jumbotron">{{body}}</div>\'>\n\t\t\t\t\t\t\t[[admin/extend/widgets:container.jumbotron]]\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="panel" data-container-html=\'<div class="panel panel-default"><div class="panel-body">{{body}}</div></div>\'>\n\t\t\t\t\t\t\t<div class="panel-body pointer">\n\t\t\t\t\t\t\t\t[[admin/extend/widgets:container.panel]]\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="panel panel-default pointer" data-container-html=\'<div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title">{{title}}</h3></div><div class="panel-body">{{body}}</div></div>\'>\n\t\t\t\t\t\t\t<div class="panel-heading">\n\t\t\t\t\t\t\t\t[[admin/extend/widgets:container.panel-header]]\n\t\t\t\t\t\t\t\t<div class="pull-right color-selector">\n\t\t\t\t\t\t\t\t\t<button data-class="panel-default" class="btn btn-xs">&nbsp;&nbsp;</button>\n\t\t\t\t\t\t\t\t\t<button data-class="panel-primary" class="btn btn-xs btn-primary">&nbsp;&nbsp;</button>\n\t\t\t\t\t\t\t\t\t<button data-class="panel-success" class="btn btn-xs btn-success">&nbsp;&nbsp;</button>\n\t\t\t\t\t\t\t\t\t<button data-class="panel-info" class="btn btn-xs btn-info">&nbsp;&nbsp;</button>\n\t\t\t\t\t\t\t\t\t<button data-class="panel-warning" class="btn btn-xs btn-warning">&nbsp;&nbsp;</button>\n\t\t\t\t\t\t\t\t\t<button data-class="panel-danger" class="btn btn-xs btn-danger">&nbsp;&nbsp;</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="panel-body">\n\t\t\t\t\t\t\t\t[[admin/extend/widgets:container.panel-body]]\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class="alert alert-info pointer" data-container-html=\'<div class="alert alert-info">{{body}}</div>\'>\n\t\t\t\t\t\t\t[[admin/extend/widgets:container.alert]]\n\t\t\t\t\t\t\t<div class="pull-right color-selector">\n\t\t\t\t\t\t\t\t<button data-class="alert-success" class="btn btn-xs btn-success">&nbsp;&nbsp;</button>\n\t\t\t\t\t\t\t\t<button data-class="alert-info" class="btn btn-xs btn-info">&nbsp;&nbsp;</button>\n\t\t\t\t\t\t\t\t<button data-class="alert-warning" class="btn btn-xs btn-warning">&nbsp;&nbsp;</button>\n\t\t\t\t\t\t\t\t<button data-class="alert-danger" class="btn btn-xs btn-danger">&nbsp;&nbsp;</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">\n\t<i class="material-icons">save</i>\n</button>'}return a.blocks={templates:function(e,n,s,t){return t(s(n&&n.templates),function(t,a){return"\n\t\t\t\t\t\t\t"+(0!==a?'\n\t\t\t\t\t\t\t<li><a href="#">'+e.__escape(s(n&&n.templates&&n.templates[t]&&n.templates[t].template))+"</a></li>\n\t\t\t\t\t\t\t":"")+"\n\t\t\t\t\t\t\t"})},availableWidgets:function(a,e,n,t){return t(n(e&&e.availableWidgets),function(t){return'\n\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t\t<div data-widget="'+a.__escape(n(e&&e.availableWidgets&&e.availableWidgets[t]&&e.availableWidgets[t].widget))+'" class="panel widget-panel panel-default pointer hide">\n\t\t\t\t\t\t\t\t<div class="panel-heading">\n\t\t\t\t\t\t\t\t\t<strong>'+a.__escape(n(e&&e.availableWidgets&&e.availableWidgets[t]&&e.availableWidgets[t].name))+"</strong>\n\t\t\t\t\t\t\t\t\t<small><br />"+a.__escape(n(e&&e.availableWidgets&&e.availableWidgets[t]&&e.availableWidgets[t].description))+'</small>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="panel-body hidden">\n\t\t\t\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t\t\t\t'+a.__escape(n(e&&e.availableWidgets&&e.availableWidgets[t]&&e.availableWidgets[t].content))+"\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t"})}},a});