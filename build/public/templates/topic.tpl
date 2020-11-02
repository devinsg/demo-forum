<div data-widget-area="header">
	{{{each widgets.header}}}
	{{widgets.header.html}}
	{{{end}}}
</div>
<div class="row">
	<div class="topic <!-- IF widgets.sidebar.length -->col-lg-9 col-sm-12<!-- ELSE -->col-lg-12<!-- ENDIF widgets.sidebar.length -->">
		<div class="topic-header">
			<h1 component="post/header" class="" itemprop="name">
				<span class="topic-title" component="topic/title">
					<span component="topic/labels">
						<i component="topic/pinned" class="fa fa-thumb-tack <!-- IF !pinned -->hidden<!-- ENDIF !pinned -->" title="[[topic:pinned]]"></i>
						<i component="topic/locked" class="fa fa-lock <!-- IF !locked -->hidden<!-- ENDIF !locked -->" title="[[topic:locked]]"></i>
						<i class="fa fa-arrow-circle-right <!-- IF !oldCid -->hidden<!-- ENDIF !oldCid -->" title="[[topic:moved]]"></i>
						{{{each icons}}}@value{{{end}}}
					</span>
					{title}
				</span>
			</h1>

			<div class="topic-info clearfix">
				<div class="category-item inline-block">
					{{{ if category.icon }}}
					<div role="presentation" class="icon pull-left" style="{{{ if category.bgColor }}}background-color: {category.bgColor};{{{end}}}; {{{ if category.color}}}color: {category.color};{{{end}}}">
						<i class="fa fa-fw {category.icon}"></i>
					</div>
					{{{ end }}}
					<a href="{config.relative_path}/category/{category.slug}">{category.name}</a>
				</div>

				<div class="tags tag-list inline-block">
					{{{each tags}}}
<a href="{config.relative_path}/tags/{tags.value}">
    <span class="tag tag-item" data-tag="{tags.value}" style="<!-- IF tags.color -->color: {tags.color};<!-- ENDIF tags.color --><!-- IF tags.bgColor -->background-color: {tags.bgColor};<!-- ENDIF tags.bgColor -->">{tags.valueEscaped}</span>
</a>
{{{end}}}
				</div>
				<div class="inline-block">
					<div class="stats hidden-xs text-muted">
	<i class="fa fa-fw fa-user" title="[[global:posters]]"></i>
	<span title="{posterCount}" class="human-readable-number">{posterCount}</span>
</div>
<div class="stats hidden-xs text-muted">
	<i class="fa fa-fw fa-pencil" title="[[global:posts]]"></i>
	<span component="topic/post-count" title="{postcount}" class="human-readable-number">{postcount}</span>
</div>
<div class="stats hidden-xs text-muted">
	<i class="fa fa-fw fa-eye" title="[[global:views]]"></i>
	<span class="human-readable-number" title="{viewcount}">{viewcount}</span>
</div>
				</div>

				<div component="topic/browsing-users" class="inline-block hidden-xs">
	{{{each browsingUsers}}}
	<div class="pull-left" data-uid="{browsingUsers.uid}">
		<a href="<!-- IF browsingUsers.userslug -->{config.relative_path}/user/{browsingUsers.userslug}<!-- ELSE -->#<!-- ENDIF browsingUsers.userslug -->">
			<!-- IF browsingUsers.picture -->
			<img class="avatar avatar-sm avatar-rounded" component="user/picture" src="{browsingUsers.picture}" align="left" itemprop="image" title="{browsingUsers.username}"/>
			<!-- ELSE -->
			<div class="avatar avatar-sm avatar-rounded" component="user/picture" title="{browsingUsers.username}" style="background-color: {browsingUsers.icon:bgColor};">{browsingUsers.icon:text}</div>
			<!-- ENDIF browsingUsers.picture -->
		</a>
	</div>
	{{{end}}}
