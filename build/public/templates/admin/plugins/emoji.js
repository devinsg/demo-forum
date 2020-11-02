!function(i){"object"==typeof module&&module.exports?module.exports=i():"function"==typeof define&&define.amd&&define(i)}(function(){return function(i,n,t,e,d){return'<form id="emoji-settings">\n  <div class="panel panel-default">\n    <div class="panel-body">\n      <div class="form-group">\n        <label for="emoji-parseAscii">\n          <input id="emoji-parseAscii" type="checkbox" '+(t(n&&n.settings&&n.settings.parseAscii)?" checked ":"")+' />\n          [[admin/plugins/emoji:settings.parseAscii]]\n        </label>\n      </div>\n\n      <div class="form-group">\n        <label for="emoji-parseNative">\n          <input id="emoji-parseNative" type="checkbox" '+(t(n&&n.settings&&n.settings.parseNative)?" checked ":"")+' />\n          [[admin/plugins/emoji:settings.parseNative]]\n        </label>\n      </div>\n\n      <div class="form-group">\n        <label for="emoji-customFirst">\n          <input id="emoji-customFirst" type="checkbox" '+(t(n&&n.settings&&n.settings.customFirst)?" checked ":"")+' />\n          [[admin/plugins/emoji:settings.customFirst]]\n        </label>\n      </div>\n    </div>\n\n    <div class="panel-footer">\n      <div class="form-group">\n        <button type="button" id="build" class="btn btn-primary" aria-describedby="emoji-build_description">[[admin/plugins/emoji:build]]</button>\n        <p id="emoji-build_description" class="help-block">\n        [[admin/plugins/emoji:build_description]]\n        </p>\n      </div>\n    </div>\n  </div>\n</form>\n\n<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">\n\t<i class="material-icons">save</i>\n</button>\n\n<button id="edit" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" style="\n    left: 30px;\n    margin-left: 0;\n    background: rgb(255,64,129) !important;\n">\n\t<i class="material-icons">edit</i>\n</button>\n\n<div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">\n  <div class="modal-dialog">\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n        <h4 class="modal-title" id="editModalLabel">Customize Emoji</h4>\n      </div>\n      <div class="modal-body" id="editModalBody">\n        \n      </div>\n    </div>\n  </div>\n</div>\n'}});