!function(n){"object"==typeof module&&module.exports?module.exports=n():"function"==typeof define&&define.amd&&define(n)}(function(){function a(n,i,e,l,t){return'<p class="lead">\n\t[[ip-blacklist:validate.x-valid, '+n.__escape(e(i&&i.valid&&i.valid.length))+", "+n.__escape(e(i&&i.numRules))+"]]\n</p>\n\n"+(e(i&&i.invalid&&i.invalid.length)?"\n<p>\n\t[[ip-blacklist:validate.x-invalid, "+n.__escape(e(i&&i.invalid&&i.invalid.length))+"]]\n</p>\n<ul>\n\t"+a.blocks.invalid(n,i,e,l,t)+"\n</ul>\n":"")}return a.blocks={invalid:function(i,e,l,n){return n(l(e&&e.invalid),function(n){return"\n\t<li><code>"+i.__escape(l(e&&e.invalid&&e.invalid[n]))+"</code></li>\n\t"})}},a});