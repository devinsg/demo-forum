!function(e){"object"==typeof module&&module.exports?module.exports=e():"function"==typeof define&&define.amd&&define(e)}(function(){function t(e,s,r,u,n){return'\n<input class="form-control" type="text" placeholder="[[global:search]]"/>\n\n<div class="list-group" id="search-result">\n    '+t.blocks.users(e,s,r,u,n)+"\n</div>\n"}return t.blocks={users:function(s,r,u,e){return e(u(r&&r.users),function(e){return'\n    <a href="#" class="list-group-item" data-username="'+s.__escape(u(r&&r.users&&r.users[e]&&r.users[e].username))+'" data-uid="'+s.__escape(u(r&&r.users&&r.users[e]&&r.users[e].uid))+'"><i class="fa fa-fw fa-check invisible"></i>'+s.__escape(u(r&&r.users&&r.users[e]&&r.users[e].username))+"</a>\n    "})}},t});