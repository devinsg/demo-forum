<div class="row">
	<form role="form" class="group" data-groupname="{group.displayName}">
		<div class="col-md-9">
			<div class="group-settings-form">
				<fieldset>
					<label for="change-group-name">[[admin/manage/groups:edit.name]]</label>
					<input type="text" class="form-control" id="change-group-name" placeholder="Group Name" value="{group.displayName}" maxlength="{maximumGroupNameLength}" data-property <!-- IF group.system -->readonly<!-- ENDIF group.system -->/><br />
				</fieldset>

				<fieldset>
					<label for="change-group-desc">[[admin/manage/groups:edit.description]]</label>
					<input type="text" class="form-control" id="change-group-desc" placeholder="A short description about your group" value="{group.description}" maxlength="255" data-property /><br />
				</fieldset>

				<div class="row">
					<div class="col-md-4">
						<fieldset>
							<label for="change-group-user-title">[[admin/manage/groups:edit.user-title]]</label>
							<span id="group-label-preview" class="label label-default" style="color:<!-- IF group.textColor -->{group.textColor}<!-- ELSE -->#ffffff<!-- ENDIF group.textColor -->; background:<!-- IF group.labelColor -->{group.labelColor}<!-- ELSE -->#000000<!-- ENDIF group.labelColor -->;"><i id="group-icon-preview" class="fa {group.icon} <!-- IF !group.icon -->hidden<!-- ENDIF -->"></i> <span id="group-label-preview-text">{group.userTitle}</span></span>
							<input type="text" class="form-control" id="change-group-user-title" placeholder="The title of users if they are a member of this group" value="{group.userTitle}" maxlength="{maximumGroupTitleLength}" data-property /><br />
						</fieldset>
					</div>
					<div class="col-md-2">
						<fieldset>
							<label id="group-icon-label" for="change-group-icon">[[admin/manage/groups:edit.icon]]</label><br/>
							<i id="group-icon" class="fa fa-2x <!-- IF group.icon -->{group.icon}<!-- ENDIF group.icon -->" value="{group.icon}"></i><br />
						</fieldset>
					</div>
					<div class="col-md-3">
						<fieldset>
							<label for="change-group-label-color">[[admin/manage/groups:edit.label-color]]</label>

							<input type="color" id="change-group-label-color" placeholder="#0059b2" data-name="bgColor" value="{group.labelColor}" class="form-control" data-property/><br />
						</fieldset>
					</div>
					<div class="col-md-3">
						<fieldset>
							<label for="change-group-text-color">[[admin/manage/groups:edit.text-color]]</label>
							<input type="color" id="change-group-text-color" placeholder="#ffffff" data-name="textColor" value="{group.textColor}" class="form-control" data-property/><br />
						</fieldset>
					</div>
				</div>
				<fieldset>
					<div class="checkbox">
						<label>
							<input id="group-userTitleEnabled" name="userTitleEnabled" data-property type="checkbox"<!-- IF group.userTitleEnabled --> checked<!-- ENDIF group.userTitleEnabled -->> <strong>[[admin/manage/groups:edit.show-badge]]</strong>
						</label>
					</div>
				</fieldset>

				<fieldset>
					<div class="checkbox">
						<label>
							<input id="group-private" name="private" data-property type="checkbox"<!-- IF group.private --> checked<!-- ENDIF group.private -->>
							<strong>[[groups:details.private]]</strong>
							<p class="help-block">
								[[admin/manage/groups:edit.private-details]]
							</p>
							<!-- IF !allowPrivateGroups -->
							<p class="help-block">
								[[admin/manage/groups:edit.private-override]]
							</p>
							<!-- ENDIF !allowPrivateGroups -->
						</label>
					</div>
				</fieldset>

				<fieldset>
					<div class="checkbox">
						<label>
							<input id="group-disableJoinRequests" name="disableJoinRequests" data-property type="checkbox"<!-- IF group.disableJoinRequests --> checked<!-- ENDIF group.disableJoinRequests -->>
							<strong>[[admin/manage/groups:edit.disable-join]]</strong>
						</label>
					</div>
				</fieldset>

				<fieldset>
					<div class="checkbox">
						<label>
							<input id="group-disableLeave" name="disableLeave" data-property type="checkbox"{{{if group.disableLeave}}} checked{{{end}}}>
							<strong>[[admin/manage/groups:edit.disable-leave]]</strong>
						</label>
					</div>
				</fieldset>

				<fieldset>
					<div class="checkbox">
						<label>
							<input id="group-hidden" name="hidden" data-property type="checkbox"<!-- IF group.hidden --> checked<!-- ENDIF group.hidden -->>
							<strong>[[admin/manage/groups:edit.hidden]]</strong>
							<p class="help-block">
								[[admin/manage/groups:edit.hidden-details]]
							</p>
						</label>
					</div>
				</fieldset>

				<fieldset>
					<div class="panel panel-default">
						<div class="panel-heading">
							<h3 class="panel-title"><i class="fa fa-users"></i> [[admin/manage/groups:edit.members]]</h3>
						</div>
						<div class="panel-body">
							<div class="row">
	<!-- IF group.isOwner -->
	<div class="col-lg-1">
		<button component="groups/members/add" type="button" class="btn btn-primary" title="[[groups:details.add-member]]"><i class="fa fa-user-plus"></i></button>
	</div>
	<!-- ENDIF group.isOwner -->
	<div class="<!-- IF group.isOwner -->col-lg-11<!-- ELSE -->col-lg-12<!-- ENDIF group.isOwner -->">
		<div class="input-group">
			<input class="form-control" type="text" component="groups/members/search" placeholder="[[global:search]]"/>
			<span class="input-group-addon search-button"><i class="fa fa-search"></i></span>
		</div>
	</div>
</div>

