!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function s(t,n,e,o,i){return'<div class="info">\n\t<div class="panel panel-default">\n\t\t<div class="panel-heading">\n\t\t\t<h3 class="panel-title">[[admin/development/info:you-are-on, '+t.__escape(e(n&&n.host))+", "+t.__escape(e(n&&n.port))+"]] &bull; [[admin/development/info:ip, "+t.__escape(e(n&&n.ip))+']]</h3>\n\t\t</div>\n\n\t\t<div class="panel-body">\n\t\t\t<span>[[admin/development/info:nodes-responded, '+t.__escape(e(n&&n.nodeCount))+", "+t.__escape(e(n&&n.timeout))+']]</span>\n\n\t\t\t<table class="table table-striped">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>[[admin/development/info:host]]</td>\n\t\t\t\t\t\t<td class="text-center">[[admin/development/info:primary]]</td>\n\t\t\t\t\t\t<td>[[admin/development/info:pid]]</td>\n\t\t\t\t\t\t<td>[[admin/development/info:nodejs]]</td>\n\t\t\t\t\t\t<td>[[admin/development/info:online]]</td>\n\t\t\t\t\t\t<td>[[admin/development/info:git]]</td>\n\t\t\t\t\t\t<td>[[admin/development/info:cpu-usage]]</td>\n\t\t\t\t\t\t<td>[[admin/development/info:memory]]</td>\n\t\t\t\t\t\t<td>[[admin/development/info:load]]</td>\n\t\t\t\t\t\t<td>[[admin/development/info:uptime]]</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t'+s.blocks.info(t,n,e,o,i)+'\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class="panel panel-default">\n\t\t<div class="panel-heading">\n\t\t\t<h3 class="panel-title">[[admin/development/info:info]]</h3>\n\t\t</div>\n\n\t\t<div class="panel-body">\n\t\t\t<div class="highlight">\n\t\t\t\t<pre>'+t.__escape(e(n&&n.infoJSON))+"</pre>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"}return s.blocks={info:function(n,e,o,t){return t(o(e&&e.info),function(t){return"\n\t\t\t\t<tr>\n\t\t\t\t\t<td>"+n.__escape(o(e&&e.info&&e.info[t]&&e.info[t].os&&e.info[t].os.hostname))+":"+n.__escape(o(e&&e.info&&e.info[t]&&e.info[t].process&&e.info[t].process.port))+'</td>\n\t\t\t\t\t<td class="text-center">\n\t\t\t\t\t\t'+(o(e&&e.info&&e.info[t]&&e.info[t].nodebb&&e.info[t].nodebb.isPrimary)?'<i class="fa fa-check"></i>':'<i class="fa fa-times"></i>')+" /\n\t\t\t\t\t\t"+(o(e&&e.info&&e.info[t]&&e.info[t].nodebb&&e.info[t].nodebb.runJobs)?'<i class="fa fa-check"></i>':'<i class="fa fa-times"></i>')+"\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>"+n.__escape(o(e&&e.info&&e.info[t]&&e.info[t].process&&e.info[t].process.pid))+"</td>\n\t\t\t\t\t<td>"+n.__escape(o(e&&e.info&&e.info[t]&&e.info[t].process&&e.info[t].process.version))+'</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<span title="[[admin/development/info:registered]]">'+n.__escape(o(e&&e.info&&e.info[t]&&e.info[t].stats&&e.info[t].stats.onlineRegisteredCount))+'</span> /\n\t\t\t\t\t\t<span title="[[admin/development/info:guests]]">'+n.__escape(o(e&&e.info&&e.info[t]&&e.info[t].stats&&e.info[t].stats.onlineGuestCount))+'</span> /\n\t\t\t\t\t\t<span title="[[admin/development/info:sockets]]">'+n.__escape(o(e&&e.info&&e.info[t]&&e.info[t].stats&&e.info[t].stats.socketCount))+"</span>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>"+n.__escape(o(e&&e.info&&e.info[t]&&e.info[t].git&&e.info[t].git.branch))+'@<a href="https://github.com/NodeBB/NodeBB/commit/'+n.__escape(o(e&&e.info&&e.info[t]&&e.info[t].git&&e.info[t].git.hash))+'" target="_blank">'+n.__escape(o(e&&e.info&&e.info[t]&&e.info[t].git&&e.info[t].git.hashShort))+"</a></td>\n\t\t\t\t\t<td>"+n.__escape(o(e&&e.info&&e.info[t]&&e.info[t].process&&e.info[t].process.cpuUsage&&e.info[t].process.cpuUsage.user))+" / "+n.__escape(o(e&&e.info&&e.info[t]&&e.info[t].process&&e.info[t].process.cpuUsage&&e.info[t].process.cpuUsage.system))+"</td>\n\t\t\t\t\t<td>"+n.__escape(o(e&&e.info&&e.info[t]&&e.info[t].process&&e.info[t].process.memoryUsage&&e.info[t].process.memoryUsage.humanReadable))+" mb</td>\n\t\t\t\t\t<td>"+n.__escape(o(e&&e.info&&e.info[t]&&e.info[t].os&&e.info[t].os.load))+"</td>\n\t\t\t\t\t<td>"+n.__escape(o(e&&e.info&&e.info[t]&&e.info[t].process&&e.info[t].process.uptime))+"</td>\n\t\t\t\t</tr>\n\t\t\t\t"})}},s});