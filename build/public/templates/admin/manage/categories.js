!function(n){"object"==typeof module&&module.exports?module.exports=n():"function"==typeof define&&define.amd&&define(n)}(function(){return function(n,t,a,e,o){return'<div class="row">\n    <div class="col-lg-9">\n        <button id="collapse-all" class="btn btn-default">[[admin/manage/categories:collapse-all]]</button> <button id="expand-all" class="btn btn-default">[[admin/manage/categories:expand-all]]</button>\n    </div>\n    <div class="col-lg-3">\n        <div class="input-group">\n            <input type="text" class="form-control" placeholder="[[global:search]]" id="category-search">\n            <span class="input-group-addon search-button"><i class="fa fa-search"></i></span>\n        </div>\n    </div>\n</div>\n\n\n<hr/>\n<div component="category/no-matches" class="hidden">[[admin/manage/categories:no-matches]]</div>\n<div class="categories"></div>\n\n<button data-action="create" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">\n    <i class="material-icons">add</i>\n</button>'}});