<table component="groups/members" class="table table-striped table-hover" data-nextstart="{group.membersNextStart}">
	<tbody>
	<!-- BEGIN group.members -->
	<tr data-uid="{group.members.uid}">
		<td>
			<a href="{config.relative_path}/user/{group.members.userslug}">
				<!-- IF group.members.picture -->
				<img class="avatar avatar-sm avatar-rounded" src="{group.members.picture}" />
				<!-- ELSE -->
				<div class="avatar avatar-sm avatar-rounded" style="background-color: {group.members.icon:bgColor};">{group.members.icon:text}</div>
				<!-- ENDIF group.members.picture -->
			</a>
		</td>
		<td class="member-name">
			<a href="{config.relative_path}/user/{group.members.userslug}">{group.members.username}</a> <i title="[[groups:owner]]" class="user-owner-icon fa fa-star text-warning <!-- IF !group.members.isOwner -->invisible<!-- ENDIF !group.members.isOwner -->"></i>

			<!-- IF group.isOwner -->
			<div class="owner-controls btn-group pull-right">
				<a class="btn btn-sm" href="#" data-ajaxify="false" data-action="toggleOwnership" title="[[groups:details.grant]]">
					<i class="fa fa-star"></i>
				</a>

				<a class="btn btn-sm" href="#" data-ajaxify="false" data-action="kick" title="[[groups:details.kick]]">
					<i class="fa fa-ban"></i>
				</a>
			</div>
			<!-- ENDIF group.isOwner -->
		</td>
	</tr>
	<!-- END group.members -->
	</tbody>
</table>
						</div>
					</div>
				</fieldset>
			</div>
		</div>
		<div class="col-md-3">
			<div component="group-selector" class="btn-group">
				<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
					<span component="group-selector-selected">{group.displayName}</span> <span class="caret"></span>
				</button>
				<div component="group-selector-search" class="hidden">
					<input type="text" class="form-control" autocomplete="off">
				</div>
				<ul component="group-list" class="dropdown-menu group-dropdown-menu" role="menu">
					<li component="group-no-matches" role="presentation" class="group hidden">
						<a role="menu-item">[[search:no-matches]]</a>
					</li>
					<!-- BEGIN groupNames -->
					<li role="presentation" class="group" data-name="{groupNames.displayName}">
						<a href="{config.relative_path}/admin/manage/groups/{groupNames.encodedName}" role="menu-item">{groupNames.displayName}</a>
					</li>
					<!-- END groupNames -->
				</ul>
			</div>
			<hr />
			<div class="well">
				<strong class="pull-left">[[admin/manage/privileges:edit-privileges]]</strong><br />
				<div component="category-selector" class="btn-group <!-- IF pullRight -->pull-right<!-- ENDIF pullRight -->">
	<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
		<span component="category-selector-selected"><!-- IF selectedCategory --><span class="fa-stack" style="{function.generateCategoryBackground, selectedCategory}"><i class="fa fa-fw fa-stack-1x {selectedCategory.icon}" style="color: {selectedCategory.color};"></i></span> {selectedCategory.name}<!-- ELSE -->
		[[topic:thread_tools.select_category]]<!-- ENDIF selectedCategory --></span> <span class="caret"></span>
	</button>
	<div component="category-selector-search" class="hidden">
		<input type="text" class="form-control" autocomplete="off">
	</div>
	<ul component="category/list" class="dropdown-menu category-dropdown-menu {{{if pullRight}}}dropdown-menu-right{{{end}}}" role="menu">
		<li component="category/no-matches" role="presentation" class="category hidden">
			<a role="menu-item">[[search:no-matches]]</a>
		</li>
		{{{each categories}}}
		<li role="presentation" class="category <!-- IF categories.disabledClass -->disabled<!-- ENDIF categories.disabledClass -->" data-cid="{categories.cid}" data-name="{categories.name}" data-parent-cid="{categories.parentCid}">
			<a role="menu-item">{categories.level}<span component="category-markup"><!-- IF categories.icon --><span class="fa-stack" style="{function.generateCategoryBackground}"><i style="color: {categories.color};" class="fa fa-stack-1x fa-fw {categories.icon}"></i></span><!-- ENDIF categories.icon --> {categories.name}</span></a>
		</li>
		{{{end}}}
	</ul>
</div>
			</div>
		</div>
	</form>
</div>

<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
    <i class="material-icons">save</i>
</button>

