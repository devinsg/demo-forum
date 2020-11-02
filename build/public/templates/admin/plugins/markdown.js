!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function i(t,n,e,o,l){return'<div class="row">\n\t<div class="col-sm-2 col-xs-12 settings-header">General</div>\n\t<div class="col-sm-10 col-xs-12">\n\t\t<form class="form markdown-settings">\n\t\t\t<div class="panel panel-default">\n\t\t\t\t<div class="panel-heading">Markdown</div>\n\t\t\t\t<div class="panel-body">\n\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t<div class="col-lg-6">\n\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t<label for="xhtmlOut">\n\t\t\t\t\t\t\t\t\t<input type="checkbox" name="xhtmlOut" id="xhtmlOut" />\n\t\t\t\t\t\t\t\t\tUse \'/\' to close single tags (<code>&lt;br /&gt;</code>)\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t<label for="breaks">\n\t\t\t\t\t\t\t\t\t<input type="checkbox" name="breaks" id="breaks" />\n\t\t\t\t\t\t\t\t\tTreat newlines as single line breaks\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t<label for="typographer">\n\t\t\t\t\t\t\t\t\t<input type="checkbox" name="typographer" id="typographer" />\n\t\t\t\t\t\t\t\t\tEnable smartypants and other sweet transforms (e.g. <code>(c)</code> &rarr; <code>&copy;</code>)\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t<label for="multimdTables">\n\t\t\t\t\t\t\t\t\t<input type="checkbox" name="multimdTables" id="multimdTables" />\n\t\t\t\t\t\t\t\t\tAllow advanced table syntax\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="col-lg-6">\n\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t<label for="linkify">\n\t\t\t\t\t\t\t\t\t<input type="checkbox" name="linkify" id="linkify" />\n\t\t\t\t\t\t\t\t\tAutoconvert url-like texts to links\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t<label for="externalBlank">\n\t\t\t\t\t\t\t\t\t<input type="checkbox" name="externalBlank" id="externalBlank" />\n\t\t\t\t\t\t\t\t\tOpen external links in a new tab/window\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t<label for="nofollow">\n\t\t\t\t\t\t\t\t\t<input type="checkbox" name="nofollow" id="nofollow" />\n\t\t\t\t\t\t\t\t\tTell web crawlers that external links are not to be followed\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t<label for="allowRTLO">\n\t\t\t\t\t\t\t\t\t<input type="checkbox" name="allowRTLO" id="allowRTLO" />\n\t\t\t\t\t\t\t\t\tAllow RTL override unicode in link content\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t<label for="checkboxes">\n\t\t\t\t\t\t\t\t\t<input type="checkbox" name="checkboxes" id="checkboxes" />\n\t\t\t\t\t\t\t\t\tInterpret <code>[ ]</code> and <code>[x]</code> as checkboxes\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="row">\n\t\t\t\t<div class="col-sm-6">\n\t\t\t\t\t<div class="panel panel-default">\n\t\t\t\t\t\t<div class="panel-heading">Code Formatting</div>\n\t\t\t\t\t\t<div class="panel-body">\n\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t<label for="highlight">\n\t\t\t\t\t\t\t\t\t<input type="checkbox" name="highlight" id="highlight" />\n\t\t\t\t\t\t\t\t\tAutomatically detect and highlight code blocks\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t<label for="highlightTheme">Use this theme for highlighted code blocks</label>\n\t\t\t\t\t\t\t\t<select class="form-control" name="highlightTheme" id="highlightTheme">\n\t\t\t\t\t\t\t\t\t'+i.blocks.themes(t,n,e,o,l)+'\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t<label for="langPrefix">\n\t\t\t\t\t\t\t\t\tPrefix for <code>code</code> blocks\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<input class="form-control" placeholder="language-" type="text" name="langPrefix" id="langPrefix" />\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t<label for="highlightLinesLanguageList">\n\t\t\t\t\t\t\t\t\tEnable line numbers for the following languages\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<select class="form-control" multiple="true" name="highlightLinesLanguageList" id="highlightLinesLanguageList" size="20">\n\t\t\t\t\t\t\t\t\t<option value="apache,apacheconf">Apache</option>\n\t\t\t\t\t\t\t\t\t<option value="bash,sh,zsh">Bash</option>\n\t\t\t\t\t\t\t\t\t<option value="cs,csharp">C#</option>\n\t\t\t\t\t\t\t\t\t<option value="cpp,c,cc,h,c++,h++,hpp">C++</option>\n\t\t\t\t\t\t\t\t\t<option value="css">CSS</option>\n\t\t\t\t\t\t\t\t\t<option value="coffeescript,coffee,cson,iced">CoffeeScript</option>\n\t\t\t\t\t\t\t\t\t<option value="diff,patch">Diff</option>\n\t\t\t\t\t\t\t\t\t<option value="xml,html,xhtml,rss,atom,xjb,xsd,xsl,plist">HTML</option>\n\t\t\t\t\t\t\t\t\t<option value="http,https">HTTP</option>\n\t\t\t\t\t\t\t\t\t<option value="ini,toml">Ini</option>\n\t\t\t\t\t\t\t\t\t<option value="json">JSON</option>\n\t\t\t\t\t\t\t\t\t<option value="java">Java</option>\n\t\t\t\t\t\t\t\t\t<option value="javascript,js,jsx">Javascript</option>\n\t\t\t\t\t\t\t\t\t<option value="makefile,mk,mak">Makefile</option>\n\t\t\t\t\t\t\t\t\t<option value="markdown,md,mkdown,mkd">Markdown</option>\n\t\t\t\t\t\t\t\t\t<option value="nginx,nginxconf">Nginx</option>\n\t\t\t\t\t\t\t\t\t<option value="objectivec,objc,obj-c">Objective C</option>\n\t\t\t\t\t\t\t\t\t<option value="php,php3,php4,php5,php6">PHP</option>\n\t\t\t\t\t\t\t\t\t<option value="perl,pl,pm">Perl</option>\n\t\t\t\t\t\t\t\t\t<option value="python,py,gyp">Python</option>\n\t\t\t\t\t\t\t\t\t<option value="ruby,rb,gemspec,podspec,thor,irb">Ruby</option>\n\t\t\t\t\t\t\t\t\t<option value="sql">SQL</option>\n\t\t\t\t\t\t\t\t\t<option value="shell,console">Shell</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t<p class="help-block">\n\t\t\t\t\t\t\t\t\tYou can use <code>ctrl</code> and <code>shift</code> to select/deselect multiple\n\t\t\t\t\t\t\t\t\titems and select/deselect items in ranges.\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="col-sm-6">\n\t\t\t\t\t<div class="panel panel-danger">\n\t\t\t\t\t\t<div class="panel-heading">Danger Zone</div>\n\t\t\t\t\t\t<div class="panel-body">\n\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t<label for="html">\n\t\t\t\t\t\t\t\t\t<input type="checkbox" name="html" id="html" />\n\t\t\t\t\t\t\t\t\tAllow HTML\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<div class="alert alert-warning">\n\t\t\t\t\t\t\t\t\t<strong><i class="icon-warning-sign"></i> Careful!</strong>\n\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\tAutomatic HTML sanitization is an important part of ensuring that\n\t\t\t\t\t\t\t\t\t\tyour users do not run arbitrary javascript or alter parts of the\n\t\t\t\t\t\t\t\t\t\tpage that were not meant to be altered. If this option is checked,\n\t\t\t\t\t\t\t\t\t\tbeware the consequences!\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n\n<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">\n\t<i class="material-icons">save</i>\n</button>\n'}return i.blocks={themes:function(n,e,o,t){return t(o(e&&e.themes),function(t){return'\n\t\t\t\t\t\t\t\t\t<option value="'+n.__escape(o(e&&e.themes&&e.themes[t]&&e.themes[t].name))+'">'+n.__escape(o(e&&e.themes&&e.themes[t]&&e.themes[t].name))+"</option>\n\t\t\t\t\t\t\t\t\t"})}},i});