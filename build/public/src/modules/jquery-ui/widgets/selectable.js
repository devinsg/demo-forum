(function(e){if(typeof define==="function"&&define.amd){define(["jquery","./mouse","../version","../widget"],e)}else{e(jQuery)}})(function(e){return e.widget("ui.selectable",e.ui.mouse,{version:"1.12.1",options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var t=this;this._addClass("ui-selectable");this.dragged=false;this.refresh=function(){t.elementPos=e(t.element[0]).offset();t.selectees=e(t.options.filter,t.element[0]);t._addClass(t.selectees,"ui-selectee");t.selectees.each(function(){var s=e(this),l=s.offset(),i={left:l.left-t.elementPos.left,top:l.top-t.elementPos.top};e.data(this,"selectable-item",{element:this,$element:s,left:i.left,top:i.top,right:i.left+s.outerWidth(),bottom:i.top+s.outerHeight(),startselected:false,selected:s.hasClass("ui-selected"),selecting:s.hasClass("ui-selecting"),unselecting:s.hasClass("ui-unselecting")})})};this.refresh();this._mouseInit();this.helper=e("<div>");this._addClass(this.helper,"ui-selectable-helper")},_destroy:function(){this.selectees.removeData("selectable-item");this._mouseDestroy()},_mouseStart:function(t){var s=this,l=this.options;this.opos=[t.pageX,t.pageY];this.elementPos=e(this.element[0]).offset();if(this.options.disabled){return}this.selectees=e(l.filter,this.element[0]);this._trigger("start",t);e(l.appendTo).append(this.helper);this.helper.css({left:t.pageX,top:t.pageY,width:0,height:0});if(l.autoRefresh){this.refresh()}this.selectees.filter(".ui-selected").each(function(){var l=e.data(this,"selectable-item");l.startselected=true;if(!t.metaKey&&!t.ctrlKey){s._removeClass(l.$element,"ui-selected");l.selected=false;s._addClass(l.$element,"ui-unselecting");l.unselecting=true;s._trigger("unselecting",t,{unselecting:l.element})}});e(t.target).parents().addBack().each(function(){var l,i=e.data(this,"selectable-item");if(i){l=!t.metaKey&&!t.ctrlKey||!i.$element.hasClass("ui-selected");s._removeClass(i.$element,l?"ui-unselecting":"ui-selected")._addClass(i.$element,l?"ui-selecting":"ui-unselecting");i.unselecting=!l;i.selecting=l;i.selected=l;if(l){s._trigger("selecting",t,{selecting:i.element})}else{s._trigger("unselecting",t,{unselecting:i.element})}return false}})},_mouseDrag:function(t){this.dragged=true;if(this.options.disabled){return}var s,l=this,i=this.options,n=this.opos[0],a=this.opos[1],c=t.pageX,r=t.pageY;if(n>c){s=c;c=n;n=s}if(a>r){s=r;r=a;a=s}this.helper.css({left:n,top:a,width:c-n,height:r-a});this.selectees.each(function(){var s=e.data(this,"selectable-item"),u=false,o={};if(!s||s.element===l.element[0]){return}o.left=s.left+l.elementPos.left;o.right=s.right+l.elementPos.left;o.top=s.top+l.elementPos.top;o.bottom=s.bottom+l.elementPos.top;if(i.tolerance==="touch"){u=!(o.left>c||o.right<n||o.top>r||o.bottom<a)}else if(i.tolerance==="fit"){u=o.left>n&&o.right<c&&o.top>a&&o.bottom<r}if(u){if(s.selected){l._removeClass(s.$element,"ui-selected");s.selected=false}if(s.unselecting){l._removeClass(s.$element,"ui-unselecting");s.unselecting=false}if(!s.selecting){l._addClass(s.$element,"ui-selecting");s.selecting=true;l._trigger("selecting",t,{selecting:s.element})}}else{if(s.selecting){if((t.metaKey||t.ctrlKey)&&s.startselected){l._removeClass(s.$element,"ui-selecting");s.selecting=false;l._addClass(s.$element,"ui-selected");s.selected=true}else{l._removeClass(s.$element,"ui-selecting");s.selecting=false;if(s.startselected){l._addClass(s.$element,"ui-unselecting");s.unselecting=true}l._trigger("unselecting",t,{unselecting:s.element})}}if(s.selected){if(!t.metaKey&&!t.ctrlKey&&!s.startselected){l._removeClass(s.$element,"ui-selected");s.selected=false;l._addClass(s.$element,"ui-unselecting");s.unselecting=true;l._trigger("unselecting",t,{unselecting:s.element})}}}});return false},_mouseStop:function(t){var s=this;this.dragged=false;e(".ui-unselecting",this.element[0]).each(function(){var l=e.data(this,"selectable-item");s._removeClass(l.$element,"ui-unselecting");l.unselecting=false;l.startselected=false;s._trigger("unselected",t,{unselected:l.element})});e(".ui-selecting",this.element[0]).each(function(){var l=e.data(this,"selectable-item");s._removeClass(l.$element,"ui-selecting")._addClass(l.$element,"ui-selected");l.selecting=false;l.selected=true;l.startselected=true;s._trigger("selected",t,{selected:l.element})});this._trigger("stop",t);this.helper.remove();return false}})});
//# sourceMappingURL=selectable.js.map