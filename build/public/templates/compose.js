!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function a(t,i,e,n,r){return'<div component="composer" class="composer'+(e(i&&i.resizable)?" resizable":"")+(e(i&&i.isTopicOrMain)?"":" reply")+'"'+(e(i&&i.disabled)?"":' style="visibility: inherit;"')+'>\r\n\r\n\t<div class="composer-container">\r\n\t\t<form id="compose-form" method="post">\r\n\t\t\t'+(e(i&&i.pid)?'\r\n\t\t\t<input type="hidden" name="pid" value="'+t.__escape(e(i&&i.pid))+'" />\r\n\t\t\t<input type="hidden" name="thumb" value="'+t.__escape(e(i&&i.thumb))+'" />\r\n\t\t\t':"")+"\r\n\t\t\t"+(e(i&&i.tid)?'\r\n\t\t\t<input type="hidden" name="tid" value="'+t.__escape(e(i&&i.tid))+'" />\r\n\t\t\t':"")+"\r\n\t\t\t"+(e(i&&i.cid)?'\r\n\t\t\t<input type="hidden" name="cid" value="'+t.__escape(e(i&&i.cid))+'" />\r\n\t\t\t':"")+'\r\n\t\t\t<input type="hidden" name="_csrf" value="'+t.__escape(e(i&&i.config&&i.config.csrf_token))+'" />\r\n\t\t</form>\r\n\r\n\t\t<div class="title-container row">\r\n\t\t\t'+(e(i&&i.isTopic)?'\r\n\t\t\t<div class="category-list-container"></div>\r\n\t\t\t':"")+"\r\n\t\t\t"+(e(i&&i.showHandleInput)?'\r\n\t\t\t<div class="col-sm-3 col-md-12">\r\n\t\t\t\t<input class="handle form-control" type="text" tabindex="1" placeholder="[[topic:composer.handle_placeholder]]" value="'+t.__escape(e(i&&i.handle))+'" />\r\n\t\t\t</div>\r\n\t\t\t':"")+'\r\n\t\t\t<div class="'+(e(i&&i.isTopic)?"col-lg-9":"col-lg-12")+' col-md-12">\r\n\t\t\t\t'+(e(i&&i.isTopicOrMain)?'\r\n\t\t\t\t<input name="title" form="compose-form" class="title form-control" type="text" tabindex="1" placeholder="[[topic:composer.title_placeholder]]" value="'+t.__escape(e(i&&i.topicTitle))+'"/>\r\n\t\t\t\t':'\r\n\t\t\t\t<span class="title">[[topic:composer.replying_to, "'+t.__escape(e(i&&i.topicTitle))+'"]]</span>\r\n\t\t\t\t')+'\r\n\t\t\t\t<div id="quick-search-container" class="quick-search-container hidden">\r\n\t\t\t\t\t<div class="quick-search-results-container"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="category-tag-row">\r\n\t\t\t<div class="btn-toolbar formatting-bar">\r\n\t\t\t\t<ul class="formatting-group">\r\n\t\t\t\t\t'+a.blocks.formatting(t,i,e,n,r)+"\r\n\r\n\t\t\t\t\t\x3c!--[if gte IE 9]>\x3c!--\x3e\r\n\t\t\t\t\t\t"+(e(i&&i.privileges&&i.privileges["upload:post:image"])?'\r\n\t\t\t\t\t\t<li class="img-upload-btn hide" data-format="picture" tabindex="-1">\r\n\t\t\t\t\t\t\t<i class="fa fa-file-image-o"></i>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t':"")+"\r\n\t\t\t\t\t\t"+(e(i&&i.privileges&&i.privileges["upload:post:file"])?'\r\n\t\t\t\t\t\t<li class="file-upload-btn hide" data-format="upload" tabindex="-1">\r\n\t\t\t\t\t\t\t<span class="fa-stack">\r\n\t\t\t\t\t\t\t\t<i class="fa fa-file-o fa-stack-1x"></i>\r\n\t\t\t\t\t\t\t\t<i class="fa fa-arrow-up fa-stack-1x"></i>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t':"")+"\r\n\t\t\t\t\t\x3c!--<![endif]--\x3e\r\n\r\n\t\t\t\t\t"+(e(i&&i.allowTopicsThumbnail)?'\r\n\t\t\t\t\t<li tabindex="-1">\r\n\t\t\t\t\t\t<i class="fa fa-th-large topic-thumb-btn topic-thumb-toggle-btn hide" title="[[topic:composer.thumb_title]]"></i>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<div class="topic-thumb-container center-block hide">\r\n\t\t\t\t\t\t<form id="thumbForm" method="post" class="topic-thumb-form form-inline" enctype="multipart/form-data">\r\n\t\t\t\t\t\t\t<img class="topic-thumb-preview" '+(e(i&&i.thumb)?'src="'+t.__escape(e(i&&i.thumb))+'"':"")+'></img>\r\n\t\t\t\t\t\t\t<div class="form-group">\r\n\t\t\t\t\t\t\t\t<label for="topic-thumb-url">[[topic:composer.thumb_url_label]]</label>\r\n\t\t\t\t\t\t\t\t<input type="text" id="topic-thumb-url" class="form-control" placeholder="[[topic:composer.thumb_url_placeholder]]" '+(e(i&&i.thumb)?'value="'+t.__escape(e(i&&i.thumb))+'"':"")+'/>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="form-group">\r\n\t\t\t\t\t\t\t\t<label for="topic-thumb-file">[[topic:composer.thumb_file_label]]</label>\r\n\t\t\t\t\t\t\t\t<input type="file" id="topic-thumb-file" class="form-control" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="form-group topic-thumb-ctrl">\r\n\t\t\t\t\t\t\t\t<i class="fa fa-spinner fa-spin hide topic-thumb-spinner" title="[[topic:composer.uploading]]"></i>\r\n\t\t\t\t\t\t\t\t<i class="fa fa-times topic-thumb-btn hide topic-thumb-clear-btn" title="[[topic:composer.thumb_remove]]"></i>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t':"")+'\r\n\r\n\t\t\t\t\t<form id="fileForm" method="post" enctype="multipart/form-data">\r\n\t\t\t\t\t\t\x3c!--[if gte IE 9]>\x3c!--\x3e\r\n\t\t\t\t\t\t\t<input type="file" id="files" name="files[]" multiple class="gte-ie9 hide"/>\r\n\t\t\t\t\t\t\x3c!--<![endif]--\x3e\r\n\t\t\t\t\t\t\x3c!--[if lt IE 9]>\r\n\t\t\t\t\t\t\t<input type="file" id="files" name="files[]" class="lt-ie9 hide" value="Upload"/>\r\n\t\t\t\t\t\t<![endif]--\x3e\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</ul>\r\n\r\n\t\t\t\t<div class="btn-group pull-right action-bar">\r\n\t\t\t\t\t<a href="'+t.__escape(e(i&&i.discardRoute))+'" class="btn btn-default composer-discard" data-action="discard" tabindex="-1"><i class="fa fa-times"></i> [[topic:composer.discard]]</a>\r\n\r\n\t\t\t\t\t<button type="submit" form="compose-form" class="btn btn-primary composer-submit" data-action="post" tabindex="6"><i class="fa fa-check"></i> [[topic:composer.submit]]</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row write-preview-container">\r\n\t\t\t<div class="col-md-6 col-sm-12 write-container">\r\n\t\t\t\t<div class="help-text">\r\n\t\t\t\t\t[[modules:composer.compose]] <span class="help hidden"><i class="fa fa-question-circle"></i></span>\r\n\t\t\t\t\t<span class="toggle-preview hide">[[modules:composer.show_preview]]</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<textarea name="content" form="compose-form" class="write" tabindex="5" placeholder="[[modules:composer.textarea.placeholder]]"></textarea>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-md-6 hidden-sm hidden-xs preview-container">\r\n\t\t\t\t<div class="help-text">\r\n\t\t\t\t\t<span class="toggle-preview">[[modules:composer.hide_preview]]</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="preview well"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t'+(e(i&&i.isTopicOrMain)?'\r\n\t\t<div class="tag-row">\r\n\t\t\t<div class="tags-container">\r\n\t\t\t\t<div class="btn-group dropup '+(e(i&&i.tagWhitelist&&i.tagWhitelist.length)?"":"hidden")+'" component="composer/tag/dropdown">\r\n\t\t\t\t\t<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">\r\n\t\t\t\t\t\t<span class="visible-sm-inline visible-md-inline visible-lg-inline"><i class="fa fa-tags"></i></span>\r\n\t\t\t\t\t\t<span class="caret"></span>\r\n\t\t\t\t\t</button>\r\n\r\n\t\t\t\t\t<ul class="dropdown-menu">\r\n\t\t\t\t\t\t'+a.blocks.tagWhitelist(t,i,e,n,r)+'\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<input class="tags" type="text" class="form-control" placeholder="[[tags:enter_tags_here, '+t.__escape(e(i&&i.minimumTagLength))+", "+t.__escape(e(i&&i.maximumTagLength))+']]" tabindex="5"/>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t':"")+"\r\n\r\n\r\n\t</div>\r\n</div>\r\n"}return a.blocks={tagWhitelist:function(i,e,n,t){return t(n(e&&e.tagWhitelist),function(t){return'\r\n\t\t\t\t\t\t<li data-tag="'+i.__escape(n(e&&e.tagWhitelist&&e.tagWhitelist[t]))+'"><a href="#">'+i.__escape(n(e&&e.tagWhitelist&&e.tagWhitelist[t]))+"</a></li>\r\n\t\t\t\t\t\t"})},formatting:function(i,e,n,t){return t(n(e&&e.formatting),function(t){return"\r\n\t\t\t\t\t\t"+(n(e&&e.formatting&&e.formatting[t]&&e.formatting[t].spacer)?'\r\n\t\t\t\t\t\t<li class="spacer"></li>\r\n\t\t\t\t\t\t':"\r\n\t\t\t\t\t\t"+(n(e&&e.formatting&&e.formatting[t]&&e.formatting[t].mobile)?"":'\r\n\t\t\t\t\t\t<li tabindex="-1" data-format="'+i.__escape(n(e&&e.formatting&&e.formatting[t]&&e.formatting[t].name))+'"><i class="'+i.__escape(n(e&&e.formatting&&e.formatting[t]&&e.formatting[t].className))+'"></i></li>\r\n\t\t\t\t\t\t')+"\r\n\t\t\t\t\t\t")+"\r\n\t\t\t\t\t"})}},a});