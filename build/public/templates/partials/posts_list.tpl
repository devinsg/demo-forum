<ul component="posts" class="posts-list" data-nextstart="{nextStart}">
	{{{each posts}}}
	<li component="post" class="posts-list-item row<!-- IF ../deleted --> deleted<!-- ELSE --><!-- IF ../topic.deleted --> deleted<!-- ENDIF --><!-- ENDIF -->" data-pid="{../pid}" data-uid="{../uid}">
    <div class="col-lg-11 col-sm-10 col-xs-9 post-body">
        <a class="topic-title" href="{config.relative_path}/post/{../pid}">
            <!-- IF !../isMainPost -->RE: <!-- ENDIF -->{../topic.title}
        </a>

        <div component="post/content" class="content">
            {../content}
        </div>

        <small class="topic-category"><a href="{config.relative_path}/category/{../category.slug}">[[global:posted_in, {../category.name}]]</a></small>

        <div class="post-info">
            <a href="{config.relative_path}/user/{../user.userslug}">{buildAvatar(../user, "md", true, "user-img")}</a>

            <div class="post-author">
                <a href="{config.relative_path}/user/{../user.userslug}">{../user.username}</a><br />
                <span class="timeago" title="{../timestampISO}"></span>
            </div>
        </div>
    </div>
</li>
	{{{end}}}
</ul>
<div component="posts/loading" class="loading-indicator text-center hidden">
	<i class="fa fa-refresh fa-spin"></i>
</div>