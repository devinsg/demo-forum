!function(e){"object"==typeof module&&module.exports?module.exports=e():"function"==typeof define&&define.amd&&define(e)}(function(){function a(e,s,t,r,i){return a.blocks.users(e,s,t,r,i)+"\n"}return a.blocks={users:function(s,t,r,e){return e(r(t&&t.users),function(e){return'\n<li data-uid="'+s.__escape(r(t&&t.users&&t.users[e]&&t.users[e].uid))+'">\n\t<div class="btn-group pull-right">\n\t\t<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\n\t\t\tPrivileges <span class="caret"></span>\n\t\t</button>\n\t\t<ul class="dropdown-menu" role="menu">\n\t\t\t<li role="presentation"><a href="#" data-priv="find" class="'+(r(t&&t.users&&t.users[e]&&t.users[e].privileges&&t.users[e].privileges.find)?"active":"")+'">Find Category</a></li>\n\t\t\t<li role="presentation"><a href="#" data-priv="read" class="'+(r(t&&t.users&&t.users[e]&&t.users[e].privileges&&t.users[e].privileges.read)?"active":"")+'">Access Category</a></li>\n\t\t\t<li role="presentation"><a href="#" data-priv="topics:read" class="'+(r(t&&t.users&&t.users[e]&&t.users[e].privileges&&t.users[e].privileges["topics:read"])?"active":"")+'">Access Topics</a></li>\n\t\t\t<li role="presentation"><a href="#" data-priv="topics:create" class="'+(r(t&&t.users&&t.users[e]&&t.users[e].privileges&&t.users[e].privileges["topics:create"])?"active":"")+'">Create Topics</a></li>\n\t\t\t<li role="presentation"><a href="#" data-priv="topics:reply" class="'+(r(t&&t.users&&t.users[e]&&t.users[e].privileges&&t.users[e].privileges["topics:reply"])?"active":"")+'">Reply to Topics</a></li>\n\t\t\t<li role="presentation"><a href="#" data-priv="posts:edit" class="'+(r(t&&t.users&&t.users[e]&&t.users[e].privileges&&t.users[e].privileges["posts:edit"])?"active":"")+'">Edit Posts</a></li>\n\t\t\t<li role="presentation"><a href="#" data-priv="posts:delete" class="'+(r(t&&t.users&&t.users[e]&&t.users[e].privileges&&t.users[e].privileges["posts:delete"])?"active":"")+'">Delete Posts</a></li>\n\t\t\t<li role="presentation"><a href="#" data-priv="topics:delete" class="'+(r(t&&t.users&&t.users[e]&&t.users[e].privileges&&t.users[e].privileges["topics:delete"])?"active":"")+'">Delete Topics</a></li>\n\t\t\t<li role="presentation" class="divider"></li>\n\t\t\t<li role="presentation"><a href="#" data-priv="mods" class="'+(r(t&&t.users&&t.users[e]&&t.users[e].privileges&&t.users[e].privileges.mods)?"active":"")+'">Moderator</a></li>\n\t\t</ul>\n\t</div>\n\t<img src="'+s.__escape(r(t&&t.users&&t.users[e]&&t.users[e].picture))+'" /> '+s.__escape(r(t&&t.users&&t.users[e]&&t.users[e].username))+"\n</li>\n"})}},a});