</div>

				<div class="topic-main-buttons pull-right inline-block">
	<span class="loading-indicator btn pull-left hidden" done="0">
		<span class="hidden-xs">[[topic:loading_more_posts]]</span> <i class="fa fa-refresh fa-spin"></i>
	</span>

	<!-- IF loggedIn -->
	<button component="topic/mark-unread" class="btn btn-sm btn-default" title="[[topic:mark_unread]]">
		<i class="fa fa-fw fa-inbox"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline"></span>
	</button>
	<!-- ENDIF loggedIn -->

	<!-- IF config.loggedIn -->
<div class="btn-group topic-watch-dropdown bottom-sheet" component="topic/watch">
	<button class="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown" type="button"
		{{{if isFollowing}}}title="[[topic:watching]]"{{{end}}}
		{{{if isNotFollowing}}}title="[[topic:not-watching]]"{{{end}}}
		{{{if isIgnoring}}}title="[[topic:ignoring]]"{{{end}}}
	>
		<span component="topic/following/menu" <!-- IF !isFollowing -->class="hidden"<!-- ENDIF !isFollowing -->><i class="fa fa-fw fa-bell-o"></i></span>

		<span component="topic/not-following/menu" <!-- IF !isNotFollowing -->class="hidden"<!-- ENDIF !isNotFollowing -->><i class="fa fa-fw fa-bell-slash-o"></i></span>

		<span component="topic/ignoring/menu" <!-- IF !isIgnoring -->class="hidden"<!-- ENDIF !isIgnoring -->><i class="fa fa-fw fa-eye-slash"></i></span>

	</button>
	<ul class="dropdown-menu dropdown-menu-right">
		<li><a href="#" component="topic/following"><i component="topic/following/check" class="fa fa-fw <!-- IF isFollowing -->fa-check<!-- ENDIF isFollowing -->"></i><i class="fa fa-fw fa-bell-o"></i> [[topic:watching]]<p class="help-text hidden-xs"><small>[[topic:watching.description]]</small></p></a></li>
		<li><a href="#" component="topic/not-following"><i component="topic/not-following/check" class="fa fa-fw <!-- IF isNotFollowing -->fa-check<!-- ENDIF isNotFollowing -->"></i><i class="fa fa-fw fa-bell-slash-o"></i> [[topic:not-watching]]<p class="help-text hidden-xs"><small>[[topic:not-watching.description]]</small></p></a></li>
		<li><a href="#" component="topic/ignoring"><i component="topic/ignoring/check" class="fa fa-fw <!-- IF isIgnoring -->fa-check<!-- ENDIF isIgnoring -->"></i><i class="fa fa-fw fa-eye-slash"></i> [[topic:ignoring]]<p class="help-text hidden-xs"><small>[[topic:ignoring.description]]</small></p></a></li>
	</ul>
</div>
<!-- ENDIF config.loggedIn -->

	<div title="[[topic:sort_by]]" class="btn-group bottom-sheet" component="thread/sort">
	<button class="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown" type="button">
	<span><i class="fa fa-fw fa-sort"></i></span></button>
	<ul class="dropdown-menu dropdown-menu-right">
		<li><a href="#" class="oldest_to_newest" data-sort="oldest_to_newest"><i class="fa fa-fw"></i> [[topic:oldest_to_newest]]</a></li>
		<li><a href="#" class="newest_to_oldest" data-sort="newest_to_oldest"><i class="fa fa-fw"></i> [[topic:newest_to_oldest]]</a></li>
		<li><a href="#" class="most_votes" data-sort="most_votes"><i class="fa fa-fw"></i> [[topic:most_votes]]</a></li>
	</ul>
</div>


	<div class="inline-block">
	<!-- IF privileges.view_thread_tools -->
<div title="[[topic:thread_tools.title]]" class="btn-group thread-tools bottom-sheet">
	<button class="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown" type="button">
		<i class="fa fa-fw fa-gear"></i>
	</button>
	<ul class="dropdown-menu dropdown-menu-right"></ul>
