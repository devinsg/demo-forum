!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function c(t,e,r,n,s){return(r(e&&e.breadcrumbs&&e.breadcrumbs.length)?'\r\n<ol class="breadcrumb" itemscope="itemscope" itemprop="breadcrumb" itemtype="http://schema.org/BreadcrumbList">\r\n\t'+c.blocks.breadcrumbs(t,e,r,n,s)+"\r\n</ol>\r\n":"")+"\r\n"}return c.blocks={breadcrumbs:function(n,s,c,t){return t(c(s&&s.breadcrumbs),function(t,e,r){return"\r\n\t<li"+(e===r-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemprop="itemListElement" itemtype="http://schema.org/ListItem" '+(e===r-1?'class="active"':"")+'>\r\n\t\t<meta itemprop="position" content="'+n.__escape(e)+'" />\r\n\t\t'+(e!==r-1?'<a href="'+n.__escape(c(s&&s.breadcrumbs&&s.breadcrumbs[t]&&s.breadcrumbs[t].url))+'" itemprop="item">':"")+'\r\n\t\t\t<span itemprop="name">\r\n\t\t\t\t'+n.__escape(c(s&&s.breadcrumbs&&s.breadcrumbs[t]&&s.breadcrumbs[t].text))+"\r\n\t\t\t\t"+(e===r-1?"\r\n\t\t\t\t"+(c(s&&s["feeds:disableRSS"])?"":"\r\n\t\t\t\t"+(c(s&&s.rssFeedUrl)?'<a target="_blank" href="'+n.__escape(c(s&&s.rssFeedUrl))+'" itemprop="item"><i class="fa fa-rss-square"></i></a>':""))+"\r\n\t\t\t\t":"")+"\r\n\t\t\t</span>\r\n\t\t"+(e!==r-1?"</a>":"")+"\r\n\t</li>\r\n\t"})}},c});