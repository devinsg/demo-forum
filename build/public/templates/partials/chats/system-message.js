!function(e){"object"==typeof module&&module.exports?module.exports=e():"function"==typeof define&&define.amd&&define(e)}(function(){return function(e,s,a,m,t){return'<li component="chat/system-message" class="system-message clear" data-index="'+e.__escape(a(s&&s.messages&&s.messages.index))+'" data-mid="'+e.__escape(a(s&&s.messages&&s.messages.messageId))+'" data-uid="'+e.__escape(a(s&&s.messages&&s.messages.fromuid))+'" data-self="'+e.__escape(a(s&&s.messages&&s.messages.self))+'" data-break="0" data-timestamp="'+e.__escape(a(s&&s.messages&&s.messages.timestamp))+'">\r\n\t[[modules:chat.system.'+e.__escape(a(s&&s.messages&&s.messages.content))+", "+e.__escape(a(s&&s.messages&&s.messages.fromUser&&s.messages.fromUser.username))+"]]\r\n</li>"}});