</div>
<!-- ENDIF privileges.view_thread_tools -->
	</div>
	<div component="topic/reply/container" class="btn-group action-bar bottom-sheet <!-- IF !privileges.topics:reply -->hidden<!-- ENDIF !privileges.topics:reply -->">
	<a href="{config.relative_path}/compose?tid={tid}&title={title}" class="btn btn-sm btn-primary" component="topic/reply" data-ajaxify="false" role="button"><i class="fa fa-reply visible-xs-inline"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline"> [[topic:reply]]</span></a>
	<button type="button" class="btn btn-sm btn-primary dropdown-toggle" data-toggle="dropdown">
		<span class="caret"></span>
	</button>
	<ul class="dropdown-menu pull-right" role="menu">
		<li><a href="#" component="topic/reply-as-topic">[[topic:reply-as-topic]]</a></li>
	</ul>
</div>

<!-- IF loggedIn -->
<!-- IF !privileges.topics:reply -->
<!-- IF locked -->
<a component="topic/reply/locked" class="btn btn-sm btn-primary" disabled><i class="fa fa-lock"></i> [[topic:locked]]</a>
<!-- ENDIF locked -->
<!-- ENDIF !privileges.topics:reply -->

<!-- IF !locked -->
<a component="topic/reply/locked" class="btn btn-sm btn-primary hidden" disabled><i class="fa fa-lock"></i> [[topic:locked]]</a>
<!-- ENDIF !locked -->

<!-- ELSE -->

<!-- IF !privileges.topics:reply -->
<a component="topic/reply/guest" href="{config.relative_path}/login" class="btn btn-sm btn-primary">[[topic:guest-login-reply]]</a>
<!-- ENDIF !privileges.topics:reply -->
<!-- ENDIF loggedIn -->
</div>

			</div>
		</div>
		<!-- IF merger -->
		<div component="topic/merged/message" class="alert alert-warning clearfix">
			<span class="pull-left">[[topic:merged_message, {config.relative_path}/topic/{mergeIntoTid}, {merger.mergedIntoTitle}]]</span>
			<span class="pull-right">
				<a href="{config.relative_path}/user/{merger.userslug}">
					<strong>{merger.username}</strong>
				</a>
				<small class="timeago" title="{mergedTimestampISO}"></small>
			</span>
		</div>
		<!-- ENDIF merger -->

		<div component="topic/deleted/message" class="alert alert-warning<!-- IF !deleted --> hidden<!-- ENDIF !deleted --> clearfix">
    <span class="pull-left">[[topic:deleted_message]]</span>
    <span class="pull-right">
        <!-- IF deleter -->
        <a href="{config.relative_path}/user/{deleter.userslug}">
            <strong>{deleter.username}</strong>
        </a>
        <small class="timeago" title="{deletedTimestampISO}"></small>
        <!-- ENDIF deleter -->
    </span>
</div>

		<ul component="topic" class="posts" data-tid="{tid}" data-cid="{cid}">
			{{{each posts}}}
				<li component="post" class="<!-- IF posts.deleted -->deleted<!-- ENDIF posts.deleted -->" data-index="{posts.index}" data-pid="{posts.pid}" data-uid="{posts.uid}" data-timestamp="{posts.timestamp}" data-username="{posts.user.username}" data-userslug="{posts.user.userslug}" itemscope itemtype="http://schema.org/Comment">
					<a component="post/anchor" data-index="{posts.index}" id="{posts.index}"></a>

					<meta itemprop="datePublished" content="{posts.timestampISO}">
					<meta itemprop="dateModified" content="{posts.editedISO}">

					<div class="clearfix post-header">
	<div class="icon pull-left">
		<a href="<!-- IF posts.user.userslug -->{config.relative_path}/user/{posts.user.userslug}<!-- ELSE -->#<!-- ENDIF posts.user.userslug -->">
			{buildAvatar(posts.user, "sm2x", true, "", "user/picture")}
			<i component="user/status" class="fa fa-circle status {posts.user.status}" title="[[global:{posts.user.status}]]"></i>
		</a>
	</div>

	<small class="pull-left">
		<strong>
			<a href="<!-- IF posts.user.userslug -->{config.relative_path}/user/{posts.user.userslug}<!-- ELSE -->#<!-- ENDIF posts.user.userslug -->" itemprop="author" data-username="{posts.user.username}" data-uid="{posts.user.uid}">{posts.user.username}</a>
		</strong>

		{{{each posts.user.selectedGroups}}}
