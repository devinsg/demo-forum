!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function e(t,n,r,o,a){return r(n&&n.showTopicTools)?'\r\n<div class="btn-group thread-tools bottom-sheet">\r\n\t<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">\r\n\t\t<span class="visible-sm-inline visible-md-inline visible-lg-inline">[[topic:thread_tools.title]]</span>\r\n\t\t<span class="visible-xs-inline"><i class="fa fa-fw fa-gear"></i></span>\r\n\t\t<span class="caret"></span>\r\n\t</button>\r\n\t<ul class="dropdown-menu pull-right">\r\n\t\t<li>\r\n\t\t\t<a component="topic/mark-unread-for-all" href="#">\r\n\t\t\t\t<i class="fa fa-fw fa-inbox"></i> [[topic:thread_tools.markAsUnreadForAll]]\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a component="topic/pin" href="#">\r\n\t\t\t\t<i class="fa fa-fw fa-thumb-tack"></i> [[topic:thread_tools.pin]]\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a component="topic/unpin" href="#" class="hidden">\r\n\t\t\t\t<i class="fa fa-fw fa-thumb-tack fa-rotate-90"></i> [[topic:thread_tools.unpin]]\r\n\t\t\t</a>\r\n\t\t</li>\r\n\r\n\t\t<li>\r\n\t\t\t<a component="topic/lock" href="#">\r\n\t\t\t\t<i class="fa fa-fw fa-lock"></i> [[topic:thread_tools.lock]]\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a component="topic/unlock" href="#" class="hidden">\r\n\t\t\t\t<i class="fa fa-fw fa-unlock"></i> [[topic:thread_tools.unlock]]\r\n\t\t\t</a>\r\n\t\t</li>\r\n\r\n\t\t<li class="divider"></li>\r\n\r\n\t\t<li>\r\n\t\t\t<a component="topic/move" href="#">\r\n\t\t\t\t<i class="fa fa-fw fa-arrows"></i> [[topic:thread_tools.move]]\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t\t'+(r(n&&n.template&&n.template.category)?'\r\n\t\t<li>\r\n\t\t\t<a component="topic/move-all" href="#">\r\n\t\t\t\t<i class="fa fa-fw fa-arrows"></i> [[topic:thread_tools.move_all]]\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t\t':"")+'\r\n\t\t<li>\r\n\t\t\t<a component="topic/merge" href="#">\r\n\t\t\t\t<i class="fa fa-fw fa-code-fork"></i> [[topic:thread_tools.merge]]\r\n\t\t\t</a>\r\n\t\t</li>\r\n\r\n\t\t<li class="divider"></li>\r\n\r\n\t\t<li>\r\n\t\t\t<a component="topic/delete" href="#">\r\n\t\t\t\t<i class="fa fa-fw fa-trash-o"></i> [[topic:thread_tools.delete]]\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a component="topic/restore" href="#" class="hidden">\r\n\t\t\t\t<i class="fa fa-fw fa-history"></i> [[topic:thread_tools.restore]]\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a component="topic/purge" href="#" class="hidden">\r\n\t\t\t\t<i class="fa fa-fw fa-eraser"></i> [[topic:thread_tools.purge]]\r\n\t\t\t</a>\r\n\t\t</li>\r\n\r\n\t\t'+e.blocks.thread_tools(t,n,r,o,a)+"\r\n\t</ul>\r\n</div>\r\n":""}return e.blocks={thread_tools:function(n,r,o,t){return t(o(r&&r.thread_tools),function(t){return'\r\n\t\t<li>\r\n\t\t\t<a href="#" class="'+n.__escape(o(r&&r.thread_tools&&r.thread_tools[t]&&r.thread_tools[t].class))+'"><i class="fa fa-fw '+n.__escape(o(r&&r.thread_tools&&r.thread_tools[t]&&r.thread_tools[t].icon))+'"></i> '+n.__escape(o(r&&r.thread_tools&&r.thread_tools[t]&&r.thread_tools[t].title))+"</a>\r\n\t\t</li>\r\n\t\t"})}},e});