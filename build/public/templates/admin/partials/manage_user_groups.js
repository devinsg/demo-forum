!function(s){"object"==typeof module&&module.exports?module.exports=s():"function"==typeof define&&define.amd&&define(s)}(function(){return function(r,u,o,s,e){return s(o(u&&u.users),function(e){return'\n<div data-uid="'+r.__escape(o(u&&u.users&&u.users[e]&&u.users[e].uid))+'">\n    <h5>'+r.__escape(o(u&&u.users&&u.users[e]&&u.users[e].username))+'</h5>\n    <div class="group-area">\n        '+(o(u&&u.users&&u.users[e]&&u.users[e].users&&u.users[e].users.groups)?s(o(u&&u.users&&u.users[e]&&u.users[e].users&&u.users[e].users.groups),function(s){return'\n        <div class="group-card pull-left" data-group-name="'+r.__escape(o(u&&u.users&&u.users[e]&&u.users[e].users&&u.users[e].users.groups&&u.users[e].users.groups[s]&&u.users[e].users.groups[s].nameEscaped))+'">\n            <a href="'+r.__escape(o(u&&u.config&&u.config.relative_path))+"/admin/manage/groups/"+r.__escape(o(u&&u.users&&u.users[e]&&u.users[e].users&&u.users[e].users.groups&&u.users[e].users.groups[s]&&u.users[e].users.groups[s].nameEncoded))+'"><span class="label label-default" style="color:'+r.__escape(o(u&&u.users&&u.users[e]&&u.users[e].users&&u.users[e].users.groups&&u.users[e].users.groups[s]&&u.users[e].users.groups[s].textColor))+"; background-color: "+r.__escape(o(u&&u.users&&u.users[e]&&u.users[e].users&&u.users[e].users.groups&&u.users[e].users.groups[s]&&u.users[e].users.groups[s].labelColor))+';">'+(o(u&&u.users&&u.users[e]&&u.users[e].users&&u.users[e].users.groups&&u.users[e].users.groups[s]&&u.users[e].users.groups[s].icon)?'<i class="fa '+r.__escape(o(u&&u.users&&u.users[e]&&u.users[e].users&&u.users[e].users.groups&&u.users[e].users.groups[s]&&u.users[e].users.groups[s].icon))+'"></i> ':"")+r.__escape(o(u&&u.users&&u.users[e]&&u.users[e].users&&u.users[e].users.groups&&u.users[e].users.groups[s]&&u.users[e].users.groups[s].displayName))+' <i class="remove-group-icon fa fa-times" role="button"></i></span></a>\n        </div>\n        '}):s(o(u&&u.users&&u.users[e]&&u.users[e].groups),function(s){return'\n        <div class="group-card pull-left" data-group-name="'+r.__escape(o(u&&u.users&&u.users[e]&&u.users[e].groups&&u.users[e].groups[s]&&u.users[e].groups[s].nameEscaped))+'">\n            <a href="'+r.__escape(o(u&&u.config&&u.config.relative_path))+"/admin/manage/groups/"+r.__escape(o(u&&u.users&&u.users[e]&&u.users[e].groups&&u.users[e].groups[s]&&u.users[e].groups[s].nameEncoded))+'"><span class="label label-default" style="color:'+r.__escape(o(u&&u.users&&u.users[e]&&u.users[e].groups&&u.users[e].groups[s]&&u.users[e].groups[s].textColor))+"; background-color: "+r.__escape(o(u&&u.users&&u.users[e]&&u.users[e].groups&&u.users[e].groups[s]&&u.users[e].groups[s].labelColor))+';">'+(o(u&&u.users&&u.users[e]&&u.users[e].groups&&u.users[e].groups[s]&&u.users[e].groups[s].icon)?'<i class="fa '+r.__escape(o(u&&u.users&&u.users[e]&&u.users[e].groups&&u.users[e].groups[s]&&u.users[e].groups[s].icon))+'"></i> ':"")+r.__escape(o(u&&u.users&&u.users[e]&&u.users[e].groups&&u.users[e].groups[s]&&u.users[e].groups[s].displayName))+' <i class="remove-group-icon fa fa-times" role="button"></i></span></a>\n        </div>\n        '}))+'\n    </div>\n    <input data-uid="'+r.__escape(o(u&&u.users&&u.users[e]&&u.users[e].uid))+'" class="form-control group-search" placeholder="[[admin/manage/users:add-group]]" />\n</div>\n'})}});