<!-- IF posts.user.selectedGroups.slug -->
<a href="{config.relative_path}/groups/{posts.user.selectedGroups.slug}"><small class="label group-label inline-block" style="color:{posts.user.selectedGroups.textColor};background-color: {posts.user.selectedGroups.labelColor};"><!-- IF posts.user.selectedGroups.icon --><i class="fa {posts.user.selectedGroups.icon}"></i> <!-- ENDIF posts.user.selectedGroups.icon -->{posts.user.selectedGroups.userTitle}</small></a>
<!-- ENDIF posts.user.selectedGroups.slug -->
{{{end}}}

		<!-- IF posts.user.banned -->
		<span class="label label-danger">[[user:banned]]</span>
		<!-- ENDIF posts.user.banned -->

		<span class="visible-xs-inline-block visible-sm-inline-block visible-md-inline-block visible-lg-inline-block">
			<!-- IF posts.toPid -->
			<a component="post/parent" class="btn btn-xs btn-default hidden-xs" data-topid="{posts.toPid}" href="{config.relative_path}/post/{posts.toPid}"><i class="fa fa-reply"></i> @<!-- IF posts.parent.username -->{posts.parent.username}<!-- ELSE -->[[global:guest]]<!-- ENDIF posts.parent.username --></a>
			<!-- ENDIF posts.toPid -->

			<span>
				<!-- IF posts.user.custom_profile_info.length -->
				&#124;
				{{{each posts.user.custom_profile_info}}}
				{posts.user.custom_profile_info.content}
				{{{end}}}
				<!-- ENDIF posts.user.custom_profile_info.length -->
			</span>
		</span>

	</small>
	<small class="pull-right">
		<span class="bookmarked"><i class="fa fa-bookmark-o"></i></span>
	</small>
	<small class="pull-right">
		<i component="post/edit-indicator" class="fa fa-pencil-square<!-- IF privileges.posts:history --> pointer<!-- END --> edit-icon <!-- IF !posts.editor.username -->hidden<!-- ENDIF !posts.editor.username -->"></i>

		<small data-editor="{posts.editor.userslug}" component="post/editor" class="hidden">[[global:last_edited_by, {posts.editor.username}]] <span class="timeago" title="{posts.editedISO}"></span></small>

		<span class="visible-xs-inline-block visible-sm-inline-block visible-md-inline-block visible-lg-inline-block">
			<a class="permalink" href="{config.relative_path}/post/{posts.pid}"><span class="timeago" title="{posts.timestampISO}"></span></a>
		</span>
	</small>
</div>

<br />

<div class="content" component="post/content" itemprop="text">
	{posts.content}
</div>

<div class="clearfix post-footer">
	<!-- IF posts.user.signature -->
	<div component="post/signature" data-uid="{posts.user.uid}" class="post-signature">{posts.user.signature}</div>
	<!-- ENDIF posts.user.signature -->

	<small class="pull-right">
		<span class="post-tools">
			<a component="post/reply" href="#" class="no-select <!-- IF !privileges.topics:reply -->hidden<!-- ENDIF !privileges.topics:reply -->">[[topic:reply]]</a>
			<a component="post/quote" href="#" class="no-select <!-- IF !privileges.topics:reply -->hidden<!-- ENDIF !privileges.topics:reply -->">[[topic:quote]]</a>
		</span>

		<!-- IF !reputation:disabled -->
		<span class="votes">
			<a component="post/upvote" href="#" class="<!-- IF posts.upvoted -->upvoted<!-- ENDIF posts.upvoted -->">
				<i class="fa fa-chevron-up"></i>
			</a>

			<span component="post/vote-count" data-votes="{posts.votes}">{posts.votes}</span>

			<!-- IF !downvote:disabled -->
			<a component="post/downvote" href="#" class="<!-- IF posts.downvoted -->downvoted<!-- ENDIF posts.downvoted -->">
				<i class="fa fa-chevron-down"></i>
			</a>
			<!-- ENDIF !downvote:disabled -->
		</span>
		<!-- ENDIF !reputation:disabled -->

		<span component="post/tools" class="dropdown moderator-tools bottom-sheet <!-- IF !posts.display_post_menu -->hidden<!-- ENDIF !posts.display_post_menu -->">
	<a href="#" data-toggle="dropdown" data-ajaxify="false"><i class="fa fa-fw fa-ellipsis-v"></i></a>
	<ul class="dropdown-menu dropdown-menu-right" role="menu"></ul>
