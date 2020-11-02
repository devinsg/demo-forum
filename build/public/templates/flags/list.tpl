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


<div class="row">
	<div class="col-sm-4 col-md-3">
		<div class="text-center">
	<div class="panel panel-default">
		<div class="panel-body collapse" id="flags-daily-wrapper" aria-expanded="false">
			<div><canvas id="flags:daily" height="150"></canvas></div>
		</div>
		<div class="panel-footer" aria-controls="#flags-daily-wrapper"><small>[[flags:graph-label]]</small>&nbsp;<span class="caret"></span></div>
	</div>
</div>

<div class="panel panel-default">
	<div class="panel-heading">
		<h3 class="panel-title">[[flags:quick-filters]]</h3>
	</div>
	<div class="panel-body">
		<ul>
			<li><a href="{config.relative_path}/flags?quick=mine">[[flags:filter-quick-mine]]</a></li>
		</ul>
	</div>
</div>

<div class="panel panel-default">
	<div class="panel-heading">
		<h3 class="panel-title">[[flags:filters]]</h3>
	</div>
	<div class="panel-body">
		<form role="form" component="flags/filters">
			<fieldset>
				<div class="form-group">
					<label for="sort">[[flags:sort]]</label>
					<select class="form-control" id="sort" name="sort">
						<optgroup label="[[flags:sort-all]]">
							<option value="newest">[[flags:sort-newest]]</option>
							<option value="oldest">[[flags:sort-oldest]]</option>
							<option value="reports">[[flags:sort-reports]]</option>
						</optgroup>
						<optgroup label="[[flags:sort-posts-only]]">
							<option value="downvotes">[[flags:sort-downvotes]]</option>
							<option value="upvotes">[[flags:sort-upvotes]]</option>
							<option value="replies">[[flags:sort-replies]]</option>
						</optgroup>
					</select>
				</div>
				<div class="form-group">
					<label for="filter-state">[[flags:filter-state]]</label>
					<select class="form-control" id="filter-state" name="state">
						<option value="">[[flags:state-all]]</option>
						<option value="open">[[flags:state-open]]</option>
						<option value="wip">[[flags:state-wip]]</option>
						<option value="resolved">[[flags:state-resolved]]</option>
						<option value="rejected">[[flags:state-rejected]]</option>
					</select>
				</div>

				<div class="form-group">
					<label for="filter-type">[[flags:filter-type]]</label>
					<select class="form-control" id="filter-type" name="type">
						<option value="">[[flags:filter-type-all]]</option>
						<option value="post">[[flags:filter-type-post]]</option>
						<option value="user">[[flags:filter-type-user]]</option>
					</select>
				</div>

				<div class="form-group">
					<label for="filter-cid">[[flags:filter-cid]]</label>
					<select class="form-control" id="filter-cid" name="cid" multiple="true">
						<option value="">[[flags:filter-cid-all]]</option>
						{{{each categories}}}
						<option value="@key">@value</option>
						{{{end}}}
					</select>
				</div>
			</fieldset>

			<fieldset class="collapse" id="more-filters" aria-expanded="false">
				<div class="form-group">
					<label for="filter-assignee">[[flags:filter-assignee]]</label>
					<input type="number" class="form-control" id="filter-assignee" name="assignee" min="0" />
				</div>

				<div class="form-group">
					<label for="filter-targetUid">[[flags:filter-targetUid]]</label>
					<input type="number" class="form-control" id="filter-targetUid" name="targetUid" min="0" />
				</div>

				<div class="form-group">
					<label for="filter-reporterId">[[flags:filter-reporterId]]</label>
					<input type="number" class="form-control" id="filter-reporterId" name="reporterId" min="0" />
				</div>
			</fieldset>

			<button type="button" class="btn btn-link btn-block" data-toggle="collapse" data-target="#more-filters" aria-controls="#more-filters">[[flags:more-filters]]&nbsp;<span class="caret"></span></button>
			<button type="button" id="apply-filters" class="btn btn-primary btn-block">[[flags:apply-filters]]</button>
		</form>
	</div>
</div>
	</div>
	<div class="col-sm-8 col-md-9">
		<!-- IF hasFilter -->
		<div class="alert alert-warning">
			<p class="pull-right">
				<a href="{config.relative_path}/flags?reset=1">[[flags:filter-reset]]</a>
			</p>
			[[flags:filter-active]]
		</div>
		<!-- ENDIF hasFilter -->

		<div class="btn-group pull-right" component="flags/bulk-actions">
			<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" autocomplete="off" aria-haspopup="true" aria-expanded="false" disabled="disabled">
				<i class="fa fa-clone"></i> [[flags:bulk-actions]] <span class="caret"></span>
			</button>
			<ul class="dropdown-menu">
				<li><a href="#" data-action="bulk-assign">[[flags:assign-to-me]]</a></li>
				<li><a href="#" data-action="bulk-mark-resolved">[[flags:bulk-resolve]]</a></li>
			</ul>
		</div>

		<table class="table table-striped table-hover" component="flags/list">
			<thead>
				<tr>
					<th>
						<input type="checkbox" data-action="toggle-all" autocomplete="off" />
					</th>
					<th></th>
					<th><span class="hidden-xs">[[flags:reports]] </span><i class="fa fa-user-plus"></i></th>
					<th><span class="hidden-xs">[[flags:first-reported]] </span><i class="fa fa-clock-o"></i></th>
					<th>[[flags:state]]</th>
				</tr>
			</thead>
			<tbody>
				<!-- IF !flags.length -->
				<tr>
					<td colspan="4">
						<div class="alert alert-success text-center">
							[[flags:no-flags]]
						</div>
					</td>
				</tr>
				<!-- ENDIF !flags.length -->
				{{{each flags}}}
				<tr data-flag-id="{../flagId}">
					<td>
						<input type="checkbox" autocomplete="off" />
					</td>
					<td>
						<a href="{config.relative_path}/flags/{../flagId}">
							<strong>{../target_readable}</strong>
						</a>
					</td>
					<td>
						{./heat}
					</td>
					<td><span class="timeago" title="{../datetimeISO}"></span></td>
					<td><span class="label label-{../labelClass}">[[flags:state-{../state}]]</span></td>
				</tr>
				{{{end}}}
			</tbody>
		</table>

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
