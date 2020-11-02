<div class="outgoing">

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


	<div class="well">
		<h3>
			[[notifications:outgoing_link_message, {title}]]
		</h3>
		<p>
			<a href="{outgoing}" rel="nofollow noopener noreferrer" class="btn btn-primary btn-lg">[[notifications:continue_to, {outgoing}]]</a>
			<a id="return-btn" href="#" class="btn btn-lg btn-warning">[[notifications:return_to, {title}]]</a>
		</p>
	</div>
</div>

<script>
	$('#return-btn').on('click', function() {
		history.back();
		return false;
	});
</script>