<div id="icons" style="display:none;">
	<div class="icon-container">
		<div class="row fa-icons">
			<i class="fa fa-doesnt-exist"></i>
			<div class="icon-container">
	<div class="form-group">
		<label for="fa-filter">Type to filter icons</label>
		<input type="text" class="form-control" id="fa-filter" data-action="filter" placeholder="e.g. umbrella" />
	</div>
	<div class="row fa-icons">
		<i class="fa fa-500px"></i>
		<i class="fa fa-address-book"></i>
		<i class="fa fa-address-book-o"></i>
		<i class="fa fa-address-card"></i>
		<i class="fa fa-address-card-o"></i>
		<i class="fa fa-adjust"></i>
		<i class="fa fa-adn"></i>
		<i class="fa fa-align-center"></i>
		<i class="fa fa-align-justify"></i>
		<i class="fa fa-align-left"></i>
		<i class="fa fa-align-right"></i>
		<i class="fa fa-amazon"></i>
		<i class="fa fa-ambulance"></i>
		<i class="fa fa-american-sign-language-interpreting"></i>
		<i class="fa fa-anchor"></i>
		<i class="fa fa-android"></i>
		<i class="fa fa-angellist"></i>
		<i class="fa fa-angle-double-down"></i>
		<i class="fa fa-angle-double-left"></i>
		<i class="fa fa-angle-double-right"></i>
		<i class="fa fa-angle-double-up"></i>
		<i class="fa fa-angle-down"></i>
		<i class="fa fa-angle-left"></i>
		<i class="fa fa-angle-right"></i>
		<i class="fa fa-angle-up"></i>
		<i class="fa fa-apple"></i>
		<i class="fa fa-archive"></i>
		<i class="fa fa-area-chart"></i>
		<i class="fa fa-arrow-circle-down"></i>
		<i class="fa fa-arrow-circle-left"></i>
		<i class="fa fa-arrow-circle-o-down"></i>
		<i class="fa fa-arrow-circle-o-left"></i>
		<i class="fa fa-arrow-circle-o-right"></i>
		<i class="fa fa-arrow-circle-o-up"></i>
		<i class="fa fa-arrow-circle-right"></i>
		<i class="fa fa-arrow-circle-up"></i>
		<i class="fa fa-arrow-down"></i>
		<i class="fa fa-arrow-left"></i>
		<i class="fa fa-arrow-right"></i>
		<i class="fa fa-arrow-up"></i>
		<i class="fa fa-arrows"></i>
		<i class="fa fa-arrows-alt"></i>
		<i class="fa fa-arrows-h"></i>
		<i class="fa fa-arrows-v"></i>
		<i class="fa fa-asl-interpreting"></i>
		<i class="fa fa-assistive-listening-systems"></i>
		<i class="fa fa-asterisk"></i>
		<i class="fa fa-at"></i>
		<i class="fa fa-audio-description"></i>
		<i class="fa fa-automobile"></i>
		<i class="fa fa-backward"></i>
		<i class="fa fa-balance-scale"></i>
		<i class="fa fa-ban"></i>
		<i class="fa fa-bandcamp"></i>
		<i class="fa fa-bank"></i>
		<i class="fa fa-bar-chart"></i>
		<i class="fa fa-bar-chart-o"></i>
		<i class="fa fa-barcode"></i>
		<i class="fa fa-bars"></i>
		<i class="fa fa-bath"></i>
		<i class="fa fa-bathtub"></i>
		<i class="fa fa-battery"></i>
		<i class="fa fa-battery-0"></i>
		<i class="fa fa-battery-1"></i>
		<i class="fa fa-battery-2"></i>
		<i class="fa fa-battery-3"></i>
		<i class="fa fa-battery-4"></i>
		<i class="fa fa-battery-empty"></i>
		<i class="fa fa-battery-full"></i>
		<i class="fa fa-battery-half"></i>
		<i class="fa fa-battery-quarter"></i>
		<i class="fa fa-battery-three-quarters"></i>
		<i class="fa fa-bed"></i>
		<i class="fa fa-beer"></i>
		<i class="fa fa-behance"></i>
		<i class="fa fa-behance-square"></i>
		<i class="fa fa-bell"></i>
		<i class="fa fa-bell-o"></i>
		<i class="fa fa-bell-slash"></i>
		<i class="fa fa-bell-slash-o"></i>
		<i class="fa fa-bicycle"></i>
		<i class="fa fa-binoculars"></i>
		<i class="fa fa-birthday-cake"></i>
		<i class="fa fa-bitbucket"></i>
		<i class="fa fa-bitbucket-square"></i>
		<i class="fa fa-bitcoin"></i>
		<i class="fa fa-black-tie"></i>
		<i class="fa fa-blind"></i>
		<i class="fa fa-bluetooth"></i>
		<i class="fa fa-bluetooth-b"></i>
		<i class="fa fa-bold"></i>
		<i class="fa fa-bolt"></i>
		<i class="fa fa-bomb"></i>
		<i class="fa fa-book"></i>
		<i class="fa fa-bookmark"></i>
		<i class="fa fa-bookmark-o"></i>
		<i class="fa fa-braille"></i>
		<i class="fa fa-briefcase"></i>
		<i class="fa fa-btc"></i>
		<i class="fa fa-bug"></i>
		<i class="fa fa-building"></i>
		<i class="fa fa-building-o"></i>
		<i class="fa fa-bullhorn"></i>
		<i class="fa fa-bullseye"></i>
		<i class="fa fa-bus"></i>
		<i class="fa fa-buysellads"></i>
		<i class="fa fa-cab"></i>
		<i class="fa fa-calculator"></i>
		<i class="fa fa-calendar"></i>
		<i class="fa fa-calendar-check-o"></i>
		<i class="fa fa-calendar-minus-o"></i>
		<i class="fa fa-calendar-o"></i>
		<i class="fa fa-calendar-plus-o"></i>
		<i class="fa fa-calendar-times-o"></i>
		<i class="fa fa-camera"></i>
		<i class="fa fa-camera-retro"></i>
		<i class="fa fa-car"></i>
		<i class="fa fa-caret-down"></i>
		<i class="fa fa-caret-left"></i>
		<i class="fa fa-caret-right"></i>
		<i class="fa fa-caret-square-o-down"></i>
		<i class="fa fa-caret-square-o-left"></i>
		<i class="fa fa-caret-square-o-right"></i>
		<i class="fa fa-caret-square-o-up"></i>
		<i class="fa fa-caret-up"></i>
		<i class="fa fa-cart-arrow-down"></i>
		<i class="fa fa-cart-plus"></i>
		<i class="fa fa-cc"></i>
		<i class="fa fa-cc-amex"></i>
		<i class="fa fa-cc-diners-club"></i>
		<i class="fa fa-cc-discover"></i>
		<i class="fa fa-cc-jcb"></i>
		<i class="fa fa-cc-mastercard"></i>
		<i class="fa fa-cc-paypal"></i>
		<i class="fa fa-cc-stripe"></i>
		<i class="fa fa-cc-visa"></i>
		<i class="fa fa-certificate"></i>
		<i class="fa fa-chain"></i>
		<i class="fa fa-chain-broken"></i>
		<i class="fa fa-check"></i>
		<i class="fa fa-check-circle"></i>
		<i class="fa fa-check-circle-o"></i>
		<i class="fa fa-check-square"></i>
		<i class="fa fa-check-square-o"></i>
		<i class="fa fa-chevron-circle-down"></i>
		<i class="fa fa-chevron-circle-left"></i>
		<i class="fa fa-chevron-circle-right"></i>
		<i class="fa fa-chevron-circle-up"></i>
		<i class="fa fa-chevron-down"></i>
		<i class="fa fa-chevron-left"></i>
		<i class="fa fa-chevron-right"></i>
		<i class="fa fa-chevron-up"></i>
		<i class="fa fa-child"></i>
		<i class="fa fa-chrome"></i>
		<i class="fa fa-circle"></i>
		<i class="fa fa-circle-o"></i>
		<i class="fa fa-circle-o-notch"></i>
		<i class="fa fa-circle-thin"></i>
		<i class="fa fa-clipboard"></i>
		<i class="fa fa-clock-o"></i>
		<i class="fa fa-clone"></i>
		<i class="fa fa-close"></i>
		<i class="fa fa-cloud"></i>
		<i class="fa fa-cloud-download"></i>
		<i class="fa fa-cloud-upload"></i>
		<i class="fa fa-cny"></i>
		<i class="fa fa-code"></i>
		<i class="fa fa-code-fork"></i>
		<i class="fa fa-codepen"></i>
		<i class="fa fa-codiepie"></i>
		<i class="fa fa-coffee"></i>
		<i class="fa fa-cog"></i>
		<i class="fa fa-cogs"></i>
		<i class="fa fa-columns"></i>
		<i class="fa fa-comment"></i>
		<i class="fa fa-comment-o"></i>
		<i class="fa fa-commenting"></i>
		<i class="fa fa-commenting-o"></i>
		<i class="fa fa-comments"></i>
		<i class="fa fa-comments-o"></i>
		<i class="fa fa-compass"></i>
		<i class="fa fa-compress"></i>
		<i class="fa fa-connectdevelop"></i>
		<i class="fa fa-contao"></i>
		<i class="fa fa-copy"></i>
		<i class="fa fa-copyright"></i>
		<i class="fa fa-creative-commons"></i>
		<i class="fa fa-credit-card"></i>
		<i class="fa fa-credit-card-alt"></i>
		<i class="fa fa-crop"></i>
		<i class="fa fa-crosshairs"></i>
		<i class="fa fa-css3"></i>
		<i class="fa fa-cube"></i>
		<i class="fa fa-cubes"></i>
		<i class="fa fa-cut"></i>
		<i class="fa fa-cutlery"></i>
		<i class="fa fa-dashboard"></i>
		<i class="fa fa-dashcube"></i>
		<i class="fa fa-database"></i>
		<i class="fa fa-deaf"></i>
		<i class="fa fa-deafness"></i>
		<i class="fa fa-dedent"></i>
		<i class="fa fa-delicious"></i>
		<i class="fa fa-desktop"></i>
		<i class="fa fa-deviantart"></i>
		<i class="fa fa-diamond"></i>
		<i class="fa fa-digg"></i>
		<i class="fa fa-dollar"></i>
		<i class="fa fa-dot-circle-o"></i>
		<i class="fa fa-download"></i>
		<i class="fa fa-dribbble"></i>
		<i class="fa fa-drivers-license"></i>
		<i class="fa fa-drivers-license-o"></i>
		<i class="fa fa-dropbox"></i>
		<i class="fa fa-drupal"></i>
		<i class="fa fa-edge"></i>
		<i class="fa fa-edit"></i>
		<i class="fa fa-eercast"></i>
		<i class="fa fa-eject"></i>
		<i class="fa fa-ellipsis-h"></i>
		<i class="fa fa-ellipsis-v"></i>
		<i class="fa fa-empire"></i>
		<i class="fa fa-envelope"></i>
		<i class="fa fa-envelope-o"></i>
		<i class="fa fa-envelope-open"></i>
		<i class="fa fa-envelope-open-o"></i>
		<i class="fa fa-envelope-square"></i>
		<i class="fa fa-envira"></i>
		<i class="fa fa-eraser"></i>
		<i class="fa fa-etsy"></i>
		<i class="fa fa-eur"></i>
		<i class="fa fa-euro"></i>
		<i class="fa fa-exchange"></i>
		<i class="fa fa-exclamation"></i>
		<i class="fa fa-exclamation-circle"></i>
		<i class="fa fa-exclamation-triangle"></i>
		<i class="fa fa-expand"></i>
		<i class="fa fa-expeditedssl"></i>
		<i class="fa fa-external-link"></i>
		<i class="fa fa-external-link-square"></i>
		<i class="fa fa-eye"></i>
		<i class="fa fa-eye-slash"></i>
		<i class="fa fa-eyedropper"></i>
		<i class="fa fa-fa"></i>
		<i class="fa fa-facebook"></i>
		<i class="fa fa-facebook-f"></i>
		<i class="fa fa-facebook-official"></i>
		<i class="fa fa-facebook-square"></i>
		<i class="fa fa-fast-backward"></i>
		<i class="fa fa-fast-forward"></i>
		<i class="fa fa-fax"></i>
		<i class="fa fa-feed"></i>
		<i class="fa fa-female"></i>
		<i class="fa fa-fighter-jet"></i>
		<i class="fa fa-file"></i>
		<i class="fa fa-file-archive-o"></i>
		<i class="fa fa-file-audio-o"></i>
		<i class="fa fa-file-code-o"></i>
		<i class="fa fa-file-excel-o"></i>
		<i class="fa fa-file-image-o"></i>
		<i class="fa fa-file-movie-o"></i>
		<i class="fa fa-file-o"></i>
		<i class="fa fa-file-pdf-o"></i>
		<i class="fa fa-file-photo-o"></i>
		<i class="fa fa-file-picture-o"></i>
		<i class="fa fa-file-powerpoint-o"></i>
		<i class="fa fa-file-sound-o"></i>
		<i class="fa fa-file-text"></i>
		<i class="fa fa-file-text-o"></i>
		<i class="fa fa-file-video-o"></i>
		<i class="fa fa-file-word-o"></i>
		<i class="fa fa-file-zip-o"></i>
		<i class="fa fa-files-o"></i>
		<i class="fa fa-film"></i>
		<i class="fa fa-filter"></i>
		<i class="fa fa-fire"></i>
		<i class="fa fa-fire-extinguisher"></i>
		<i class="fa fa-firefox"></i>
		<i class="fa fa-first-order"></i>
		<i class="fa fa-flag"></i>
		<i class="fa fa-flag-checkered"></i>
		<i class="fa fa-flag-o"></i>
		<i class="fa fa-flash"></i>
		<i class="fa fa-flask"></i>
		<i class="fa fa-flickr"></i>
		<i class="fa fa-floppy-o"></i>
		<i class="fa fa-folder"></i>
		<i class="fa fa-folder-o"></i>
		<i class="fa fa-folder-open"></i>
		<i class="fa fa-folder-open-o"></i>
		<i class="fa fa-font"></i>
		<i class="fa fa-font-awesome"></i>
		<i class="fa fa-fonticons"></i>
		<i class="fa fa-fort-awesome"></i>
		<i class="fa fa-forumbee"></i>
		<i class="fa fa-forward"></i>
		<i class="fa fa-foursquare"></i>
		<i class="fa fa-free-code-camp"></i>
		<i class="fa fa-frown-o"></i>
		<i class="fa fa-futbol-o"></i>
		<i class="fa fa-gamepad"></i>
		<i class="fa fa-gavel"></i>
		<i class="fa fa-gbp"></i>
		<i class="fa fa-ge"></i>
		<i class="fa fa-gear"></i>
		<i class="fa fa-gears"></i>
		<i class="fa fa-genderless"></i>
		<i class="fa fa-get-pocket"></i>
		<i class="fa fa-gg"></i>
		<i class="fa fa-gg-circle"></i>
		<i class="fa fa-gift"></i>
		<i class="fa fa-git"></i>
		<i class="fa fa-git-square"></i>
		<i class="fa fa-github"></i>
		<i class="fa fa-github-alt"></i>
		<i class="fa fa-github-square"></i>
		<i class="fa fa-gitlab"></i>
		<i class="fa fa-gittip"></i>
		<i class="fa fa-glass"></i>
		<i class="fa fa-glide"></i>
		<i class="fa fa-glide-g"></i>
		<i class="fa fa-globe"></i>
		<i class="fa fa-google"></i>
		<i class="fa fa-google-plus"></i>
		<i class="fa fa-google-plus-circle"></i>
		<i class="fa fa-google-plus-official"></i>
		<i class="fa fa-google-plus-square"></i>
		<i class="fa fa-google-wallet"></i>
		<i class="fa fa-graduation-cap"></i>
		<i class="fa fa-gratipay"></i>
		<i class="fa fa-grav"></i>
		<i class="fa fa-group"></i>
		<i class="fa fa-h-square"></i>
		<i class="fa fa-hacker-news"></i>
		<i class="fa fa-hand-grab-o"></i>
		<i class="fa fa-hand-lizard-o"></i>
		<i class="fa fa-hand-o-down"></i>
		<i class="fa fa-hand-o-left"></i>
		<i class="fa fa-hand-o-right"></i>
		<i class="fa fa-hand-o-up"></i>
		<i class="fa fa-hand-paper-o"></i>
		<i class="fa fa-hand-peace-o"></i>
		<i class="fa fa-hand-pointer-o"></i>
		<i class="fa fa-hand-rock-o"></i>
		<i class="fa fa-hand-scissors-o"></i>
		<i class="fa fa-hand-spock-o"></i>
		<i class="fa fa-hand-stop-o"></i>
		<i class="fa fa-handshake-o"></i>
		<i class="fa fa-hard-of-hearing"></i>
		<i class="fa fa-hashtag"></i>
		<i class="fa fa-hdd-o"></i>
		<i class="fa fa-header"></i>
		<i class="fa fa-headphones"></i>
		<i class="fa fa-heart"></i>
		<i class="fa fa-heart-o"></i>
		<i class="fa fa-heartbeat"></i>
		<i class="fa fa-history"></i>
		<i class="fa fa-home"></i>
		<i class="fa fa-hospital-o"></i>
		<i class="fa fa-hotel"></i>
		<i class="fa fa-hourglass"></i>
		<i class="fa fa-hourglass-1"></i>
		<i class="fa fa-hourglass-2"></i>
		<i class="fa fa-hourglass-3"></i>
		<i class="fa fa-hourglass-end"></i>
		<i class="fa fa-hourglass-half"></i>
		<i class="fa fa-hourglass-o"></i>
		<i class="fa fa-hourglass-start"></i>
		<i class="fa fa-houzz"></i>
		<i class="fa fa-html5"></i>
		<i class="fa fa-i-cursor"></i>
		<i class="fa fa-id-badge"></i>
		<i class="fa fa-id-card"></i>
		<i class="fa fa-id-card-o"></i>
		<i class="fa fa-ils"></i>
		<i class="fa fa-image"></i>
		<i class="fa fa-imdb"></i>
		<i class="fa fa-inbox"></i>
		<i class="fa fa-indent"></i>
		<i class="fa fa-industry"></i>
		<i class="fa fa-info"></i>
		<i class="fa fa-info-circle"></i>
		<i class="fa fa-inr"></i>
		<i class="fa fa-instagram"></i>
		<i class="fa fa-institution"></i>
		<i class="fa fa-internet-explorer"></i>
		<i class="fa fa-intersex"></i>
		<i class="fa fa-ioxhost"></i>
		<i class="fa fa-italic"></i>
		<i class="fa fa-joomla"></i>
		<i class="fa fa-jpy"></i>
		<i class="fa fa-jsfiddle"></i>
		<i class="fa fa-key"></i>
		<i class="fa fa-keyboard-o"></i>
		<i class="fa fa-krw"></i>
		<i class="fa fa-language"></i>
		<i class="fa fa-laptop"></i>
		<i class="fa fa-lastfm"></i>
		<i class="fa fa-lastfm-square"></i>
		<i class="fa fa-leaf"></i>
		<i class="fa fa-leanpub"></i>
		<i class="fa fa-legal"></i>
		<i class="fa fa-lemon-o"></i>
		<i class="fa fa-level-down"></i>
		<i class="fa fa-level-up"></i>
		<i class="fa fa-life-bouy"></i>
		<i class="fa fa-life-buoy"></i>
		<i class="fa fa-life-ring"></i>
		<i class="fa fa-life-saver"></i>
		<i class="fa fa-lightbulb-o"></i>
		<i class="fa fa-line-chart"></i>
		<i class="fa fa-link"></i>
		<i class="fa fa-linkedin"></i>
		<i class="fa fa-linkedin-square"></i>
		<i class="fa fa-linode"></i>
		<i class="fa fa-linux"></i>
		<i class="fa fa-list"></i>
		<i class="fa fa-list-alt"></i>
		<i class="fa fa-list-ol"></i>
		<i class="fa fa-list-ul"></i>
		<i class="fa fa-location-arrow"></i>
		<i class="fa fa-lock"></i>
		<i class="fa fa-long-arrow-down"></i>
		<i class="fa fa-long-arrow-left"></i>
		<i class="fa fa-long-arrow-right"></i>
		<i class="fa fa-long-arrow-up"></i>
		<i class="fa fa-low-vision"></i>
		<i class="fa fa-magic"></i>
		<i class="fa fa-magnet"></i>
		<i class="fa fa-mail-forward"></i>
		<i class="fa fa-mail-reply"></i>
		<i class="fa fa-mail-reply-all"></i>
		<i class="fa fa-male"></i>
		<i class="fa fa-map"></i>
		<i class="fa fa-map-marker"></i>
		<i class="fa fa-map-o"></i>
		<i class="fa fa-map-pin"></i>
		<i class="fa fa-map-signs"></i>
		<i class="fa fa-mars"></i>
		<i class="fa fa-mars-double"></i>
		<i class="fa fa-mars-stroke"></i>
		<i class="fa fa-mars-stroke-h"></i>
		<i class="fa fa-mars-stroke-v"></i>
		<i class="fa fa-maxcdn"></i>
		<i class="fa fa-meanpath"></i>
		<i class="fa fa-medium"></i>
		<i class="fa fa-medkit"></i>
		<i class="fa fa-meetup"></i>
		<i class="fa fa-meh-o"></i>
		<i class="fa fa-mercury"></i>
		<i class="fa fa-microchip"></i>
		<i class="fa fa-microphone"></i>
		<i class="fa fa-microphone-slash"></i>
		<i class="fa fa-minus"></i>
		<i class="fa fa-minus-circle"></i>
		<i class="fa fa-minus-square"></i>
		<i class="fa fa-minus-square-o"></i>
		<i class="fa fa-mixcloud"></i>
		<i class="fa fa-mobile"></i>
		<i class="fa fa-mobile-phone"></i>
		<i class="fa fa-modx"></i>
		<i class="fa fa-money"></i>
		<i class="fa fa-moon-o"></i>
		<i class="fa fa-mortar-board"></i>
		<i class="fa fa-motorcycle"></i>
		<i class="fa fa-mouse-pointer"></i>
		<i class="fa fa-music"></i>
		<i class="fa fa-navicon"></i>
		<i class="fa fa-neuter"></i>
		<i class="fa fa-newspaper-o"></i>
		<i class="fa fa-object-group"></i>
		<i class="fa fa-object-ungroup"></i>
		<i class="fa fa-odnoklassniki"></i>
		<i class="fa fa-odnoklassniki-square"></i>
		<i class="fa fa-opencart"></i>
		<i class="fa fa-openid"></i>
		<i class="fa fa-opera"></i>
		<i class="fa fa-optin-monster"></i>
		<i class="fa fa-outdent"></i>
		<i class="fa fa-pagelines"></i>
		<i class="fa fa-paint-brush"></i>
		<i class="fa fa-paper-plane"></i>
		<i class="fa fa-paper-plane-o"></i>
		<i class="fa fa-paperclip"></i>
		<i class="fa fa-paragraph"></i>
		<i class="fa fa-paste"></i>
		<i class="fa fa-pause"></i>
		<i class="fa fa-pause-circle"></i>
		<i class="fa fa-pause-circle-o"></i>
		<i class="fa fa-paw"></i>
		<i class="fa fa-paypal"></i>
		<i class="fa fa-pencil"></i>
		<i class="fa fa-pencil-square"></i>
		<i class="fa fa-pencil-square-o"></i>
		<i class="fa fa-percent"></i>
		<i class="fa fa-phone"></i>
		<i class="fa fa-phone-square"></i>
		<i class="fa fa-photo"></i>
		<i class="fa fa-picture-o"></i>
		<i class="fa fa-pie-chart"></i>
		<i class="fa fa-pied-piper"></i>
		<i class="fa fa-pied-piper-alt"></i>
		<i class="fa fa-pied-piper-pp"></i>
		<i class="fa fa-pinterest"></i>
		<i class="fa fa-pinterest-p"></i>
		<i class="fa fa-pinterest-square"></i>
		<i class="fa fa-plane"></i>
		<i class="fa fa-play"></i>
		<i class="fa fa-play-circle"></i>
		<i class="fa fa-play-circle-o"></i>
		<i class="fa fa-plug"></i>
		<i class="fa fa-plus"></i>
		<i class="fa fa-plus-circle"></i>
		<i class="fa fa-plus-square"></i>
		<i class="fa fa-plus-square-o"></i>
		<i class="fa fa-podcast"></i>
		<i class="fa fa-power-off"></i>
		<i class="fa fa-print"></i>
		<i class="fa fa-product-hunt"></i>
		<i class="fa fa-puzzle-piece"></i>
		<i class="fa fa-qq"></i>
		<i class="fa fa-qrcode"></i>
		<i class="fa fa-question"></i>
		<i class="fa fa-question-circle"></i>
		<i class="fa fa-question-circle-o"></i>
		<i class="fa fa-quora"></i>
		<i class="fa fa-quote-left"></i>
		<i class="fa fa-quote-right"></i>
		<i class="fa fa-ra"></i>
		<i class="fa fa-random"></i>
		<i class="fa fa-ravelry"></i>
		<i class="fa fa-rebel"></i>
		<i class="fa fa-recycle"></i>
		<i class="fa fa-reddit"></i>
		<i class="fa fa-reddit-alien"></i>
		<i class="fa fa-reddit-square"></i>
		<i class="fa fa-refresh"></i>
		<i class="fa fa-registered"></i>
		<i class="fa fa-remove"></i>
		<i class="fa fa-renren"></i>
		<i class="fa fa-reorder"></i>
		<i class="fa fa-repeat"></i>
		<i class="fa fa-reply"></i>
		<i class="fa fa-reply-all"></i>
		<i class="fa fa-resistance"></i>
		<i class="fa fa-retweet"></i>
		<i class="fa fa-rmb"></i>
		<i class="fa fa-road"></i>
		<i class="fa fa-rocket"></i>
		<i class="fa fa-rotate-left"></i>
		<i class="fa fa-rotate-right"></i>
		<i class="fa fa-rouble"></i>
		<i class="fa fa-rss"></i>
		<i class="fa fa-rss-square"></i>
		<i class="fa fa-rub"></i>
		<i class="fa fa-ruble"></i>
		<i class="fa fa-rupee"></i>
		<i class="fa fa-s15"></i>
		<i class="fa fa-safari"></i>
		<i class="fa fa-save"></i>
		<i class="fa fa-scissors"></i>
		<i class="fa fa-scribd"></i>
		<i class="fa fa-search"></i>
		<i class="fa fa-search-minus"></i>
		<i class="fa fa-search-plus"></i>
		<i class="fa fa-sellsy"></i>
		<i class="fa fa-send"></i>
		<i class="fa fa-send-o"></i>
		<i class="fa fa-server"></i>
		<i class="fa fa-share"></i>
		<i class="fa fa-share-alt"></i>
		<i class="fa fa-share-alt-square"></i>
		<i class="fa fa-share-square"></i>
		<i class="fa fa-share-square-o"></i>
		<i class="fa fa-shekel"></i>
		<i class="fa fa-sheqel"></i>
		<i class="fa fa-shield"></i>
		<i class="fa fa-ship"></i>
		<i class="fa fa-shirtsinbulk"></i>
		<i class="fa fa-shopping-bag"></i>
		<i class="fa fa-shopping-basket"></i>
		<i class="fa fa-shopping-cart"></i>
		<i class="fa fa-shower"></i>
		<i class="fa fa-sign-in"></i>
		<i class="fa fa-sign-language"></i>
		<i class="fa fa-sign-out"></i>
		<i class="fa fa-signal"></i>
		<i class="fa fa-signing"></i>
		<i class="fa fa-simplybuilt"></i>
		<i class="fa fa-sitemap"></i>
		<i class="fa fa-skyatlas"></i>
		<i class="fa fa-skype"></i>
		<i class="fa fa-slack"></i>
		<i class="fa fa-sliders"></i>
		<i class="fa fa-slideshare"></i>
		<i class="fa fa-smile-o"></i>
		<i class="fa fa-snapchat"></i>
		<i class="fa fa-snapchat-ghost"></i>
		<i class="fa fa-snapchat-square"></i>
		<i class="fa fa-snowflake-o"></i>
		<i class="fa fa-soccer-ball-o"></i>
		<i class="fa fa-sort"></i>
		<i class="fa fa-sort-alpha-asc"></i>
		<i class="fa fa-sort-alpha-desc"></i>
		<i class="fa fa-sort-amount-asc"></i>
		<i class="fa fa-sort-amount-desc"></i>
		<i class="fa fa-sort-asc"></i>
		<i class="fa fa-sort-desc"></i>
		<i class="fa fa-sort-down"></i>
		<i class="fa fa-sort-numeric-asc"></i>
		<i class="fa fa-sort-numeric-desc"></i>
		<i class="fa fa-sort-up"></i>
		<i class="fa fa-soundcloud"></i>
		<i class="fa fa-space-shuttle"></i>
		<i class="fa fa-spinner"></i>
		<i class="fa fa-spoon"></i>
		<i class="fa fa-spotify"></i>
		<i class="fa fa-square"></i>
		<i class="fa fa-square-o"></i>
		<i class="fa fa-stack-exchange"></i>
		<i class="fa fa-stack-overflow"></i>
		<i class="fa fa-star"></i>
		<i class="fa fa-star-half"></i>
		<i class="fa fa-star-half-empty"></i>
		<i class="fa fa-star-half-full"></i>
		<i class="fa fa-star-half-o"></i>
		<i class="fa fa-star-o"></i>
		<i class="fa fa-steam"></i>
		<i class="fa fa-steam-square"></i>
		<i class="fa fa-step-backward"></i>
		<i class="fa fa-step-forward"></i>
		<i class="fa fa-stethoscope"></i>
		<i class="fa fa-sticky-note"></i>
		<i class="fa fa-sticky-note-o"></i>
		<i class="fa fa-stop"></i>
		<i class="fa fa-stop-circle"></i>
		<i class="fa fa-stop-circle-o"></i>
		<i class="fa fa-street-view"></i>
		<i class="fa fa-strikethrough"></i>
		<i class="fa fa-stumbleupon"></i>
		<i class="fa fa-stumbleupon-circle"></i>
		<i class="fa fa-subscript"></i>
		<i class="fa fa-subway"></i>
		<i class="fa fa-suitcase"></i>
		<i class="fa fa-sun-o"></i>
		<i class="fa fa-superpowers"></i>
		<i class="fa fa-superscript"></i>
		<i class="fa fa-support"></i>
		<i class="fa fa-table"></i>
		<i class="fa fa-tablet"></i>
		<i class="fa fa-tachometer"></i>
		<i class="fa fa-tag"></i>
		<i class="fa fa-tags"></i>
		<i class="fa fa-tasks"></i>
		<i class="fa fa-taxi"></i>
		<i class="fa fa-telegram"></i>
		<i class="fa fa-television"></i>
		<i class="fa fa-tencent-weibo"></i>
		<i class="fa fa-terminal"></i>
		<i class="fa fa-text-height"></i>
		<i class="fa fa-text-width"></i>
		<i class="fa fa-th"></i>
		<i class="fa fa-th-large"></i>
		<i class="fa fa-th-list"></i>
		<i class="fa fa-themeisle"></i>
		<i class="fa fa-thermometer"></i>
		<i class="fa fa-thermometer-0"></i>
		<i class="fa fa-thermometer-1"></i>
		<i class="fa fa-thermometer-2"></i>
		<i class="fa fa-thermometer-3"></i>
		<i class="fa fa-thermometer-4"></i>
		<i class="fa fa-thermometer-empty"></i>
		<i class="fa fa-thermometer-full"></i>
		<i class="fa fa-thermometer-half"></i>
		<i class="fa fa-thermometer-quarter"></i>
		<i class="fa fa-thermometer-three-quarters"></i>
		<i class="fa fa-thumb-tack"></i>
		<i class="fa fa-thumbs-down"></i>
		<i class="fa fa-thumbs-o-down"></i>
		<i class="fa fa-thumbs-o-up"></i>
		<i class="fa fa-thumbs-up"></i>
		<i class="fa fa-ticket"></i>
		<i class="fa fa-times"></i>
		<i class="fa fa-times-circle"></i>
		<i class="fa fa-times-circle-o"></i>
		<i class="fa fa-times-rectangle"></i>
		<i class="fa fa-times-rectangle-o"></i>
		<i class="fa fa-tint"></i>
		<i class="fa fa-toggle-down"></i>
		<i class="fa fa-toggle-left"></i>
		<i class="fa fa-toggle-off"></i>
		<i class="fa fa-toggle-on"></i>
		<i class="fa fa-toggle-right"></i>
		<i class="fa fa-toggle-up"></i>
		<i class="fa fa-trademark"></i>
		<i class="fa fa-train"></i>
		<i class="fa fa-transgender"></i>
		<i class="fa fa-transgender-alt"></i>
		<i class="fa fa-trash"></i>
		<i class="fa fa-trash-o"></i>
		<i class="fa fa-tree"></i>
		<i class="fa fa-trello"></i>
		<i class="fa fa-tripadvisor"></i>
		<i class="fa fa-trophy"></i>
		<i class="fa fa-truck"></i>
		<i class="fa fa-try"></i>
		<i class="fa fa-tty"></i>
		<i class="fa fa-tumblr"></i>
		<i class="fa fa-tumblr-square"></i>
		<i class="fa fa-turkish-lira"></i>
		<i class="fa fa-tv"></i>
		<i class="fa fa-twitch"></i>
		<i class="fa fa-twitter"></i>
		<i class="fa fa-twitter-square"></i>
		<i class="fa fa-umbrella"></i>
		<i class="fa fa-underline"></i>
		<i class="fa fa-undo"></i>
		<i class="fa fa-universal-access"></i>
		<i class="fa fa-university"></i>
		<i class="fa fa-unlink"></i>
		<i class="fa fa-unlock"></i>
		<i class="fa fa-unlock-alt"></i>
		<i class="fa fa-unsorted"></i>
		<i class="fa fa-upload"></i>
		<i class="fa fa-usb"></i>
		<i class="fa fa-usd"></i>
		<i class="fa fa-user"></i>
		<i class="fa fa-user-circle"></i>
		<i class="fa fa-user-circle-o"></i>
		<i class="fa fa-user-md"></i>
		<i class="fa fa-user-o"></i>
		<i class="fa fa-user-plus"></i>
		<i class="fa fa-user-secret"></i>
		<i class="fa fa-user-times"></i>
		<i class="fa fa-users"></i>
		<i class="fa fa-vcard"></i>
		<i class="fa fa-vcard-o"></i>
		<i class="fa fa-venus"></i>
		<i class="fa fa-venus-double"></i>
		<i class="fa fa-venus-mars"></i>
		<i class="fa fa-viacoin"></i>
		<i class="fa fa-viadeo"></i>
		<i class="fa fa-viadeo-square"></i>
		<i class="fa fa-video-camera"></i>
		<i class="fa fa-vimeo"></i>
		<i class="fa fa-vimeo-square"></i>
		<i class="fa fa-vine"></i>
		<i class="fa fa-vk"></i>
		<i class="fa fa-volume-control-phone"></i>
		<i class="fa fa-volume-down"></i>
		<i class="fa fa-volume-off"></i>
		<i class="fa fa-volume-up"></i>
		<i class="fa fa-warning"></i>
		<i class="fa fa-wechat"></i>
		<i class="fa fa-weibo"></i>
		<i class="fa fa-weixin"></i>
		<i class="fa fa-whatsapp"></i>
		<i class="fa fa-wheelchair"></i>
		<i class="fa fa-wheelchair-alt"></i>
		<i class="fa fa-wifi"></i>
		<i class="fa fa-wikipedia-w"></i>
		<i class="fa fa-window-close"></i>
		<i class="fa fa-window-close-o"></i>
		<i class="fa fa-window-maximize"></i>
		<i class="fa fa-window-minimize"></i>
		<i class="fa fa-window-restore"></i>
		<i class="fa fa-windows"></i>
		<i class="fa fa-won"></i>
		<i class="fa fa-wordpress"></i>
		<i class="fa fa-wpbeginner"></i>
		<i class="fa fa-wpexplorer"></i>
		<i class="fa fa-wpforms"></i>
		<i class="fa fa-wrench"></i>
		<i class="fa fa-xing"></i>
		<i class="fa fa-xing-square"></i>
		<i class="fa fa-y-combinator"></i>
		<i class="fa fa-y-combinator-square"></i>
		<i class="fa fa-yahoo"></i>
		<i class="fa fa-yc"></i>
		<i class="fa fa-yc-square"></i>
		<i class="fa fa-yelp"></i>
		<i class="fa fa-yen"></i>
		<i class="fa fa-yoast"></i>
		<i class="fa fa-youtube"></i>
		<i class="fa fa-youtube-play"></i>
		<i class="fa fa-youtube-square"></i>

	</div>
	<p class="help-block text-center">
		For a full list of icons, please consult:
		<a href="http://fortawesome.github.io/Font-Awesome/icons/">FontAwesome</a>
	</p>
</div>
		</div>
	</div>
</div>
