!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function a(t,e,n,o,i){return'<!DOCTYPE html>\n<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">\n<head>\n    <meta charset="utf-8"> \x3c!-- utf-8 works for most cases --\x3e\n    <meta name="viewport" content="width=device-width"> \x3c!-- Forcing initial-scale shouldn\'t be necessary --\x3e\n    <meta http-equiv="X-UA-Compatible" content="IE=edge"> \x3c!-- Use the latest (edge) version of IE rendering engine --\x3e\n    <meta name="x-apple-disable-message-reformatting">  \x3c!-- Disable auto-scale in iOS 10 Mail entirely --\x3e\n    <title></title> \x3c!-- The title tag shows in email notifications, like Android 4.4. --\x3e\n\n    \x3c!-- Web Font / @font-face : BEGIN --\x3e\n\t\x3c!-- NOTE: If web fonts are not required, lines 10 - 27 can be safely removed. --\x3e\n\n    \x3c!-- Desktop Outlook chokes on web font references and defaults to Times New Roman, so we force a safe fallback font. --\x3e\n    \x3c!--[if mso]>\n        <style>\n            * {\n                font-family: sans-serif !important;\n            }\n        </style>\n    <![endif]--\x3e\n\n    \x3c!-- All other clients get the webfont reference; some will render the font and others will silently fail to the fallbacks. More on that here: http://stylecampaign.com/blog/2015/02/webfont-support-in-email/ --\x3e\n    \x3c!--[if !mso]>\x3c!--\x3e\n        \x3c!-- insert web font reference, eg: <link href=\'https://fonts.googleapis.com/css?family=Roboto:400,700\' rel=\'stylesheet\' type=\'text/css\'> --\x3e\n    \x3c!--<![endif]--\x3e\n\n    \x3c!-- Web Font / @font-face : END --\x3e\n\n\t\x3c!-- CSS Reset --\x3e\n    <style>\n\n        /* What it does: Remove spaces around the email design added by some email clients. */\n        /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */\n        html,\n        body {\n            margin: 0 auto !important;\n            padding: 0 !important;\n            height: 100% !important;\n            width: 100% !important;\n        }\n\n        /* What it does: Stops email clients resizing small text. */\n        * {\n            -ms-text-size-adjust: 100%;\n            -webkit-text-size-adjust: 100%;\n        }\n\n        /* What it does: Centers email on Android 4.4 */\n        div[style*="margin: 16px 0"] {\n            margin:0 !important;\n        }\n\n        /* What it does: Stops Outlook from adding extra spacing to tables. */\n        table,\n        td {\n            mso-table-lspace: 0pt !important;\n            mso-table-rspace: 0pt !important;\n        }\n\n        /* What it does: Fixes webkit padding issue. Fix for Yahoo mail table alignment bug. Applies table-layout to the first 2 tables then removes for anything nested deeper. */\n        table {\n            border-spacing: 0 !important;\n            border-collapse: collapse !important;\n            table-layout: fixed !important;\n            margin: 0 auto !important;\n        }\n        table table table {\n            table-layout: auto;\n        }\n\n        /* What it does: Uses a better rendering method when resizing images in IE. */\n        img {\n            -ms-interpolation-mode:bicubic;\n        }\n\n        /* What it does: A work-around for email clients meddling in triggered links. */\n        *[x-apple-data-detectors],\t/* iOS */\n        .x-gmail-data-detectors, \t/* Gmail */\n        .x-gmail-data-detectors *,\n        .aBn {\n            border-bottom: 0 !important;\n            cursor: default !important;\n            color: inherit !important;\n            text-decoration: none !important;\n            font-size: inherit !important;\n            font-family: inherit !important;\n            font-weight: inherit !important;\n            line-height: inherit !important;\n        }\n\n        /* What it does: Prevents Gmail from displaying an download button on large, non-linked images. */\n        .a6S {\n\t        display: none !important;\n\t        opacity: 0.01 !important;\n        }\n        /* If the above doesn\'t work, add a .g-img class to any image in question. */\n        img.g-img + div {\n\t        display:none !important;\n\t   \t}\n\n        /* What it does: Prevents underlining the button text in Windows 10 */\n        .button-link {\n            text-decoration: none !important;\n        }\n\n        /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */\n        /* Create one of these media queries for each additional viewport size you\'d like to fix */\n        /* Thanks to Eric Lepetit (@ericlepetitsf) for help troubleshooting */\n        @media only screen and (min-device-width: 375px) and (max-device-width: 413px) { /* iPhone 6 and 6+ */\n            .email-container {\n                min-width: 375px !important;\n            }\n        }\n\n    </style>\n\n    \x3c!-- Progressive Enhancements --\x3e\n    <style>\n\n        /* What it does: Hover styles for buttons */\n        .button-td,\n        .button-a {\n            transition: all 100ms ease-in;\n        }\n        .button-td:hover,\n        .button-a:hover {\n            background: #555555 !important;\n            border-color: #555555 !important;\n        }\n\n        /* Media Queries */\n        @media screen and (max-width: 600px) {\n\n            /* What it does: Adjust typography on small screens to improve readability */\n\t\t\t.email-container p {\n\t\t\t\tfont-size: 17px !important;\n\t\t\t\tline-height: 26px !important;\n\t\t\t}\n\n\t\t}\n\n        .notification-body img {\n            max-width: 100%;\n        }\n\t</style>\n\n\t\x3c!-- What it does: Makes background images in 72ppi Outlook render at correct size. --\x3e\n\t\x3c!--[if gte mso 9]>\n\t<xml>\n\t\t<o:OfficeDocumentSettings>\n\t\t\t<o:AllowPNG/>\n\t\t\t<o:PixelsPerInch>96</o:PixelsPerInch>\n\t\t</o:OfficeDocumentSettings>\n\t</xml>\n\t<![endif]--\x3e\n\n</head>\n\n<body width="100%" bgcolor="#f6f6f6" style="margin: 0; mso-line-height-rule: exactly;">\n\t<center style="width: 100%; background: #f6f6f6; text-align: left;">\n\n\t\t\x3c!--\n\t\t\tSet the email width. Defined in two places:\n\t\t\t1. max-width for all clients except Desktop Windows Outlook, allowing the email to squish on narrow but never go wider than 600px.\n\t\t\t2. MSO tags for Desktop Windows Outlook enforce a 600px width.\n\t\t--\x3e\n\t\t<div style="max-width: 600px; margin: auto;'+(n(e&&e.rtl)?" text-align: right; direction: rtl;":"")+'" class="email-container">\n\t\t\t\x3c!--[if mso]>\n\t\t\t<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" align="center">\n\t\t\t<tr>\n\t\t\t<td>\n\t\t\t<![endif]--\x3e\n\n\t\t\t\x3c!-- Email Header : BEGIN --\x3e\n\t\t\t<table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 600px;">\n\t\t\t\t<tr>\n\t\t\t\t\t<td style="padding: 20px 0; text-align: center">\n\t\t\t\t\t\t'+(n(e&&e.logo&&e.logo.src)?'\n\t\t\t\t\t\t<img src="'+t.__escape(n(e&&e.logo&&e.logo.src))+'" height="'+t.__escape(n(e&&e.logo&&e.logo.height))+'" width="'+t.__escape(n(e&&e.logo&&e.logo.width))+'" alt="'+t.__escape(n(e&&e.site_title))+'" border="0" style="height: '+t.__escape(n(e&&e.logo&&e.logo.height))+"px; width: "+t.__escape(n(e&&e.logo&&e.logo.width))+'px; background: #f6f6f6; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 15px; line-height: 20px; color: #333333;">\n\t\t\t\t\t\t':"\n\t\t\t\t\t\t&nbsp;\n\t\t\t\t\t\t")+'\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t\t\x3c!-- Email Header : END --\x3e\n\n\x3c!-- Email Body : BEGIN --\x3e\n<table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 600px;">\n\n\t\x3c!-- 1 Column Text + Button : BEGIN --\x3e\n\t<tr>\n\t\t<td bgcolor="#ffffff">\n\t\t\t<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">\n\t\t\t\t<tr>\n\t\t\t\t\t<td style="padding: 40px 40px 6px 40px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 15px; line-height: 20px; color: #555555;">\n\t\t\t\t\t\t<h1 style="margin: 0; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 24px; line-height: 27px; color: #333333; font-weight: normal;">[[email:greeting_with_name, '+t.__escape(n(e&&e.username))+']]</h1>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td style="padding: 0px 40px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 15px; line-height: 20px; color: #555555;">\n\t\t\t\t\t\t<h1 style="margin: 0 0 10px 0; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 18px; line-height: 21px; color: #aaaaaa; font-weight: normal;">[[email:digest.title.'+t.__escape(n(e&&e.interval))+"]]</h1>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t"+(n(e&&e.notifications&&e.notifications.length)?'\n\t\t\t\t<tr>\n\t\t\t\t\t<td style="padding: 0px 40px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 15px; line-height: 20px; color: #555555;">\n\t\t\t\t\t\t<ul style="margin: 0; padding: 0;">\n\t\t\t\t\t\t\t'+a.blocks.notifications(t,e,n,o,i)+"\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t":"")+"\n\t\t\t\t"+(n(e&&e.topTopics&&e.topTopics.length)?'\n\t\t\t\t<tr>\n\t\t\t\t\t<td style="padding: 0px 40px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 15px; line-height: 20px; color: #555555;">\n\t\t\t\t\t\t<h1 style="margin: 16px 0 24px 0; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 18px; line-height: 21px; color: #aaaaaa; font-weight: normal;">[[email:digest.top-topics, '+t.__escape(n(e&&e.site_title))+']]</h1>\n\t\t\t\t\t\t<ul style="margin: 0; padding: 0;">\n\t\t\t\t\t\t\t'+a.blocks.topTopics(t,e,n,o,i)+"\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t":"")+"\n\t\t\t\t"+(n(e&&e.popularTopics&&e.popularTopics.length)?'\n\t\t\t\t<tr>\n\t\t\t\t\t<td style="padding: 0px 40px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 15px; line-height: 20px; color: #555555;">\n\t\t\t\t\t\t<h1 style="margin: 16px 0 24px 0; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 18px; line-height: 21px; color: #aaaaaa; font-weight: normal;">[[email:digest.popular-topics, '+t.__escape(n(e&&e.site_title))+']]</h1>\n\t\t\t\t\t\t<ul style="margin: 0; padding: 0;">\n\t\t\t\t\t\t\t'+a.blocks.popularTopics(t,e,n,o,i)+"\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t":"")+"\n\t\t\t\t"+(n(e&&e.recent&&e.recent.length)?'\n\t\t\t\t<tr>\n\t\t\t\t\t<td style="padding: 0px 40px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 15px; line-height: 20px; color: #555555;">\n\t\t\t\t\t\t<h1 style="margin: 16px 0 24px 0; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 18px; line-height: 21px; color: #aaaaaa; font-weight: normal;">[[email:digest.latest_topics, '+t.__escape(n(e&&e.site_title))+']]</h1>\n\t\t\t\t\t\t<ul style="margin: 0; padding: 0;">\n\t\t\t\t\t\t\t'+a.blocks.recent(t,e,n,o,i)+"\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t":"")+'\n\t\t\t\t<tr>\n\t\t\t\t\t<td style="padding: 32px 40px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 15px; line-height: 20px; color: #555555;">\n\t\t\t\t\t\t\x3c!-- Button : BEGIN --\x3e\n\t\t\t\t\t\t<table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin: auto;">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td style="border-radius: 3px; background: #222222; text-align: center;" class="button-td">\n\t\t\t\t\t\t\t\t\t<a href="'+t.__escape(n(e&&e.url))+'" style="background: #222222; border: 15px solid #222222; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 13px; line-height: 1.1; text-align: center; text-decoration: none; display: block; border-radius: 3px; font-weight: bold;" class="button-a">\n\t\t\t\t\t\t\t\t\t\t<span style="color:#ffffff;" class="button-link">[[email:digest.cta, '+t.__escape(n(e&&e.site_title))+']] &rarr;</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\x3c!-- Button : END --\x3e\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</td>\n\t</tr>\n\t\x3c!-- 1 Column Text + Button : END --\x3e\n\n</table>\n\x3c!-- Email Body : END --\x3e\n\n\t\t\t\x3c!-- Email Footer : BEGIN --\x3e\n\t\t\t<table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 680px;">\n\t\t\t\t<tr>\n\t\t\t\t\t<td style="padding: 40px 10px;width: 100%;font-size: 12px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height:18px; text-align: center; color: #888888;">\n\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\t'+(n(e&&e.showUnsubscribe)?'\n\t\t\t\t\t\t[[email:notif.post.unsub.info]] <a href="'+t.__escape(n(e&&e.url))+"/uid/"+t.__escape(n(e&&e.uid))+'/settings">[[email:unsub.cta]]</a>.\n\t\t\t\t\t\t<br />[[email:notif.post.unsub.one-click]] <a href="'+t.__escape(n(e&&e.unsubUrl))+'">[[email:unsubscribe]]</a>.\n\t\t\t\t\t\t':"")+"\n\t\t\t\t\t\t<br><br>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t\t\x3c!-- Email Footer : END --\x3e\n\n\t\t\t\x3c!--[if mso]>\n\t\t\t</td>\n\t\t\t</tr>\n\t\t\t</table>\n\t\t\t<![endif]--\x3e\n\t\t</div>\n\n\t</center>\n</body>\n\n</html>\n"}return a.blocks={recent:function(o,i,a,t,l){return t(a(i&&i.recent),function(t,e,n){return'\n\t\t\t\t\t\t\t<li style="text-decoration: none; list-style-type: none; padding-bottom: 0.5em;">\n\t\t\t\t\t\t\t\t<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td style="padding: 6px 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; width: 32px; vertical-align: middle;">'+o.__escape(l(i,o,"renderDigestAvatar",[a(i&&i.recent&&i.recent[t])]))+'</td>\n\t\t\t\t\t\t\t\t\t\t<td style="padding: 6px 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px; color: #333333;">\n\t\t\t\t\t\t\t\t\t\t\t<p style="margin: 0;"><a style="text-decoration:none !important; text-decoration:none; color: #333333;" href="'+o.__escape(a(i&&i.url))+"/topic/"+o.__escape(a(i&&i.recent&&i.recent[t]&&i.recent[t].slug))+'"><strong>'+o.__escape(a(i&&i.recent&&i.recent[t]&&i.recent[t].title))+'</strong></a></p>\n\t\t\t\t\t\t\t\t\t\t\t<p style="margin: 0; font-size: 12px;"><a style="text-decoration:none !important; text-decoration:none; color: #aaaaaa; line-height: 16px;" href="'+o.__escape(a(i&&i.url))+"/uid/"+o.__escape(a(i&&i.recent&&i.recent[t]&&i.recent[t].teaser&&i.recent[t].teaser.user&&i.recent[t].teaser.user.uid))+'"><strong>'+o.__escape(a(i&&i.recent&&i.recent[t]&&i.recent[t].teaser&&i.recent[t].teaser.user&&i.recent[t].teaser.user.username))+'</strong></a></p>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td colspan="2" style="padding: 8px 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px; color: #333333;">\n\t\t\t\t\t\t\t\t\t\t\t<p style="margin: 0; padding: 6px 0px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 13px; line-height: 26px; color: #666666;">'+o.__escape(a(i&&i.recent&&i.recent[t]&&i.recent[t].teaser&&i.recent[t].teaser.content))+'</p>\n\t\t\t\t\t\t\t\t\t\t\t<p style="margin: 0; padding: 6px 0px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px;">\n\t\t\t\t\t\t\t\t\t\t\t\t<a style="text-decoration:none !important; text-decoration:none; text-transform: capitalize; color: #666666; line-height: 16px;" href="'+o.__escape(a(i&&i.url))+"/topic/"+o.__escape(a(i&&i.recent&&i.recent[t]&&i.recent[t].slug))+'">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<small><strong><span style="color: #aaaaaa;">&rsaquo;</span> [[global:read_more]]</strong></small>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t'+(e!==n-1?'\n\t\t\t\t\t\t\t<li style="text-decoration: none; list-style-type: none; margin: 0px 64px 16px 64px; border-bottom: 1px solid #dddddd"></li>\n\t\t\t\t\t\t\t':"")+"\n\t\t\t\t\t\t\t"})},popularTopics:function(o,i,a,t,l){return t(a(i&&i.popularTopics),function(t,e,n){return'\n\t\t\t\t\t\t\t<li style="text-decoration: none; list-style-type: none; padding-bottom: 0.5em;">\n\t\t\t\t\t\t\t\t<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td style="padding: 6px 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; width: 32px; vertical-align: middle;">'+o.__escape(l(i,o,"renderDigestAvatar",[a(i&&i.popularTopics&&i.popularTopics[t])]))+'</td>\n\t\t\t\t\t\t\t\t\t\t<td style="padding: 6px 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px; color: #333333;">\n\t\t\t\t\t\t\t\t\t\t\t<p style="margin: 0;"><a style="text-decoration:none !important; text-decoration:none; color: #333333;" href="'+o.__escape(a(i&&i.url))+"/topic/"+o.__escape(a(i&&i.popularTopics&&i.popularTopics[t]&&i.popularTopics[t].slug))+'"><strong>'+o.__escape(a(i&&i.popularTopics&&i.popularTopics[t]&&i.popularTopics[t].title))+'</strong></a></p>\n\t\t\t\t\t\t\t\t\t\t\t<p style="margin: 0; font-size: 12px;"><a style="text-decoration:none !important; text-decoration:none; color: #aaaaaa; line-height: 16px;" href="'+o.__escape(a(i&&i.url))+"/uid/"+o.__escape(a(i&&i.popularTopics&&i.popularTopics[t]&&i.popularTopics[t].teaser&&i.popularTopics[t].teaser.user&&i.popularTopics[t].teaser.user.uid))+'"><strong>'+o.__escape(a(i&&i.popularTopics&&i.popularTopics[t]&&i.popularTopics[t].teaser&&i.popularTopics[t].teaser.user&&i.popularTopics[t].teaser.user.username))+'</strong></a></p>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td colspan="2" style="padding: 8px 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px; color: #333333;">\n\t\t\t\t\t\t\t\t\t\t\t<p style="margin: 0; padding: 6px 0px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 13px; line-height: 26px; color: #666666;">'+o.__escape(a(i&&i.popularTopics&&i.popularTopics[t]&&i.popularTopics[t].teaser&&i.popularTopics[t].teaser.content))+'</p>\n\t\t\t\t\t\t\t\t\t\t\t<p style="margin: 0; padding: 6px 0px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px;">\n\t\t\t\t\t\t\t\t\t\t\t\t<a style="text-decoration:none !important; text-decoration:none; text-transform: capitalize; color: #666666; line-height: 16px;" href="'+o.__escape(a(i&&i.url))+"/topic/"+o.__escape(a(i&&i.recent&&i.recent.slug))+'">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<small><strong><span style="color: #aaaaaa;">&rsaquo;</span> [[global:read_more]]</strong></small>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t'+(e!==n-1?'\n\t\t\t\t\t\t\t<li style="text-decoration: none; list-style-type: none; margin: 0px 64px 16px 64px; border-bottom: 1px solid #dddddd"></li>\n\t\t\t\t\t\t\t':"")+"\n\t\t\t\t\t\t\t"})},topTopics:function(o,i,a,t,l){return t(a(i&&i.topTopics),function(t,e,n){return'\n\t\t\t\t\t\t\t<li style="text-decoration: none; list-style-type: none; padding-bottom: 0.5em;">\n\t\t\t\t\t\t\t\t<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td style="padding: 6px 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; width: 32px; vertical-align: middle;">'+o.__escape(l(i,o,"renderDigestAvatar",[a(i&&i.topTopics&&i.topTopics[t])]))+'</td>\n\t\t\t\t\t\t\t\t\t\t<td style="padding: 6px 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px; color: #333333;">\n\t\t\t\t\t\t\t\t\t\t\t<p style="margin: 0;"><a style="text-decoration:none !important; text-decoration:none; color: #333333;" href="'+o.__escape(a(i&&i.url))+"/topic/"+o.__escape(a(i&&i.topTopics&&i.topTopics[t]&&i.topTopics[t].slug))+'"><strong>'+o.__escape(a(i&&i.topTopics&&i.topTopics[t]&&i.topTopics[t].title))+'</strong></a></p>\n\t\t\t\t\t\t\t\t\t\t\t<p style="margin: 0; font-size: 12px;"><a style="text-decoration:none !important; text-decoration:none; color: #aaaaaa; line-height: 16px;" href="'+o.__escape(a(i&&i.url))+"/uid/"+o.__escape(a(i&&i.topTopics&&i.topTopics[t]&&i.topTopics[t].teaser&&i.topTopics[t].teaser.user&&i.topTopics[t].teaser.user.uid))+'"><strong>'+o.__escape(a(i&&i.topTopics&&i.topTopics[t]&&i.topTopics[t].teaser&&i.topTopics[t].teaser.user&&i.topTopics[t].teaser.user.username))+'</strong></a></p>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td colspan="2" style="padding: 8px 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px; color: #333333;">\n\t\t\t\t\t\t\t\t\t\t\t<p style="margin: 0; padding: 6px 0px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 13px; line-height: 26px; color: #666666;">'+o.__escape(a(i&&i.topTopics&&i.topTopics[t]&&i.topTopics[t].teaser&&i.topTopics[t].teaser.content))+'</p>\n\t\t\t\t\t\t\t\t\t\t\t<p style="margin: 0; padding: 6px 0px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px;">\n\t\t\t\t\t\t\t\t\t\t\t\t<a style="text-decoration:none !important; text-decoration:none; text-transform: capitalize; color: #666666; line-height: 16px;" href="'+o.__escape(a(i&&i.url))+"/topic/"+o.__escape(a(i&&i.recent&&i.recent.slug))+'">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<small><strong><span style="color: #aaaaaa;">&rsaquo;</span> [[global:read_more]]</strong></small>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t'+(e!==n-1?'\n\t\t\t\t\t\t\t<li style="text-decoration: none; list-style-type: none; margin: 0px 64px 16px 64px; border-bottom: 1px solid #dddddd"></li>\n\t\t\t\t\t\t\t':"")+"\n\t\t\t\t\t\t\t"})},notifications:function(e,n,o,t){return t(o(n&&n.notifications),function(t){return'\n\t\t\t\t\t\t\t<li style="text-decoration: none; list-style-type: none; padding-bottom: 0.5em;">\n\t\t\t\t\t\t\t\t<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td style="padding: 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; width: 32px;">\n\t\t\t\t\t\t\t\t\t\t\t'+(o(n&&n.notifications&&n.notifications[t]&&n.notifications[t].image)?'\n\t\t\t\t\t\t\t\t\t\t\t<img style="vertical-align: middle; width: 32px; height: 32px; border-radius: 50%" src="'+e.__escape(o(n&&n.notifications&&n.notifications[t]&&n.notifications[t].image))+'" />\n\t\t\t\t\t\t\t\t\t\t\t':'\n\t\t\t\t\t\t\t\t\t\t\t<div style="vertical-align: middle; width: 32px; height: 32px; line-height: 32px; font-size: 16px; background-color: '+e.__escape(o(n&&n.notifications&&n.notifications[t]&&n.notifications[t].user&&n.notifications[t].user["icon:bgColor"]))+'; color: white; text-align: center; display: inline-block; border-radius: 50%">'+e.__escape(o(n&&n.notifications&&n.notifications[t]&&n.notifications[t].user&&n.notifications[t].user["icon:text"]))+"</div>\n\t\t\t\t\t\t\t\t\t\t\t")+'\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td style="padding: 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px; color: #333333;">\n\t\t\t\t\t\t\t\t\t\t\t<p style="margin: 0;"><a style="text-decoration:none !important; text-decoration:none; color: #333333;" href="'+e.__escape(o(n&&n.notifications&&n.notifications[t]&&n.notifications[t].notification_url))+'">'+e.__escape(o(n&&n.notifications&&n.notifications[t]&&n.notifications[t].bodyShort))+"</a></p>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t"})}},a});