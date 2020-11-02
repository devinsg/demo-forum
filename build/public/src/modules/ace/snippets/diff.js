define("ace/snippets/diff",["require","exports","module"],function(e,t,n){"use strict";t.snippetText='# DEP-3 (http://dep.debian.net/deps/dep3/) style patch header\nsnippet header DEP-3 style header\n\tDescription: ${1}\n\tOrigin: ${2:vendor|upstream|other}, ${3:url of the original patch}\n\tBug: ${4:url in upstream bugtracker}\n\tForwarded: ${5:no|not-needed|url}\n\tAuthor: ${6:`g:snips_author`}\n\tReviewed-by: ${7:name and email}\n\tLast-Update: ${8:`strftime("%Y-%m-%d")`}\n\tApplied-Upstream: ${9:upstream version|url|commit}\n\n',t.scope="diff"});(function(){window.require(["ace/snippets/diff"],function(e){if(typeof module=="object"&&typeof exports=="object"&&module){module.exports=e}})})();
//# sourceMappingURL=diff.js.map