</span>

	</small>

	<!-- IF !hideReplies -->
	<a component="post/reply-count" href="#" class="threaded-replies no-select <!-- IF !posts.replies.count -->hidden<!-- ENDIF !posts.replies.count -->">
		<span component="post/reply-count/avatars" class="avatars <!-- IF posts.replies.hasMore -->hasMore<!-- ENDIF posts.replies.hasMore -->">
			{{{each posts.replies.users}}}
			{buildAvatar(posts.replies.users, "xs", true, "")}
			{{{end}}}
		</span>

		<span class="replies-count" component="post/reply-count/text" data-replies="{posts.replies.count}">{posts.replies.text}</span>
		<span class="replies-last hidden-xs">[[topic:last_reply_time]] <span class="timeago" title="{posts.replies.timestampISO}"></span></span>

		<i class="fa fa-fw fa-chevron-right" component="post/replies/open"></i>
		<i class="fa fa-fw fa-chevron-down hidden" component="post/replies/close"></i>
		<i class="fa fa-fw fa-spin fa-spinner hidden" component="post/replies/loading"></i>
	</a>
	<!-- ENDIF !hideReplies -->
</div>
				</li>
			{{{end}}}
		</ul>

		<!-- IF config.enableQuickReply -->
		<!-- IF privileges.topics:reply -->
<div class="clearfix quick-reply">
	<div class="icon pull-left hidden-xs">
		<a href="<!-- IF posts.user.userslug -->{config.relative_path}/user/{posts.user.userslug}<!-- ELSE -->#<!-- ENDIF posts.user.userslug -->">
			{buildAvatar(loggedInUser, "46", true, "", "user/picture")}
			<!-- IF loggedInUser.status -->
			<i component="user/status" class="fa fa-circle status {loggedInUser.status}" title="[[global:{loggedInUser.status}]]"></i>
			<!-- ENDIF loggedInUser.status -->
		</a>
	</div>
	<form method="post" action="{config.relative_path}/compose">
		<input type="hidden" name="tid" value="{tid}" />
		<input type="hidden" name="_csrf" value="{config.csrf_token}" />
		<div class="quickreply-message">
			<textarea name="content" component="topic/quickreply/text" class="form-control" rows="5"></textarea>
		</div>
		<button type="submit" component="topic/quickreply/button" class="btn btn-primary pull-right">[[persona:post-quick-reply]]</button>
	</form>
</div>
<!-- ENDIF privileges.topics:reply -->

		<!-- ENDIF config.enableQuickReply -->

		<!-- IF config.usePagination -->
		<div component="pagination" class="text-center pagination-container<!-- IF !pagination.pages.length --> hidden<!-- ENDIF !pagination.pages.length -->">
	<ul class="pagination hidden-xs">
		<li class="previous pull-left<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
			<a href="?{pagination.prev.qs}" data-page="{pagination.prev.page}"><i class="fa fa-chevron-left"></i> </a>
		</li>

		{{{each pagination.pages}}}
			<!-- IF pagination.pages.separator -->
			<li component="pagination/select-page" class="page select-page">
				<a href="#"><i class="fa fa-ellipsis-h"></i></a>
			</li>
			<!-- ELSE -->
			<li class="page<!-- IF pagination.pages.active --> active<!-- ENDIF pagination.pages.active -->" >
				<a href="?{pagination.pages.qs}" data-page="{pagination.pages.page}">{pagination.pages.page}</a>
			</li>
			<!-- ENDIF pagination.pages.separator -->
		{{{end}}}

		<li class="next pull-right<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
			<a href="?{pagination.next.qs}" data-page="{pagination.next.page}"> <i class="fa fa-chevron-right"></i></a>
		</li>
	</ul>

	<ul class="pagination hidden-sm hidden-md hidden-lg">
		<li class="first<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
			<a href="?{pagination.first.qs}" data-page="1"><i class="fa fa-fast-backward"></i> </a>
		</li>

		<li class="previous<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
			<a href="?{pagination.prev.qs}" data-page="{pagination.prev.page}"><i class="fa fa-chevron-left"></i> </a>
		</li>

		<li component="pagination/select-page" class="page select-page">
			<a href="#">{pagination.currentPage} / {pagination.pageCount}</a>
		</li>

		<li class="next<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
			<a href="?{pagination.next.qs}" data-page="{pagination.next.page}"> <i class="fa fa-chevron-right"></i></a>
		</li>

		<li class="last<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
			<a href="?{pagination.last.qs}" data-page="{pagination.pageCount}"><i class="fa fa-fast-forward"></i> </a>
		</li>
	</ul>
