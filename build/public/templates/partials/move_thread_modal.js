!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function s(t,e,a,o,r){return'<div id="move_thread_modal" class="modal" tabindex="-1" role="dialog" aria-labelledby="Move Topic" aria-hidden="true">\r\n\t<div class="modal-dialog">\r\n\t\t<div class="modal-content">\r\n\t\t\t<div class="modal-header">\r\n\t\t\t\t<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\r\n\t\t\t\t<h3>[[topic:move_topic]]</h3>\r\n\t\t\t</div>\r\n\t\t\t<div class="modal-body">\r\n\t\t\t\t<div component="category-selector" class="btn-group '+(a(e&&e.pullRight)?"pull-right":"")+'">\r\n\t<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\r\n\t\t<span component="category-selector-selected">'+(a(e&&e.selectedCategory)?'<span class="fa-stack" style="'+t.__escape(r(e,t,"generateCategoryBackground",[a(e&&e.selectedCategory)]))+'"><i class="fa fa-fw fa-stack-1x '+t.__escape(a(e&&e.selectedCategory&&e.selectedCategory.icon))+'" style="color: '+t.__escape(a(e&&e.selectedCategory&&e.selectedCategory.color))+';"></i></span> '+t.__escape(a(e&&e.selectedCategory&&e.selectedCategory.name)):"\r\n\t\t[[topic:thread_tools.select_category]]")+'</span> <span class="caret"></span>\r\n\t</button>\r\n\t<div component="category-selector-search" class="hidden">\r\n\t\t<input type="text" class="form-control" autocomplete="off">\r\n\t</div>\r\n\t<ul component="category/list" class="dropdown-menu category-dropdown-menu '+(a(e&&e.pullRight)?"dropdown-menu-right":"")+'" role="menu">\r\n\t\t<li component="category/no-matches" role="presentation" class="category hidden">\r\n\t\t\t<a role="menu-item">[[search:no-matches]]</a>\r\n\t\t</li>\r\n\t\t'+s.blocks.categories(t,e,a,o,r)+'\r\n\t</ul>\r\n</div>\r\n\t\t\t</div>\r\n\t\t\t<div class="modal-footer">\r\n\t\t\t\t<button type="button" class="btn btn-default" data-dismiss="modal" id="move_thread_cancel">[[global:buttons.close]]</button>\r\n\t\t\t\t<button type="button" class="btn btn-primary" id="move_thread_commit" disabled>[[topic:confirm_move]]</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>'}return s.blocks={categories:function(e,a,o,t,r){return t(o(a&&a.categories),function(t){return'\r\n\t\t<li role="presentation" class="category '+(o(a&&a.categories&&a.categories[t]&&a.categories[t].disabledClass)?"disabled":"")+'" data-cid="'+e.__escape(o(a&&a.categories&&a.categories[t]&&a.categories[t].cid))+'" data-name="'+e.__escape(o(a&&a.categories&&a.categories[t]&&a.categories[t].name))+'" data-parent-cid="'+e.__escape(o(a&&a.categories&&a.categories[t]&&a.categories[t].parentCid))+'">\r\n\t\t\t<a role="menu-item">'+e.__escape(o(a&&a.categories&&a.categories[t]&&a.categories[t].level))+'<span component="category-markup">'+(o(a&&a.categories&&a.categories[t]&&a.categories[t].icon)?'<span class="fa-stack" style="'+e.__escape(r(a,e,"generateCategoryBackground",[o(a&&a.categories&&a.categories[t])]))+'"><i style="color: '+e.__escape(o(a&&a.categories&&a.categories[t]&&a.categories[t].color))+';" class="fa fa-stack-1x fa-fw '+e.__escape(o(a&&a.categories&&a.categories[t]&&a.categories[t].icon))+'"></i></span>':"")+" "+e.__escape(o(a&&a.categories&&a.categories[t]&&a.categories[t].name))+"</span></a>\r\n\t\t</li>\r\n\t\t"})}},s});