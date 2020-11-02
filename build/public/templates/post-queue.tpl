<!-- IF breadcrumbs.length -->
<ol class="breadcrumb" itemscope="itemscope" itemprop="breadcrumb" itemtype="http://schema.org/BreadcrumbList">
	{{{each breadcrumbs}}}
	<li<!-- IF @last --> component="breadcrumb/current"<!-- ENDIF @last --> itemscope="itemscope" itemprop="itemListElement" itemtype="http://schema.org/ListItem" <!-- IF @last -->class="active"<!-- ENDIF @last -->>
		<meta itemprop="position" content="@index" />
		<!-- IF !@last --><a href="{breadcrumbs.url}" itemprop="item"><!-- ENDIF !@last -->
			<span itemprop="name">
				{breadcrumbs.text}
				<!-- IF @last -->
				<!-- IF !feeds:disableRSS -->
				<!-- IF rssFeedUrl --><a target="_blank" href="{rssFeedUrl}" itemprop="item"><i class="fa fa-rss-square"></i></a><!-- ENDIF rssFeedUrl --><!-- ENDIF !feeds:disableRSS -->
				<!-- ENDIF @last -->
			</span>
		<!-- IF !@last --></a><!-- ENDIF !@last -->
	</li>
	{{{end}}}
</ol>
<!-- ENDIF breadcrumbs.length -->

<div class="btn-toolbar">
	<div component="category/dropdown" class="btn-group pull-right category-dropdown-container bottom-sheet {{{ if !categories.length }}}hidden{{{end}}}">
    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
        {{{ if selectedCategory }}}<span class="fa-stack" style="{function.generateCategoryBackground, selectedCategory}"><i class="fa fa-fw fa-stack-1x {selectedCategory.icon}" style="color: {selectedCategory.color};"></i></span> <span class="visible-sm-inline visible-md-inline visible-lg-inline">{selectedCategory.name}</span>{{{ else }}}
        <span class="visible-sm-inline visible-md-inline visible-lg-inline">[[unread:all_categories]]</span><span class="visible-xs-inline"><i class="fa fa-fw fa-list"></i></span>{{{ end }}} <span class="caret"></span>
    </button>
    <div component="category-selector-search" class="hidden">
        <input type="text" class="form-control" autocomplete="off">
    </div>
    <ul component="category/list" class="dropdown-menu category-dropdown-menu" role="menu">
        <li role="presentation" class="category">
            <a role="menu-item" href="{config.relative_path}/{allCategoriesUrl}"><i component="category/select/icon" class="fa fa-fw fa-check {{{if selectedCategory}}}invisible{{{end}}}"></i> [[unread:all_categories]]</a>
        </li>
        {{{each categories}}}
        <li role="presentation" class="category {{{ if categories.disabledClass }}}disabled{{{ end }}}" data-cid="{categories.cid}" data-parent-cid="{categories.parentCid}" data-name="{categories.name}">
            <a role="menu-item" href="#">{categories.level}<i component="category/select/icon" class="fa fa-fw fa-check {{{ if !categories.selected }}}invisible{{{ end }}}"></i><span component="category-markup">{{{ if categories.icon }}}<span class="fa-stack" style="{function.generateCategoryBackground}"><i class="fa fa-fw fa-stack-1x {categories.icon}" style="color: {categories.color};"></i></span>{{{ end }}} {categories.name}</span></a>
        </li>
        {{{end}}}
    </ul>
</div>
</div>
<hr class="hidden-xs"/>
<div class="row">
	<div class="col-xs-12">
		<div class="post-queue panel panel-primary preventSlideout">
			<div class="panel-heading">
				[[post-queue:post-queue]]
			</div>

			<!-- IF !posts.length -->
			<p class="panel-body">
				[[post-queue:description, {config.relative_path}/admin/settings/post#post-queue]]
			</p>
			<!-- ENDIF !posts.length -->

			<div class="table-responsive">
				<table class="table table-striped posts-list">
					<thead>
						<tr>
							<th>[[post-queue:user]]</th>
							<th>[[post-queue:category]] <i class="fa fa-info-circle" data-toggle="tooltip" title="[[post-queue:content-editable]]"></i></th>
							<th>[[post-queue:title]] <i class="fa fa-info-circle" data-toggle="tooltip" title="[[post-queue:content-editable]]"></i></th>
							<th>[[post-queue:content]] <i class="fa fa-info-circle" data-toggle="tooltip" title="[[post-queue:content-editable]]"></i></th>
							<th>[[post-queue:posted]]</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<!-- BEGIN posts -->
						<tr data-id="{posts.id}">
							<td class="col-md-1">
								<!-- IF posts.user.userslug -->
								<a href="{config.relative_path}/uid/{posts.user.uid}">{posts.user.username}</a>
								<!-- ELSE -->
								{posts.user.username}
								<!-- ENDIF posts.user.userslug -->
							</td>
							<td class="col-md-2 topic-category" {{{if posts.data.cid}}}data-editable="editable"{{{end}}}">
								<a href="{config.relative_path}/category/{posts.category.slug}"><!-- IF posts.category.icon --><span class="fa-stack"><i style="color: {posts.category.bgColor};" class="fa fa-circle fa-stack-2x"></i><i style="color: {posts.category.color};" class="fa fa-stack-1x fa-fw {posts.category.icon}"></i></span><!-- ENDIF posts.category.icon --> {posts.category.name}</a>
							</td>
							<td class="col-md-2 topic-title">
								<!-- IF posts.data.tid -->
								<a href="{config.relative_path}/topic/{posts.data.tid}">[[post-queue:reply-to, {posts.topic.title}]]</a>
								<!-- ENDIF posts.data.tid -->
								{posts.data.title}
							</td>
							{{{if !posts.data.tid}}}
							<td class="col-md-2 topic-title-editable hidden">
								<input class="form-control" type="text" value="{posts.data.title}"/>
							</td>
							{{{end}}}
							<td class="col-md-5 post-content">{posts.data.content}</td>
							<td class="col-md-5 post-content-editable hidden">
								<textarea class="form-control">{posts.data.rawContent}</textarea>
							</td>
							<td class="col-md-1">
								<span class="timeago" title={posts.data.timestampISO}></span>
							</td>
							<td class="col-md-1">
								<div class="btn-group pull-right">
									<button class="btn btn-success btn-xs" data-action="accept"><i class="fa fa-check"></i></button>
									<button class="btn btn-danger btn-xs" data-action="reject"><i class="fa fa-times"></i></button>
								</div>
							</td>
						</tr>
						<!-- END posts -->
					</tbody>
				</table>
			</div>

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
		</div>
	</div>
</div>