</div>
		<!-- ENDIF config.usePagination -->

		<div class="navigator-thumb text-center hidden">
			<strong class="text"></strong><br/>
			<span class="time"></span>
		</div>
		<div class="visible-xs visible-sm pagination-block text-center">
			<div class="progress-bar"></div>
			<div class="wrapper">
				<i class="fa fa-2x fa-angle-double-up pointer fa-fw pagetop"></i>
				<i class="fa fa-2x fa-angle-up pointer fa-fw pageup"></i>
				<span class="pagination-text"></span>
				<i class="fa fa-2x fa-angle-down pointer fa-fw pagedown"></i>
				<i class="fa fa-2x fa-angle-double-down pointer fa-fw pagebottom"></i>
			</div>
		</div>
	</div>
	<div data-widget-area="sidebar" class="col-lg-3 col-sm-12 <!-- IF !widgets.sidebar.length -->hidden<!-- ENDIF !widgets.sidebar.length -->">
		{{{each widgets.sidebar}}}
		{{widgets.sidebar.html}}
		{{{end}}}
	</div>
</div>

<div data-widget-area="footer">
	{{{each widgets.footer}}}
	{{widgets.footer.html}}
	{{{end}}}
</div>

<!-- IF !config.usePagination -->
<noscript>
	<div component="pagination" class="text-center pagination-container<!-- IF !pagination.pages.length --> hidden<!-- ENDIF !pagination.pages.length -->">
	<ul class="pagination hidden-xs">
		<li class="previous pull-left<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
			<a href="?{pagination.prev.qs}" data-page="{pagination.prev.page}"><i class="fa fa-chevron-left"></i> </a>
		</li>

		{{{each pagination.pages}}}
			<!-- IF pagination.pages.separator -->
			<li component="pagination/select-page" class="page select-page">
				<a href="#"><i class="fa fa-ellipsis-h"></i></a>
			</li>
			<!-- ELSE -->
			<li class="page<!-- IF pagination.pages.active --> active<!-- ENDIF pagination.pages.active -->" >
				<a href="?{pagination.pages.qs}" data-page="{pagination.pages.page}">{pagination.pages.page}</a>
			</li>
			<!-- ENDIF pagination.pages.separator -->
		{{{end}}}

		<li class="next pull-right<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
			<a href="?{pagination.next.qs}" data-page="{pagination.next.page}"> <i class="fa fa-chevron-right"></i></a>
		</li>
	</ul>

	<ul class="pagination hidden-sm hidden-md hidden-lg">
		<li class="first<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
			<a href="?{pagination.first.qs}" data-page="1"><i class="fa fa-fast-backward"></i> </a>
		</li>

		<li class="previous<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
			<a href="?{pagination.prev.qs}" data-page="{pagination.prev.page}"><i class="fa fa-chevron-left"></i> </a>
		</li>

		<li component="pagination/select-page" class="page select-page">
			<a href="#">{pagination.currentPage} / {pagination.pageCount}</a>
		</li>

		<li class="next<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
			<a href="?{pagination.next.qs}" data-page="{pagination.next.page}"> <i class="fa fa-chevron-right"></i></a>
		</li>

		<li class="last<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
			<a href="?{pagination.last.qs}" data-page="{pagination.pageCount}"><i class="fa fa-fast-forward"></i> </a>
		</li>
	</ul>
</div>
</noscript>
<!-- ENDIF !config.usePagination -->
