!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function d(t,a,s,n,e){return'<div class="row dashboard">\n\t<div class="col-lg-9">\n\t\t<div class="panel panel-default" id="analytics-panel">\n\t\t\t<div class="panel-heading">\n\t\t\t\t[[admin/dashboard:forum-traffic]]\n\t\t\t\t<div class="pull-right">\n\t\t\t\t\t<a id="view-as-json" href="'+t.__escape(s(a&&a.config&&a.config.relative_path))+'/api/admin/analytics&type=hourly"><i class="fa fa-terminal"></i></a>\n\t\t\t\t\t<i class="fa fa-expand"></i>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="panel-body">\n\t\t\t\t<div class="graph-container" id="analytics-traffic-container">\n\t\t\t\t\t<canvas id="analytics-traffic" width="100%" height="400"></canvas>\n\t\t\t\t</div>\n\t\t\t\t<hr/>\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="col-sm-3 hidden-xs text-center pageview-stats">\n\t\t\t\t\t\t<div><strong id="pageViewsThirty">0</strong></div>\n\t\t\t\t\t\t<div><a href="#" class="updatePageviewsGraph" data-action="updateGraph" data-units="days" data-amount="30">[[admin/dashboard:page-views-thirty]]</a></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="col-sm-3 text-center pageview-stats">\n\t\t\t\t\t\t<div><strong id="pageViewsSeven">0</strong></div>\n\t\t\t\t\t\t<div><a href="#" class="updatePageviewsGraph" data-action="updateGraph" data-units="days" data-amount="7">[[admin/dashboard:page-views-seven]]</a></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="col-sm-3 hidden-xs text-center pageview-stats">\n\t\t\t\t\t\t<div><strong id="pageViewsPastDay">0</strong></div>\n\t\t\t\t\t\t<div><a href="#" class="updatePageviewsGraph active" data-action="updateGraph" data-units="hours">[[admin/dashboard:page-views-last-day]]</a></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="col-sm-3 text-center pageview-stats">\n\t\t\t\t\t\t<div><strong><i class="fa fa-clock-o"></i></strong></div>\n\t\t\t\t\t\t<div><a href="#" class="updatePageviewsGraph" data-action="updateGraph" data-units="custom">[[admin/dashboard:page-views-custom]]</a></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="row">\n\t\t\t<div class="table-responsive">\n\t\t\t\t<table class="table table-striped">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t<th class="text-right">[[admin/dashboard:stats.yesterday]]</th>\n\t\t\t\t\t\t\t<th class="text-right">[[admin/dashboard:stats.today]]</th>\n\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t<th class="text-right">[[admin/dashboard:stats.last-week]]</th>\n\t\t\t\t\t\t\t<th class="text-right">[[admin/dashboard:stats.this-week]]</th>\n\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t<th class="text-right">[[admin/dashboard:stats.last-month]]</th>\n\t\t\t\t\t\t\t<th class="text-right">[[admin/dashboard:stats.this-month]]</th>\n\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t<th class="text-right">[[admin/dashboard:stats.all]]</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t'+d.blocks.stats(t,a,s,n,e)+'\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="row">\n\t\t\t<div class="col-lg-4">\n\t\t\t\t<div class="panel panel-default">\n\t\t\t\t\t<div class="panel-heading">[[admin/dashboard:anonymous-registered-users]]</div>\n\t\t\t\t\t<div class="panel-body">\n\t\t\t\t\t\t<div class="graph-container pie-chart legend-down">\n\t\t\t\t\t\t\t<canvas id="analytics-registered"></canvas>\n\t\t\t\t\t\t\t<ul class="graph-legend" id="analytics-legend">\n\t\t\t\t\t\t\t\t<li><div class="registered"></div><span>(<span class="count"></span>) [[admin/dashboard:registered]]</span></li>\n\t\t\t\t\t\t\t\t<li><div class="anonymous"></div><span>(<span class="count"></span>) [[admin/dashboard:anonymous]]</span></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="col-lg-4">\n\t\t\t\t<div class="panel panel-default">\n\t\t\t\t\t<div class="panel-heading">[[admin/dashboard:user-presence]]</div>\n\t\t\t\t\t<div class="panel-body">\n\t\t\t\t\t\t<div class="graph-container pie-chart legend-down">\n\t\t\t\t\t\t\t<canvas id="analytics-presence"></canvas>\n\t\t\t\t\t\t\t<ul class="graph-legend" id="analytics-presence-legend">\n\t\t\t\t\t\t\t\t<li><div class="reading-posts"></div><span>(<span class="count"></span>) [[admin/dashboard:reading-posts]]</span></li>\n\t\t\t\t\t\t\t\t<li><div class="on-categories"></div><span>(<span class="count"></span>) [[admin/dashboard:on-categories]]</span></li>\n\t\t\t\t\t\t\t\t<li><div class="browsing-topics"></div><span>(<span class="count"></span>) [[admin/dashboard:browsing-topics]]</span></li>\n\t\t\t\t\t\t\t\t<li><div class="recent"></div><span>(<span class="count"></span>) [[admin/dashboard:recent]]</span></li>\n\t\t\t\t\t\t\t\t<li><div class="unread"></div><span>(<span class="count"></span>) [[admin/dashboard:unread]]</span></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="col-lg-4">\n\t\t\t\t<div class="panel panel-default">\n\t\t\t\t\t<div class="panel-heading">[[admin/dashboard:high-presence-topics]]</div>\n\t\t\t\t\t<div class="panel-body">\n\t\t\t\t\t\t<div class="graph-container pie-chart legend-down">\n\t\t\t\t\t\t\t<canvas id="analytics-topics"></canvas>\n\t\t\t\t\t\t\t<ul class="graph-legend" id="topics-legend"></ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class="col-lg-3">\n\t\t'+(s(a&&a.showSystemControls)?'\n\t\t<div class="panel panel-default">\n\t\t\t<div class="panel-heading">[[admin/dashboard:control-panel]]</div>\n\t\t\t<div class="panel-body text-center">\n\t\t\t\t<p>\n\t\t\t\t\t<button class="btn btn-block btn-warning restart"'+(s(a&&a.canRestart)?"":" disabled")+'>[[admin/dashboard:restart]]</button>\n\t\t\t\t\t<button class="btn btn-block btn-danger rebuild-and-restart"'+(s(a&&a.canRestart)?"":" disabled")+">[[admin/dashboard:rebuild-and-restart]]</button>\n\t\t\t\t</p>\n\t\t\t\t"+(s(a&&a.lastrestart)?'\n\t\t\t\t<p>\n\t\t\t\t\t[[admin/dashboard:last-restarted-by]]<br />\n\t\t\t\t\t<a href="'+t.__escape(s(a&&a.config&&a.config.relative_path))+"/uid/"+t.__escape(s(a&&a.lastrestart&&a.lastrestart.uid))+'"><span class="label label-info">'+t.__escape(s(a&&a.lastrestart&&a.lastrestart.user&&a.lastrestart.user.username))+'</span></a> <span class="timeago" title="'+t.__escape(s(a&&a.lastrestart&&a.lastrestart.timestampISO))+'"></span>\n\t\t\t\t</p>\n\t\t\t\t':"")+'\n\t\t\t\t<p class="'+(s(a&&a.canRestart)?"help-block":"alert alert-warning")+'">\n\t\t\t\t\t'+(s(a&&a.canRestart)?"\n\t\t\t\t\t[[admin/dashboard:restart-warning]]\n\t\t\t\t\t":"\n\t\t\t\t\t[[admin/dashboard:restart-disabled]]\n\t\t\t\t\t")+'\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\t<a href="'+t.__escape(s(a&&a.config&&a.config.relative_path))+'/admin/settings/advanced" class="btn btn-info btn-block" data-placement="bottom" data-toggle="tooltip" title="[[admin/dashboard:maintenance-mode-title]]">[[admin/dashboard:maintenance-mode]]</a>\n\t\t\t\t</p>\n\n\t\t\t\t<hr />\n\t\t\t\t<span id="toggle-realtime">[[admin/dashboard:realtime-chart-updates]] <strong>OFF</strong> <i class="fa fa fa-toggle-off pointer"></i></span>\n\t\t\t</div>\n\t\t</div>\n\t\t':"")+'\n\n\t\t<div class="panel panel-default">\n\t\t\t<div class="panel-heading">[[admin/dashboard:active-users]]</div>\n\t\t\t<div class="panel-body">\n\t\t\t\t<div id="active-users" class="stats"></div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="panel panel-default">\n\t\t\t<div class="panel-heading">[[admin/dashboard:updates]]</div>\n\t\t\t<div class="panel-body">\n\t\t\t\t<div class="alert '+(s(a&&a.lookupFailed)?"alert-danger":s(a&&a.upgradeAvailable)?"alert-warning":s(a&&a.currentPrerelease)?"alert-info":"alert-success")+' version-check">\n\t\t\t\t\t<p>[[admin/dashboard:running-version, '+t.__escape(s(a&&a.version))+"]]</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t"+(s(a&&a.lookupFailed)?"\n\t\t\t\t\t[[admin/dashboard:latest-lookup-failed]]\n\t\t\t\t\t":"\n\t\t\t\t\t\t"+(s(a&&a.upgradeAvailable)?"\n\t\t\t\t\t\t\t"+(s(a&&a.currentPrerelease)?"\n\t\t\t\t\t\t\t[[admin/dashboard:prerelease-upgrade-available, "+t.__escape(s(a&&a.latestVersion))+"]]\n\t\t\t\t\t\t\t":"\n\t\t\t\t\t\t\t[[admin/dashboard:upgrade-available, "+t.__escape(s(a&&a.latestVersion))+"]]\n\t\t\t\t\t\t\t")+"\n\t\t\t\t\t\t":"\n\t\t\t\t\t\t\t"+(s(a&&a.currentPrerelease)?"\n\t\t\t\t\t\t\t[[admin/dashboard:prerelease-warning]]\n\t\t\t\t\t\t\t":"\n\t\t\t\t\t\t\t[[admin/dashboard:up-to-date]]\n\t\t\t\t\t\t\t")+"\n\t\t\t\t\t\t")+"\n\t\t\t\t\t")+'\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t<p>\n\t\t\t\t\t[[admin/dashboard:keep-updated]]\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="panel panel-default">\n\t\t\t<div class="panel-heading">[[admin/dashboard:notices]]</div>\n\t\t\t<div class="panel-body">\n\t\t\t'+d.blocks.notices(t,a,s,n,e)+"\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"}return d.blocks={notices:function(a,s,n,t){return t(n(s&&s.notices),function(t){return"\n\t\t\t\t<div>\n\t\t\t\t\t"+(n(s&&s.notices&&s.notices[t]&&s.notices[t].done)?'\n\t\t\t\t\t<i class="fa fa-fw fa-check text-success"></i> '+a.__escape(n(s&&s.notices&&s.notices[t]&&s.notices[t].doneText))+"\n\t\t\t\t\t":"\n\t\t\t\t\t"+(n(s&&s.notices&&s.notices[t]&&s.notices[t].link)?'<a href="'+a.__escape(n(s&&s.notices&&s.notices[t]&&s.notices[t].link))+'" data-toggle="tooltip" title="'+a.__escape(n(s&&s.notices&&s.notices[t]&&s.notices[t].tooltip))+'">':"")+'\n\t\t\t\t\t<i class="fa fa-fw fa-times text-danger"></i> '+a.__escape(n(s&&s.notices&&s.notices[t]&&s.notices[t].notDoneText))+"\n\t\t\t\t\t"+(n(s&&s.notices&&s.notices[t]&&s.notices[t].link)?"</a>":"")+"\n\t\t\t\t\t")+"\n\t\t\t\t</div>\n\t\t\t"})},stats:function(a,s,n,t){return t(n(s&&s.stats),function(t){return"\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><strong>"+a.__escape(n(s&&s.stats&&s.stats[t]&&s.stats[t].name))+'</strong></td>\n\t\t\t\t\t\t\t<td class="text-right formatted-number">'+a.__escape(n(s&&s.stats&&s.stats[t]&&s.stats[t].yesterday))+'</td>\n\t\t\t\t\t\t\t<td class="text-right formatted-number">'+a.__escape(n(s&&s.stats&&s.stats[t]&&s.stats[t].today))+'</td>\n\t\t\t\t\t\t\t<td class="'+a.__escape(n(s&&s.stats&&s.stats[t]&&s.stats[t].dayTextClass))+'"><small>'+a.__escape(n(s&&s.stats&&s.stats[t]&&s.stats[t].dayIncrease))+'%</small></td>\n\n\t\t\t\t\t\t\t<td class="text-right formatted-number">'+a.__escape(n(s&&s.stats&&s.stats[t]&&s.stats[t].lastweek))+'</td>\n\t\t\t\t\t\t\t<td class="text-right formatted-number">'+a.__escape(n(s&&s.stats&&s.stats[t]&&s.stats[t].thisweek))+'</td>\n\t\t\t\t\t\t\t<td class="'+a.__escape(n(s&&s.stats&&s.stats[t]&&s.stats[t].weekTextClass))+'"><small>'+a.__escape(n(s&&s.stats&&s.stats[t]&&s.stats[t].weekIncrease))+'%</small></td>\n\n\t\t\t\t\t\t\t<td class="text-right formatted-number">'+a.__escape(n(s&&s.stats&&s.stats[t]&&s.stats[t].lastmonth))+'</td>\n\t\t\t\t\t\t\t<td class="text-right formatted-number">'+a.__escape(n(s&&s.stats&&s.stats[t]&&s.stats[t].thismonth))+'</td>\n\t\t\t\t\t\t\t<td class="'+a.__escape(n(s&&s.stats&&s.stats[t]&&s.stats[t].monthTextClass))+'"><small>'+a.__escape(n(s&&s.stats&&s.stats[t]&&s.stats[t].monthIncrease))+'%</small></td>\n\n\t\t\t\t\t\t\t<td class="text-right formatted-number">'+a.__escape(n(s&&s.stats&&s.stats[t]&&s.stats[t].alltime))+"</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t"})}},d});